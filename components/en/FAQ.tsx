'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';

const FAQS = [
  {
    q: 'Will this work for my business?',
    a: "If you're a local business that relies on customers finding you, this is built for you. Roofers, realtors, contractors, dentists, cleaners, whoever your customers search for locally, we help them find you first.",
  },
  {
    q: 'How long until I see results?',
    a: 'Most businesses see ranking improvements within 2 to 3 weeks. Competitive markets can take longer. Either way, the guarantee stands: top 3 in 90 days.',
  },
  {
    q: 'How much of my time does it require?',
    a: "Almost none. A 30-minute onboarding call so we can gather what we need, and then we handle the rest. You don't need to understand the technical side. You just keep running your business.",
  },
  {
    q: 'What if I want my money back?',
    a: "If you're not in the top 3 within 90 days, you contact us and you get a full refund. No hassle. We don't want to keep money we didn't earn. Simple as that.",
  },
  {
    q: 'How long until my website is completed?',
    a: "No more than 7 days. You'll get a preview to review, then a live site within a week. More complex projects can take 2 weeks or more, and we'll keep you updated the whole way.",
  },
  {
    q: "What if I don't like the website design?",
    a: 'Every design is custom made and built around your brand. You are the judge. Nothing goes live without your approval.',
  },
  {
    q: 'What are automations?',
    a: 'Think of the repetitive admin work you or your team do by hand: replying to leads, sending follow-ups, updating your CRM, booking appointments. An automation is a system that does those tasks for you, automatically, around the clock. You set it up once and it just runs.',
  },
  {
    q: 'How do I know an automation fits my business?',
    a: 'Automations, like our websites, are custom made. There are no templates. We build them around your business and your specific needs, so they fit the way you already work.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-brand-bg py-[120px] border-t border-brand-border">
      <div className="w-full max-w-[820px] mx-auto px-6 md:px-12">

        <div className="mb-12 GSAP-reveal" data-reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-brand-accent mb-4">
            Questions
          </div>
          <h2 className="font-display font-normal text-brand-primary text-[36px] md:text-[52px] leading-tight">
            The honest answers.
          </h2>
        </div>

        <div className="border-t border-brand-border GSAP-reveal" data-reveal>
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-brand-border">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 text-left py-6 cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-[20px] md:text-[24px] text-brand-primary leading-snug">
                    {item.q}
                  </span>
                  <Plus
                    size={22}
                    className={`shrink-0 text-brand-accent transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={{ maxHeight: isOpen ? '320px' : '0px', opacity: isOpen ? 1 : 0 }}
                >
                  <p className="font-sans font-light text-[15px] md:text-[16px] text-brand-muted leading-[1.7] pb-6 pr-10">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
