import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { ArrowUpRight, CheckCircle2, LoaderCircle, Send } from 'lucide-react';
import { FORMSPREE_ENDPOINT } from '../config';

type Status = 'idle' | 'sending' | 'success' | 'error';
export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' });
  const ready = Boolean(FORMSPREE_ENDPOINT.trim());

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!ready) { setStatus('error'); setError('The Formspree endpoint has not been configured yet. Please add VITE_FORMSPREE_ENDPOINT to your .env file.'); return; }
    setStatus('sending'); setError('');
    const form = event.currentTarget;
    const data = new FormData(form);
    data.set('_replyto', values.email);
    data.set('_subject', `New Portfolio Enquiry – ${values.subject}`);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result?.errors?.map((item: { message: string }) => item.message).join(', ') || 'Your message could not be sent. Please try again.');
      setStatus('success'); setValues({ name: '', email: '', subject: '', message: '' }); form.reset();
    } catch (err) { setStatus('error'); setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.'); }
  }
  const update = (field: keyof typeof values) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setValues(v => ({ ...v, [field]: e.target.value }));
  return <form className="contact-form" onSubmit={handleSubmit}>
    <div className="form-grid">
      <label>FULL NAME<input name="name" autoComplete="name" required minLength={2} maxLength={90} value={values.name} onChange={update('name')} placeholder="Your name" /></label>
      <label>EMAIL ADDRESS<input name="email" type="email" autoComplete="email" required maxLength={150} value={values.email} onChange={update('email')} placeholder="you@example.com" /></label>
    </div>
    <label>SUBJECT<input name="subject" required minLength={3} maxLength={120} value={values.subject} onChange={update('subject')} placeholder="What would you like to discuss?" /></label>
    <label>MESSAGE<textarea name="message" required minLength={10} maxLength={4000} rows={5} value={values.message} onChange={update('message')} placeholder="Tell me a little about your opportunity or idea..." /></label>
    <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="honeypot" aria-hidden="true" />
    {status === 'success' && <div className="form-alert success"><CheckCircle2 size={18} /> Message sent successfully. Thank you for reaching out!</div>}
    {status === 'error' && <div className="form-alert error" role="alert">{error}</div>}
    {!ready && <p className="form-note">Contact form setup pending: add your real Formspree endpoint to <code>.env</code> before publishing.</p>}
    <button className="button button-primary submit-button" type="submit" disabled={status === 'sending'}>
      {status === 'sending' ? <><LoaderCircle className="spin" size={17} /> Sending message</> : <>Send Message <Send size={16} /></>}
      <ArrowUpRight className="button-arrow" size={16} />
    </button>
    <p className="privacy-note">Your details are used only to respond to your enquiry.</p>
  </form>;
}
