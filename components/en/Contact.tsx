'use client';

import { useState, useEffect } from 'react';

export function Contact() {
  const [mode, setMode] = useState<'general' | 'audit' | 'demo'>('general');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [noWebsite, setNoWebsite] = useState(false);

  useEffect(() => {
    const handleSetMode = (e: any) => {
      if (e.detail) setMode(e.detail);
    };
    window.addEventListener('setContactMode', handleSetMode);
    return () => window.removeEventListener('setContactMode', handleSetMode);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 px-6 max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <p className="font-mono text-sm tracking-widest uppercase text-brand-accent mb-4">Let&apos;s work together</p>
        <h2 className="font-serif text-4xl md:text-6xl italic">Ready to build something that runs?</h2>
      </div>

      <div className="bg-[#0d0d0d] border border-brand-border rounded-3xl p-8 md:p-12">
        <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-brand-border">
          <button 
            onClick={() => setMode('general')}
            className={`px-4 py-2 rounded-full font-mono text-sm transition-colors ${mode === 'general' ? 'bg-brand-primary text-brand-bg' : 'text-brand-muted hover:text-brand-primary'}`}
          >
            General Inquiry
          </button>
          <button 
            onClick={() => setMode('audit')}
            className={`px-4 py-2 rounded-full font-mono text-sm transition-colors ${mode === 'audit' ? 'bg-brand-primary text-brand-bg' : 'text-brand-muted hover:text-brand-primary'}`}
          >
            Rank Audit
          </button>
          <button 
            onClick={() => setMode('demo')}
            className={`px-4 py-2 rounded-full font-mono text-sm transition-colors ${mode === 'demo' ? 'bg-brand-primary text-brand-bg' : 'text-brand-muted hover:text-brand-primary'}`}
          >
            Demo Site
          </button>
        </div>

        {status === 'success' ? (
          <div className="text-center py-12">
            <h3 className="font-serif text-3xl mb-4 text-brand-accent">Thanks, we&apos;re on it.</h3>
            <p className="text-brand-muted">We&apos;ll get in touch as soon as possible.</p>
            <button onClick={() => setStatus('idle')} className="mt-8 text-sm font-mono text-brand-muted hover:text-brand-primary underline">
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-mono text-brand-muted uppercase tracking-wider">First Name</label>
                <input required type="text" className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-brand-muted uppercase tracking-wider">Last Name</label>
                <input required type="text" className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-mono text-brand-muted uppercase tracking-wider">Email</label>
                <input required type="email" className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-brand-muted uppercase tracking-wider">Business Name</label>
                <input required type="text" className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors" />
              </div>
            </div>

            {!noWebsite && (
              <div className="space-y-2">
                <label className="text-sm font-mono text-brand-muted uppercase tracking-wider">Website URL</label>
                <input type="url" className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors" placeholder="https://" />
              </div>
            )}
            
            <div className="flex items-center gap-2">
              <input 
                type="checkbox" 
                id="noWebsite" 
                checked={noWebsite} 
                onChange={(e) => setNoWebsite(e.target.checked)}
                className="rounded border-brand-border bg-brand-bg text-brand-accent focus:ring-brand-accent"
              />
              <label htmlFor="noWebsite" className="text-sm text-brand-muted">I don&apos;t have a website yet</label>
            </div>

            {mode === 'audit' && (
              <div className="space-y-2">
                <label className="text-sm font-mono text-brand-muted uppercase tracking-wider">Google Maps URL</label>
                <input required type="url" className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors" placeholder="Link to your Google Business Profile" />
              </div>
            )}

            {mode === 'general' && (
              <div className="space-y-2">
                <label className="text-sm font-mono text-brand-muted uppercase tracking-wider">Message</label>
                <textarea required rows={4} className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors resize-none" />
              </div>
            )}

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full py-4 mt-4 bg-brand-primary text-brand-bg font-medium rounded-xl hover:bg-white transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? 'Sending...' : 'Submit Request'}
            </button>
          </form>
        )}
      </div>
      
      <p className="text-center mt-8 text-brand-muted text-sm">
        Or email us directly at <a href="mailto:tommy@tommyhq.com" className="text-brand-primary underline">tommy@tommyhq.com</a>
      </p>
    </section>
  );
}
