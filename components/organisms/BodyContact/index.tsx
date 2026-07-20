import React, { useState, FormEvent } from 'react';
import { TitleGeneral } from 'components';

const BodyContact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email.');
      return;
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'CV sent successfully! Please check your email.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Network error. Please try again later.');
    }
  };

  return (
    <div className="contact">
        <div className="title-contact">
            <div className="font-mono text-[11px] text-secondary/70 uppercase tracking-widest mb-1">
                [FIG 03 // COMMUNICATION_LINK]
            </div>
            <TitleGeneral text="CONTACT"/>
        </div>
        <div className="form-email">
            <form onSubmit={handleSubmit} className="flex flex-col">
                <p className="text">Email:</p>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading'}
                  placeholder="name@example.com"
                  className="px-2"
                />
                
                <button 
                  type="submit" 
                  className="btn my-1 cursor-pointer disabled:opacity-50"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'SENDING...' : 'SEND'}
                </button>

                {message && (
                  <p className={`text-lg my-1 text-center font-normal ${
                    status === 'success' ? 'text-emerald-400' : 'text-red-400'
                  }`}>
                    {message}
                  </p>
                )}

                <div className="flex flex-col mt-4">
                  <p className="text-info text-center mb-2">Or download it directly here:</p>
                  <a 
                    href="/cv-jesus-ali.pdf" 
                    download="CV_Jesus_Ali.pdf" 
                    className="btn my-1 flex items-center justify-center cursor-pointer select-none text-center"
                  >
                    DOWNLOAD CV (PDF)
                  </a>
                </div>

                <p className='text-info mt-4'>
                    The use of the information provided is only to send you a pdf document 
                    by email to the email address provided in this form.
                </p>
            </form>
        </div>
    </div>
  )
}

export default BodyContact;