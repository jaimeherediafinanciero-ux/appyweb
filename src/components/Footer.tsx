import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img
                src="/logoappywebnuevo_1 copy copy.jpeg"
                alt="AppyWeb.online"
                className="h-28 w-auto object-contain"
              />
              <h3 className="text-3xl font-bold text-white">
                AppyWeb.online
              </h3>
            </div>
            <p className="text-gray-300 mb-1">Apps y Web que trabajan por ti</p>
            <p className="text-cyan-400 font-medium">Construimos tu Mundo Digital</p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8 text-gray-300">
            <a href="#servicios" className="hover:text-cyan-400 transition-colors">
              Servicios
            </a>
            <span className="hidden md:inline text-gray-600">•</span>
            <a href="mailto:hello@appyweb.online" className="hover:text-cyan-400 transition-colors">
              hello@appyweb.online
            </a>
            <span className="hidden md:inline text-gray-600">•</span>
            <a href="https://wa.me/528136958429" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              WhatsApp
            </a>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
            <p className="flex items-center justify-center gap-2">
              Hecho con <Heart className="w-4 h-4 text-cyan-400 fill-current" /> por AppyWeb.online © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
