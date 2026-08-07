'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export function FAQES() {
  const faqs = [
    {
      q: "¿Funcionará esto para mi negocio?",
      a: "Si eres un negocio local que depende de que los clientes lo encuentren, esto está hecho para ti. Contratistas, techadores, agentes inmobiliarios, dentistas, clínicas... sea lo que sea que tus clientes busquen localmente, te ayudamos a que te encuentren primero."
    },
    {
      q: "¿Cuánto tiempo hasta ver resultados?",
      a: "La mayoría de los negocios ven mejoras de posicionamiento en 2 a 3 semanas. Mercados muy competitivos pueden tomar más. De cualquier forma, la garantía se mantiene: top 3 en 90 días."
    },
    {
      q: "¿Cuánto de mi tiempo requiere?",
      a: "Casi nada. Una llamada inicial de 30 minutos para recopilar lo que necesitamos, y luego nos encargamos del resto. No necesitas entender el lado técnico, solo seguir manejando tu negocio."
    },
    {
      q: "¿Qué pasa si quiero mi dinero de vuelta?",
      a: "Si no estás en el top 3 en 90 días, nos contactas y obtienes un reembolso completo. Sin complicaciones. No queremos quedarnos con dinero que no nos hemos ganado."
    },
    {
      q: "¿Cuánto tiempo toma tener mi sitio web terminado?",
      a: "No más de 7 días. Recibirás una vista previa para revisar, y el sitio en vivo dentro de la semana. Proyectos más complejos pueden tomar 2 semanas o más, y te mantendremos informado todo el tiempo."
    },
    {
      q: "¿Qué pasa si no me gusta el diseño de la web?",
      a: "Cada diseño se hace a medida basándonos en tu marca. Tú eres el juez. Nada sale a producción sin tu aprobación."
    },
    {
      q: "¿Qué son las automatizaciones?",
      a: "Piensa en el trabajo administrativo repetitivo que tú o tu equipo hacen a mano: responder a prospectos, mandar correos de seguimiento, actualizar el CRM, agendar citas. Una automatización es un sistema que hace esas tareas por ti, automáticamente, todo el día. Lo configuras una vez y simplemente funciona."
    },
    {
      q: "¿Cómo sé si una automatización aplica para mi negocio?",
      a: "Las automatizaciones, igual que nuestras webs, se hacen a medida. No hay plantillas. Las construimos alrededor de tu negocio y tus necesidades específicas, para que se adapten a la forma en que ya trabajas."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 max-w-4xl mx-auto">
      <div className="mb-16 text-center">
        <p className="font-mono text-sm tracking-widest uppercase text-brand-accent mb-4">Preguntas Frecuentes</p>
        <h2 className="font-serif text-4xl md:text-6xl">Las respuestas honestas.</h2>
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
