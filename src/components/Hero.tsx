import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import Carousel from './Carousel';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.08),transparent_50%)]" />

      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-cyan-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className={`mb-6 inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full shadow-sm ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-700 font-medium">Soluciones Digitales Innovadoras</span>
          </div>

          <p className={`text-2xl md:text-3xl text-gray-700 mb-4 font-light ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            Apps y Web que trabajan por ti
          </p>

          <p className={`text-xl md:text-2xl text-gradient mb-8 font-medium ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Construimos tu Mundo Digital
          </p>

          <div className={`mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <Carousel />
          </div>

          <p className={`text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            Impulsa tu negocio al siguiente nivel con soluciones digitales que convierten y crecen contigo
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            <a
              href="#contacto"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl animate-pulse-glow"
            >
              Comienza Ahora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicios"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 border-2 border-blue-600 hover:border-cyan-500 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Ver Servicios
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-blue-600 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
