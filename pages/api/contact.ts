import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';

type ResponseData = {
  message?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  // Server-side email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // Resolve absolute path to the CV PDF
  const cvPath = path.join(process.cwd(), 'public', 'cv-jesus-ali.pdf');

  // Verify the PDF file actually exists
  if (!fs.existsSync(cvPath)) {
    return res.status(500).json({ error: 'CV file not found on server.' });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const fromEmail = process.env.CONTACT_EMAIL || 'no-reply@jesusali.com';

  // Check if credentials are configured
  if (!smtpUser || !smtpPass || !smtpHost) {
    console.warn(
      'SMTP is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS in your environment variables to send real emails.'
    );
    // Return a successful simulated response for testing UI states
    return res.status(200).json({
      message: 'CV sent successfully (Simulated mode: Add SMTP credentials to your environment to send real emails).',
    });
  }

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(smtpPort) || 587,
    secure: Number(smtpPort) === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    // Send email with attachment
    await transporter.sendMail({
      from: `"Jesus Ali" <${fromEmail}>`,
      to: email,
      subject: 'CV - Jesus Ali (Senior Front End Developer)',
      text: `Hola,\n\nMuchas gracias por tu interés en mi portafolio. Adjunto a este correo encontrarás mi Currículum Vitae en formato PDF.\n\nSaludos cordiales,\nJesus Ali\nSenior Front End Developer`,
      attachments: [
        {
          filename: 'CV_Jesus_Ali.pdf',
          path: cvPath,
        },
      ],
    });

    return res.status(200).json({ message: 'CV sent successfully! Please check your inbox.' });
  } catch (error: any) {
    console.error('Error sending email via Nodemailer:', error);
    return res.status(500).json({ error: 'Failed to send email. Please try downloading the CV directly.' });
  }
}
