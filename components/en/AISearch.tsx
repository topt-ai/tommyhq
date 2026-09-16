import { RotatingQuery } from '@/components/RotatingQuery';

const labels = ['SEO', 'GEO', 'AEO'];

const QUERIES = [
  'best roofer in (your city)',
  'best dental clinic in (your city)',
  'top realtor near me',
  'best HVAC company in (your city)',
  'best plumber in (your city)',
  'best med spa in (your city)',
];

export function AISearch() {
  return (
    <section className="bg-brand-bg py-[120px] border-t border-brand-border">
      <div className="max-w-[820px] mx-auto px-6 md:px-12 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-brand-accent mb-6">
          Beyond Traditional SEO
        </p>
        <h2 className="font-display text-brand-primary text-[36px] md:text-[56px] leading-[1.1] mb-8">
          You know ChatGPT.<br className="hidden md:block" /> But does it know you?
        </h2>
        <p className="font-sans font-light text-[16px] md:text-[18px] text-brand-muted leading-relaxed max-w-[620px] mx-auto mb-10">
          Your customers are asking ChatGPT and AI search engines to find them a business, not just Googling. We build your site so both find you: the search engines you know, and the AI tools quickly becoming the new front door.
        </p>

        <div className="max-w-[520px] mx-auto mb-10 rounded-[14px] border border-brand-border bg-brand-code px-5 py-4 text-left">
          <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-brand-muted mb-2">
            Try it right now
          </div>
          <RotatingQuery phrases={QUERIES} />
          <div className="font-sans font-light text-[13px] text-brand-muted mt-3 leading-relaxed">
            Ask any AI that. If your business isn&apos;t in the answer, that&apos;s exactly what we fix.
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 flex-wrap">
          {labels.map((label) => (
            <span
              key={label}
              className="font-mono text-[10px] uppercase tracking-[0.14em] px-4 py-2 rounded-full border border-brand-border text-brand-muted"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
