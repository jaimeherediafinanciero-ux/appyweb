import { Mail, MessageSquare, Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Contact() {
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
    <section id="contacto" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.08),transparent_50%)]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
              Comienza tu <span className="text-gradient">Transformación Digital</span>
            </h2>
            <p className={`text-xl text-gray-600 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              Contáctanos hoy y descubre cómo podemos impulsar tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="mailto:hello@appyweb.online"
              className={`group bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}
              style={{ animationDelay: '0.2s' }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Email
              </h3>
              <p className="text-gray-600">hello@appyweb.online</p>
            </a>

            <a
              href="https://wa.me/528136958429"
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}
              style={{ animationDelay: '0.3s' }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                WhatsApp
              </h3>
              <p className="text-gray-600">+52 813 695 8429</p>
            </a>
          </div>

          <div className={`mt-16 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-8 md:p-12 shadow-lg ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-3 mb-6">
              <Send className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Envíanos un mensaje</h3>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl"
              >
                Enviar Mensaje
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
