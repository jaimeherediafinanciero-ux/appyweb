import { Globe, Smartphone, Bot, Share2, Palette, TrendingUp, ShoppingCart, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: Globe,
    title: 'Desarrollo Web Profesional',
    description: 'Sitios web rápidos, seguros y 100% responsivos. Optimización SEO desde el primer día y enfoque total en conversión.',
  },
  {
    icon: Palette,
    title: 'Diseño Web Innovador',
    description: 'Experiencias visuales impactantes que captan atención en segundos y guían al usuario hacia la acción.',
  },
  {
    icon: Smartphone,
    title: 'Apps Móviles a Medida',
    description: 'Aplicaciones nativas o híbridas para Android e iOS. Rápidas, intuitivas y escalables.',
  },
  {
    icon: Bot,
    title: 'Inteligencia Artificial',
    description: 'Chatbots inteligentes 24/7, generación automática de contenido y asistentes que cierran ventas.',
  },
  {
    icon: Share2,
    title: 'Gestión de Redes Sociales',
    description: 'Estrategias de contenido que conectan de verdad. Aumentamos alcance orgánico y campañas de alto ROI.',
  },
  {
    icon: Palette,
    title: 'Branding e Identidad Visual',
    description: 'Construimos marcas que no pasan desapercibidas. Logo, manual de marca y aplicación consistente.',
  },
  {
    icon: TrendingUp,
    title: 'Marketing Digital y SEO',
    description: 'Posicionamiento avanzado en buscadores. Campañas Google Ads y Meta Ads con retorno medible.',
  },
  {
    icon: ShoppingCart,
    title: 'Tiendas Online',
    description: 'E-commerce seguro, rápido y optimizado para conversión. WooCommerce, Shopify o desarrollo a medida.',
  },
  {
    icon: Zap,
    title: 'Automatización y CRM',
    description: 'Flujos automáticos de ventas, CRM personalizado y bots que atienden por ti.',
  },
];

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 100);
            });
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
    <section id="servicios" ref={sectionRef} className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones digitales completas que trabajan 24/7 para atraer clientes, cerrar ventas y fortalecer tu marca
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group bg-white backdrop-blur-sm border border-gray-200 rounded-xl p-8 hover:border-blue-400 hover:shadow-xl transition-all duration-500 hover:transform hover:-translate-y-2 ${
                  visibleCards.includes(index) ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
