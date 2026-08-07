'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';

const FAQS = [
  {
    q: '¿Esto va a funcionar para mi negocio?',
    a: 'Si eres un negocio local que depende de que los clientes te encuentren, esto está hecho para ti. Techadores, agentes inmobiliarios, contratistas, dentistas, servicios de limpieza, quien sea que tus clientes busquen localmente, te ayudamos a que te encuentren primero.',
  },
  {
    q: '¿Cuánto tardo en ver resultados?',
    a: 'La mayoría de negocios ven mejoras en su ranking en 2 a 3 semanas. Mercados competitivos pueden tardar más. De cualquier forma, la garantía se mantiene: top 3 en 90 días.',
  },
  {
    q: '¿Cuánto de mi tiempo requiere esto?',
    a: 'Casi nada. Una llamada de 30 minutos para reunir lo que necesitamos, y nosotros nos encargamos del resto. No necesitas entender la parte técnica. Solo sigues manejando tu negocio.',
  },
  {
    q: '¿Qué pasa si quiero que me devuelvan mi dinero?',
    a: 'Si no estás en el top 3 en 90 días, nos contactas y recibes un reembolso completo. Sin drama. No queremos quedarnos con dinero que no ganamos. Así de simple.',
  },
  {
    q: '¿Cuánto tarda en estar listo mi sitio web?',
    a: 'No más de 7 días. Recibirás una vista previa para revisar, y luego un sitio en vivo dentro de una semana. Proyectos más complejos pueden tomar 2 semanas o más, y te mantendremos al tanto todo el camino.',
  },
  {
    q: '¿Qué pasa si no me gusta el diseño del sitio?',
    a: 'Cada diseño es hecho a la medida y construido alrededor de tu marca. Tú eres el juez. Nada se publica sin tu aprobación.',
  },
  {
    q: '¿Qué son las automatizaciones?',
    a: 'Piensa en el trabajo administrativo repetitivo que tú o tu equipo hacen a mano: responder leads, enviar seguimientos, actualizar tu CRM, agendar citas. Una automatización es un sistema que hace esas tareas por ti, automáticamente, las 24 horas. La configuras una vez y simplemente funciona.',
  },
  {
    q: '¿Cómo sé si una automatización le sirve a mi negocio?',
    a: 'Las automatizaciones, como nuestros sitios, se hacen a la medida. No hay plantillas. Las construimos alrededor de tu negocio y tus necesidades específicas, para que encajen con la forma en que ya trabajas.',
  },
];

export function FAQES() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="preguntas" className="bg-brand-bg py-[120px] border-t border-brand-border">
      <div className="w-full max-w-[820px] mx-auto px-6 md:px-12">

        <div className="mb-12 GSAP-reveal" data-reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-brand-accent mb-4">
            Preguntas
          </div>
          <h2 className="font-display font-normal text-brand-primary text-[36px] md:text-[52px] leading-tight">
            Las respuestas honestas.
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
