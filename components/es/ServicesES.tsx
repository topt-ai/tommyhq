'use client';

import { motion } from 'motion/react';

export function ServicesES() {
  const services = [
    {
      id: "01",
      title: "SEO Local",
      desc: "Posicionamos tu negocio donde tus clientes buscan. Top 3. Garantizado.",
      tags: ["Perfil de Negocio Google", "Autoridad Local", "Mejoras Técnicas"],
      stats: ["Top 3 en mapas", "3x más llamadas locales", "Visibilidad 24/7"]
    },
    {
      id: "02",
      title: "Páginas Web",
      desc: "Sitios hechos a medida con apariencia profesional, carga rápida y posicionamiento en Google. Sin plantillas. Desde landing pages hasta aplicaciones web completas con bases de datos y paneles de control.",
      tags: ["Rápidas", "Confiables", "Diseño a tu Marca"],
      stats: ["98/100 Velocidad", "<1.2s Carga", "100% Código propio"]
    },
    {
      id: "03",
      title: "Sistemas",
      desc: "Automatizaciones, agentes de IA y flujos de trabajo a medida que reemplazan el trabajo manual de tu equipo. Se construye una vez y funciona siempre.",
      tags: ["CRM", "Calificación de Leads", "Hechos a Medida"],
      stats: ["> Lead calificado a las 2:14 AM", "> CRM actualizado sin acción manual", "> Cita agendada mientras dormías"]
    }
  ];

  return (
    <section id="servicios" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-20">
        <p className="font-mono text-sm tracking-widest uppercase text-brand-accent mb-4">Lo que construimos</p>
        <h2 className="font-serif text-4xl md:text-6xl">Tres servicios. Sin relleno.</h2>
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
