'use client';

import { motion } from 'motion/react';

export function Services() {
  const services = [
    {
      id: "01",
      title: "Local SEO",
      desc: "We get your business ranking where your customers are searching. Top 3. Guaranteed.",
      tags: ["GBP", "Local Authority", "Backend Fixes"],
      stats: ["#1-3 Map rankings", "3x More local calls", "24/7 Visibility"]
    },
    {
      id: "02",
      title: "Websites",
      desc: "Custom-built sites that look serious, load fast, and show up on Google. No templates. From landing pages to full-stack apps with databases, logins, and dashboards.",
      tags: ["Fast", "Reliable", "Built to Your Brand"],
      stats: ["98 PageSpeed score", "<1.2s Load time", "100% Custom code"]
    },
    {
      id: "03",
      title: "Systems",
      desc: "Automations, AI agents, and custom workflows that replace the work your team does manually. Built once, running always.",
      tags: ["CRM", "Lead Qualification", "Built Around You"],
      stats: ["> Lead qualified at 2:14 AM", "> CRM updated, no action needed", "> Appointment booked while you slept"]
    }
  ];

  return (
    <section id="services" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-20">
        <p className="font-mono text-sm tracking-widest uppercase text-brand-accent mb-4">What we build</p>
        <h2 className="font-serif text-4xl md:text-6xl">Three services. No filler.</h2>
      </div>

      <div className="space-y-12">
        {services.map((service, idx) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="grid lg:grid-cols-12 gap-8 lg:gap-12 p-8 md:p-12 border border-brand-border rounded-3xl bg-[#0d0d0d] hover:border-brand-accent/30 transition-colors"
          >
            <div className="lg:col-span-3">
              <span className="font-mono text-brand-muted text-lg">{service.id}</span>
              <h3 className="font-serif text-3xl mt-4 mb-6">{service.title}</h3>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono uppercase tracking-wider px-3 py-1 border border-brand-border rounded-full text-brand-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-5 flex items-center">
              <p className="text-lg md:text-xl text-brand-primary/90 leading-relaxed">
                {service.desc}
              </p>
            </div>
            
            <div className="lg:col-span-4 flex flex-col justify-center gap-4 bg-brand-bg rounded-2xl p-6 border border-brand-border">
              {service.stats.map(stat => (
                <div key={stat} className="flex items-center gap-3 font-mono text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                  <span className="text-brand-muted">{stat}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
