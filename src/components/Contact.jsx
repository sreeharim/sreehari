import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from './Button';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs.sendForm(
            'service_1nbbt1p',
            'template_qcs06kn',
            form.current,
            'XR2AvxBvMjOag6YkJ'
        )
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                e.target.reset(); // Clear the form
                setTimeout(() => setStatus(''), 5000); // Clear success message after 5s
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                setTimeout(() => setStatus(''), 5000); // Clear error message after 5s
            });
    };

    return (
        <footer className="contact container" id="contact">
            <div className="contact-wrapper glass-panel">
                <div className="contact-info">
                    <h2 className="heading-lg">Let's <span className="text-gradient">Connect</span></h2>
                    <p className="contact-desc">
                        I'm currently open to new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="social-links">
                        <a href="https://github.com/sreeharim" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/sreeharim1992/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                        <a href="https://x.com/sreeharim1" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X (Twitter)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </a>
                    </div>
                </div>

                <form className="contact-form" ref={form} onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="John Doe" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="john@example.com" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
                    </div>

                    {status === 'success' && <div className="form-message success" style={{ color: 'var(--accent-neon)', marginBottom: '1rem' }}>Message sent successfully!</div>}
                    {status === 'error' && <div className="form-message error" style={{ color: '#ff4d4d', marginBottom: '1rem' }}>Failed to send message. Please try again.</div>}

                    <Button type="submit" variant="primary" className="submit-btn" disabled={status === 'sending'}>
                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </Button>
                </form>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Sreehari M. Built with React & Vite.</p>
            </div>
        </footer>
    );
};

export default Contact;
