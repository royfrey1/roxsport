import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BotonVolverArriba() {
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    const manejarScroll = () => {
      // Aparece mágicamente al bajar más de 600px (pasando el Hero)
      if (window.scrollY > 600) {
        setMostrar(true);
      } else {
        setMostrar(false);
      }
    };

    window.addEventListener('scroll', manejarScroll);
    return () => window.removeEventListener('scroll', manejarScroll);
  }, []);

  const irArriba = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={irArriba}
      className={`fixed bottom-6 right-6 bg-stone-900/90 hover:bg-[#E05C4F] text-stone-400 hover:text-stone-950 p-4 rounded-full border border-stone-800 hover:border-[#E05C4F] transition-all duration-300 shadow-2xl flex items-center justify-center backdrop-blur-sm z-50 hover:scale-110 active:scale-95 group ${
        mostrar 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      title="Volver al inicio"
    >
      <ArrowUp size={20} className="stroke-[2.5]" />
      
      {/* Tooltip técnico flotante */}
      <span className="absolute right-14 bg-stone-900 border border-stone-800 text-stone-200 text-[9px] font-mono font-black uppercase tracking-widest px-2.5 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl">
        // SUBIR
      </span>
    </button>
  );
}