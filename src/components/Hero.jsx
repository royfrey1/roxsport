import React from 'react';
import { ArrowDown, Layers } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative bg-stone-950 overflow-hidden border-b border-stone-900">
      
      {/* 1. CONTENEDOR PRINCIPAL DEL HERO */}
      <div className="relative min-h-[80vh] flex items-center px-4 sm:px-8 lg:px-16 py-15 max-w-7xl mx-auto z-20">
        
        {/* IMAGEN DE FONDO INDUSTRIAL CON OVERLAY (Solo que ahora responde a la alineación) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop" 
            alt="Depósito textil industrial" 
            className="w-full h-full object-cover object-center opacity-20 filter grayscale"
          />
          {/* Degradado para oscurecer más el lado derecho en desktop y tapar todo en mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/50 via-stone-950/80 to-stone-950 md:bg-gradient-to-r md:from-stone-950 md:via-stone-950/70 to-transparent"></div>
        </div>

        {/* LÍNEAS DE CONTENCIÓN / FLEJES DE LOS FARDOS */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-5">
          <div className="absolute top-0 left-1/3 w-[2px] h-full bg-orange-500 rotate-12 transform origin-top"></div>
          <div className="absolute top-0 right-1/4 w-[2px] h-full bg-orange-500 -rotate-12 transform origin-top"></div>
          <div className="absolute top-1/3 left-0 w-full h-[1px] bg-stone-500"></div>
        </div>

        {/* CONTENIDO TEXTUAL: Centrado en mobile, Izquierda en Desktop */}
        <div className="relative z-20 max-w-2xl text-center md:text-left w-full">
          
          {/* ETIQUETA DE DESPACHO */}
          <div className="inline-flex items-center gap-2 bg-stone-900 border border-stone-800 text-[#E05C4F] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded mb-6 shadow-md">
            <Layers size={12} className="animate-pulse" />
            DISTRIBUIDORA TEXTIL MAYORISTA
          </div>

          {/* TÍTULO REACOMODADO */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-stone-100 uppercase leading-none ">
            EL ORIGEN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E05C4F] via-[#E05C4F] to-[#E05C4F]/50 font-extrabold">
              DEL STOCK
            </span>
          </h2>

          {/* SUBTÍTULO */}
          <p className="mt-6 text-stone-400 text-sm sm:text-base font-medium tracking-wide leading-relaxed max-w-xl mx-auto md:mx-0">
            Fardos de ropa americana y europea de primera selección. Más de 10 años abasteciendo emprendedores y comercios en toda Argentina.
          </p>

          {/* ACCIONES */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
            <a 
              href="#catalogo" 
              className="w-full sm:w-auto bg-[#E05C4F]/80 hover:bg-[#E05C4F] text-stone-950 font-black text-xs uppercase tracking-widest px-8 py-4 rounded border-b-4 border-[#E32714] active:border-b-0 active:mt-1 transition-all text-center"
            >
              Ver Fardos Disponibles
            </a>
            <a 
              href="#nosotros" 
              className="w-full sm:w-auto bg-stone-900/80 hover:bg-stone-800 text-stone-300 font-bold text-xs uppercase tracking-widest px-8 py-4 rounded border border-stone-800 hover:border-stone-700 transition-all text-center flex items-center justify-center gap-2"
            >
              Cómo trabajamos
              <ArrowDown size={14} className="text-[#E05C4F]" />
            </a>
          </div>

        </div>

        {/* DETALLE ESTÉTICO EN LAS ESQUINAS */}
        <div className="absolute bottom-6 left-4 text-stone-800 font-mono text-[9px] hidden lg:block tracking-widest">
          SYS_REF: RX-2026 // BATCH_LOT: #089
        </div>
        <div className="absolute bottom-6 right-4 text-stone-700 font-mono text-[9px] hidden lg:block tracking-widest">
          STCK_MANAGEMENT // ACTIVE
        </div>

      </div>

      {/* 2. MARQUESINA ADAPTADA AL FINAL DEL HERO (Idéntica a la del Footer) */}
      <div className="w-full bg-[#E05C4F] py-2.5 overflow-hidden whitespace-nowrap border-t border-[#E32714] relative z-30 flex select-none">
        <div className="animate-marquee flex gap-16 text-stone-950 font-mono text-xs font-black uppercase tracking-wider">
          <span>• NUEVO INGRESO: FARDO PREMIUM VINTAGE 45KG</span>
          <span>• ENVÍOS A TODO EL PAÍS – CABA • GBA • INTERIOR</span>
          <span>• FARDO INVIERNO MIX – ÚLTIMAS 4 UNIDADES</span>
          <span>• CONTROL DE STOCK ACTUALIZADO HOY</span>
        </div>
        <div className="animate-marquee flex gap-16 text-stone-950 font-mono text-xs font-black uppercase tracking-wider" aria-hidden="true">
          <span>• NUEVO INGRESO: FARDO PREMIUM VINTAGE 45KG</span>
          <span>• ENVÍOS A TODO EL PAÍS – CABA • GBA • INTERIOR</span>
          <span>• FARDO INVIERNO MIX – ÚLTIMAS 4 UNIDADES</span>
          <span>• CONTROL DE STOCK ACTUALIZADO HOY</span>
        </div>
      </div>

    </section>
  );
}