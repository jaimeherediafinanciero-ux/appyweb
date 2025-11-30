import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  { src: '/diseño-web copy.jpg', alt: 'Diseño Web Innovador' },
  { src: '/desarrollo-web copy.jpg', alt: 'Desarrollo Web Profesional' },
  { src: '/tiendas-online copy.jpg', alt: 'Tiendas Online' },
  { src: '/marketing-seo copy.jpg', alt: 'Marketing Digital y SEO' },
  { src: '/branding copy.jpg', alt: 'Branding e Identidad Visual' },
  { src: '/redes-sociales copy.jpg', alt: 'Gestión de Redes Sociales' },
  { src: '/inteligencia-artificial copy.jpg', alt: 'Inteligencia Artificial' },
  { src: '/apps-moviles copy.jpg', alt: 'Apps Móviles a Medida' },
  { src: '/automatizacion-crm copy.jpg', alt: 'Automatización y CRM' },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveSlide = (step: number) => {
    setCurrentIndex((prev) => (prev + step + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(1);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl">
      <div className="relative w-full h-[400px] overflow-hidden">
        <div
          className="flex transition-transform duration-600 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-contain flex-shrink-0 bg-gray-100"
            />
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4">
        <button
          onClick={() => moveSlide(-1)}
          className="bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => moveSlide(1)}
          className="bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Ir a la diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
