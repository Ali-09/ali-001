import React, { useState, FormEvent, useContext } from 'react';
import Context from 'context/Context';
import { TitleGeneral } from 'components';

const BodyContact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const context = useContext(Context);
  const t = context?.t;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) {
      setStatus('error');
      setMessage(t?.contact.errorEmailMsg || 'Please enter a valid email address.');
      return;
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setMessage(t?.contact.errorEmailMsg || 'Please enter a valid email address.');
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
        setMessage(data.message || (t?.contact.successMsg || 'CV sent successfully! Please check your email.'));
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
                {t?.contact.fig03 || "[FIG 03 // COMMUNICATION_LINK]"}
            </div>
            <TitleGeneral text={t?.contact.title || "CONTACT"}/>
        </div>
        <div className="form-email border border-lines hover:border-accent hover:-translate-y-0.5 transition-all duration-300 rounded-md p-4 sm:p-6 bg-surface relative group shadow-sm">
            <div className="absolute -top-2 -left-2 text-[10px] font-mono text-secondary/50 group-hover:text-accent group-hover:rotate-45 transition-all duration-300 select-none">+</div>
            <div className="absolute -top-2 -right-2 text-[10px] font-mono text-secondary/50 group-hover:text-accent group-hover:rotate-45 transition-all duration-300 select-none">+</div>
            <div className="absolute -bottom-2 -left-2 text-[10px] font-mono text-secondary/50 group-hover:text-accent group-hover:rotate-45 transition-all duration-300 select-none">+</div>
            <div className="absolute -bottom-2 -right-2 text-[10px] font-mono text-secondary/50 group-hover:text-accent group-hover:rotate-45 transition-all duration-300 select-none">+</div>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="flex items-center justify-between mb-2 font-mono text-[11px] text-secondary">
                  <span>{t?.contact.inputEmail || "[INPUT // EMAIL_ADDRESS]"}</span>
                  <span className="text-accent font-semibold">{t?.contact.required || "*REQUIRED"}</span>
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading'}
                  placeholder={t?.contact.placeholder || "name@example.com"}
                  className="px-3 py-2 border border-lines rounded-md bg-surface text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/40 font-mono text-sm transition-all duration-200 mb-4"
                />
                
                <button 
                  type="submit" 
                  className="btn border-accent text-accent font-bold hover:bg-accent/10 disabled:opacity-50 my-1"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (t?.contact.sendingBtn || 'SENDING...') : (t?.contact.sendBtn || 'SEND MESSAGE →')}
                </button>

                {message && (
                  <p className={`text-sm font-mono my-2 text-center ${
                    status === 'success' ? 'text-emerald-400' : 'text-red-400'
                  }`}>
                    {message}
                  </p>
                )}

                <div className="flex flex-col mt-4 pt-4 border-t border-lines/40">
                  <p className="font-mono text-xs text-secondary text-center mb-3">{t?.contact.orDownload || "Or download it directly here:"}</p>
                  <a 
                    href="/cv-jesus-ali.pdf" 
                    download="CV_Jesus_Ali.pdf" 
                    className="btn my-1"
                  >
                    <span>{t?.contact.downloadCv || "DOWNLOAD CV (PDF)"}</span>
                    <span className="text-accent font-bold">↓</span>
                  </a>
                </div>

                <p className='text-info mt-4 text-xs font-mono text-secondary/70'>
                    {t?.contact.disclaimer || "The use of the information provided is only to send you a pdf document by email."}
                </p>
            </form>
        </div>
    </div>
  );
};

export default BodyContact;