import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Home, Film, Users, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logoeditable.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const manejarCierre = () => setIsOpen(false);

  const esActivo = (ruta) => location.pathname === ruta;
  
  React.useEffect(() => {
  if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Limpieza al desmontar el componente
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-[#191919] backdrop-blur-md border-b border-[#E05C4F]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[96px] sm:min-h-[110px] py-2">
          
          {/* LOGO REDIRIGE A LA HOME */}
          <div className="flex-shrink-0 h-20 sm:h-34 w-28 sm:w-48 md:w-32 md:h-22 overflow-hidden group">
            <Link to="/" className="block w-full h-full">
              <img src={logo} alt="Roxsport Oficial" className="w-full h-full object-cover" />
            </Link>
          </div>

          {/* NAVEGACIÓN CON LINKS DE ROUTER */}
          <div className="hidden md:flex items-center space-x-8 md:space-x-6">
            <Link to="/" className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400 hover:text-[#E05C4F] transition-colors">
              Inicio
            </Link>
            
            <Link to="/galeria" className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400 hover:text-[#E05C4F] transition-colors">
              Galería
            </Link>

            <Link to="/nosotros" className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400 hover:text-[#E05C4F] transition-colors">
              Sobre Nosotros
            </Link>

            <Link to="/contacto" className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400 hover:text-[#E05C4F] transition-colors">
              Contacto
            </Link>
          </div>

          {/* Botón WhatsApp */}
          <div className="hidden md:block">
            <a href="https://wa.me/54XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="border border-[#E05C4F] text-stone-200 hover:bg-[#E05C4F] hover:text-stone-950 text-xs font-black uppercase tracking-widest px-5 py-3 rounded transition-all">
              Consultar
            </a>
          </div>

          {/* Menú móvil */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-400 hover:text-stone-100 bg-stone-900 border border-stone-800 transition-colors focus:outline-none"
            >
              <span className="sr-only">Abrir menú</span>
              {isOpen ? (
                <X className="block h-5 w-5 text-[#E05C4F]" />
              ) : (
                <Menu className="block h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL (Aparece solo si isOpen es true) */}
      {isOpen && (
        <div className="md:hidden bg-[#191919] border-b border-stone-900">
          <div className="px-3 pt-2 pb-6 space-y-2 text-left">
            
            <Link
              to="/"
              onClick={manejarCierre}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-widest border transition-all ${
                esActivo('/') 
                  ? 'bg-[#E05C4F]/10 border-[#E05C4F] text-[#E05C4F]' 
                  : 'bg-stone-900/40 border-transparent text-stone-400'
              }`}
            >
              <Home size={14} />
              Inicio
            </Link>

            <Link
              to="/galeria"
              onClick={manejarCierre}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-widest border transition-all ${
                esActivo('/galeria') 
                  ? 'bg-[#E05C4F]/10 border-[#E05C4F] text-[#E05C4F]' 
                  : 'bg-stone-900/40 border-transparent text-stone-400'
              }`}
            >
              <Film size={14} />
              Galería
            </Link>

            <Link
              to="/nosotros"
              onClick={manejarCierre}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-widest border transition-all ${
                esActivo('/nosotros') 
                  ? 'bg-[#E05C4F]/10 border-[#E05C4F] text-[#E05C4F]' 
                  : 'bg-stone-900/40 border-transparent text-stone-400'
              }`}
            >
              <Users size={14} />
              Sobre Nosotros
            </Link>

            <Link
              to="/contacto"
              onClick={manejarCierre}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-widest border transition-all ${
                esActivo('/contacto') 
                  ? 'bg-[#E05C4F]/10 border-[#E05C4F] text-[#E05C4F]' 
                  : 'bg-stone-900/40 border-transparent text-stone-400'
              }`}
            >
              <Phone size={14} />
              Contacto
            </Link>

            {/* BOTÓN WHATSAPP MÓVIL EN ANCHO COMPLETO */}
            <div className="pt-4 border-t border-stone-900 mt-4">
              <a
                href="https://wa.me/54XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#E05C4F] hover:bg-[#c94f43] text-stone-950 font-black text-xs uppercase tracking-widest py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <MessageCircle size={15} className="stroke-[2.5]" />
                Consultar por WhatsApp
              </a>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}