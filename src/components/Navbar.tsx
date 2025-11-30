import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-32">
          <a href="#" className="flex items-center group">
            <img
              src="https://i.postimg.cc/6p0S7zGw/appyweb.png"
              alt="AppyWeb.online"
              className="h-24 w-auto object-contain"
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Hablemos
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-800 p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 text-center"
            >
              Hablemos
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
