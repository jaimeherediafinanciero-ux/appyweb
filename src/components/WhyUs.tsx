import { CheckCircle2, Sparkles, Target, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const reasons = [
  {
    icon: Target,
    title: 'Enfoque en Resultados',
    description: 'No entregamos solo un sitio web o una app: entregamos un sistema digital que trabaja por ti.',
  },
  {
    icon: Zap,
    title: 'Tecnología de Vanguardia',
    description: 'Usamos las herramientas más modernas y eficientes para garantizar velocidad y escalabilidad.',
  },
  {
    icon: Sparkles,
    title: 'Diseño que Convierte',
    description: 'Cada elemento tiene un propósito: captar atención y guiar al usuario hacia la acción.',
  },
  {
    icon: CheckCircle2,
    title: 'Soporte Continuo',
    description: 'No te dejamos solo. Mantenimiento, actualizaciones y mejoras para que sigas creciendo.',
  },
];

export default function WhyUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-blue-50 via-cyan-50/50 to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
              ¿Por qué elegir <span className="text-gradient">AppyWeb.online</span>?
            </h2>
            <p className={`text-xl text-gray-600 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              Tu éxito digital empieza aquí
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className={`flex gap-6 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={`bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 md:p-12 text-center shadow-2xl ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Listo para transformar tu presencia digital
            </h3>
            <p className="text-lg text-blue-50 mb-8">
              Descubre cómo podemos construir juntos tu mundo digital
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Hablemos de tu proyecto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
