const benefits = [
  {
    title: 'Always On.',
    description: 'Your site ranks and your systems run around the clock. Nothing to babysit.',
  },
  {
    title: 'Built Around You.',
    description: 'No templates, no page builders. Every site and system is custom.',
  },
  {
    title: 'Direct Access.',
    description: 'You talk to the person who builds it, not an account manager.',
  },
  {
    title: 'No Lock-In.',
    description: "Month to month, always. If it's not working, you're not stuck.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="bg-brand-bg py-[120px] border-t border-brand-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="mb-16 GSAP-reveal" data-reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-brand-accent">
            Why Us
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="flex flex-col justify-between GSAP-reveal" data-reveal>
            <h2 className="font-display italic text-brand-primary text-[48px] md:text-[68px] leading-[1.08] mb-8">
              &quot;We win only<br />if you win.&quot;
            </h2>
            <p className="font-sans font-light text-[18px] text-brand-muted leading-relaxed max-w-md">
              That means no long contracts, no runaround, and no vanity reports full of numbers that don&apos;t pay your bills.
            </p>
          </div>

          <div className="flex flex-col">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                data-reveal
                className={`GSAP-reveal py-8 ${index !== 0 ? 'border-t border-brand-border' : 'pt-0 lg:pt-8'} ${
                  index === benefits.length - 1 ? 'border-b border-brand-border pb-8' : ''
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
                  <h3 className="font-display text-brand-primary text-[32px] md:text-[40px] leading-tight w-full md:w-1/2">
                    {benefit.title}
                  </h3>
                  <p className="font-sans font-light text-brand-muted text-[16px] md:text-[18px] leading-relaxed w-full md:w-1/2">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
