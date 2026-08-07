'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      q: "Will this work for my business?",
      a: "If you're a local business that relies on customers finding you, this is built for you. Roofers, realtors, contractors, dentists, cleaners, whoever your customers search for locally, we help them find you first."
    },
    {
      q: "How long until I see results?",
      a: "Most businesses see ranking improvements within 2 to 3 weeks. Competitive markets can take longer. Either way, the guarantee stands: top 3 in 90 days."
    },
    {
      q: "How much of my time does it require?",
      a: "Almost none. A 30-minute onboarding call so we can gather what we need, and then we handle the rest. You don't need to understand the technical side. You just keep running your business."
    },
    {
      q: "What if I want my money back?",
      a: "If you're not in the top 3 within 90 days, you contact us and you get a full refund. No hassle. We don't want to keep money we didn't earn. Simple as that."
    },
    {
      q: "How long until my website is completed?",
      a: "No more than 7 days. You'll get a preview to review, then a live site within a week. More complex projects can take 2 weeks or more, and we'll keep you updated the whole way."
    },
    {
      q: "What if I don't like the website design?",
      a: "Every design is custom made and built around your brand. You are the judge. Nothing goes live without your approval."
    },
    {
      q: "What are automations?",
      a: "Think of the repetitive admin work you or your team do by hand: replying to leads, sending follow-ups, updating your CRM, booking appointments. An automation is a system that does those tasks for you, automatically, around the clock. You set it up once and it just runs."
    },
    {
      q: "How do I know an automation fits my business?",
      a: "Automations, like our websites, are custom made. There are no templates. We build them around your business and your specific needs, so they fit the way you already work."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 max-w-4xl mx-auto">
      <div className="mb-16 text-center">
        <p className="font-mono text-sm tracking-widest uppercase text-brand-accent mb-4">Questions</p>
        <h2 className="font-serif text-4xl md:text-6xl">The honest answers.</h2>
      </div>

      <div className="divide-y divide-brand-border">
        {faqs.map((faq, idx) => (
          <div key={idx} className="py-6">
            <button 
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full flex items-center justify-between text-left group"
            >
              <h3 className="font-serif text-xl md:text-2xl group-hover:text-brand-accent transition-colors pr-8">
                {faq.q}
              </h3>
              <div className="shrink-0 text-brand-muted group-hover:text-brand-accent transition-colors">
                {openIdx === idx ? <Minus size={24} /> : <Plus size={24} />}
              </div>
            </button>
            
            <AnimatePresence>
              {openIdx === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="pt-6 pb-2 text-brand-muted leading-relaxed text-lg">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
