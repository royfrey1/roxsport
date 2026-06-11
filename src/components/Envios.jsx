import React from 'react';
import { MapPin, Truck, Clock, Map } from 'lucide-react';

export default function ZonasEnvios() {
  const zonas = [
    {
      id: "caba",
      titulo: "CABA",
      envio: "Entrega en el día disponible",
      tiempo: "24-48 hs",
      precio: "Desde $5.000"
    },
    {
      id: "gba",
      titulo: "GBA",
      envio: "Zona Norte, Sur, Oeste",
      tiempo: "48-72 hs",
      precio: "Desde $8.000"
    },
    {
      id: "interior",
      titulo: "INTERIOR",
      envio: "Todo el país vía transporte",
      tiempo: "3-7 días hábiles",
      precio: "Según destino"
    }
  ];

  return (
    <section id="contacto" className="bg-stone-900 py-24 px-4 relative overflow-hidden border-t border-stone-800">
      
      {/* SECCIÓN INTERNA */}
      <div className="max-w-6xl mx-auto relative z-10 text-center">
        
        {/* ENCABEZADO IDÉNTICO A LA CAPTURA */}
        <span className="text-[#E05C4F] font-mono text-xs font-black uppercase tracking-widest block mb-2">
          LOGÍSTICA
        </span>
        <h3 className="text-4xl sm:text-5xl font-black text-stone-100 uppercase tracking-tighter mb-16">
          ZONAS DE <span className="text-[#E05C4F] font-extrabold">ENVÍO</span>
        </h3>

        {/* GRILLA DE TARJETAS DE ENVÍO */}
        <div className="grid gap-6 md:grid-cols-3 text-left max-w-5xl mx-auto mb-14">
          {zonas.map((zona) => (
            <div 
              key={zona.id} 
              className="bg-stone-950/40 border border-stone-800/80 rounded px-6 py-8 flex flex-col justify-between hover:border-stone-700/60 transition-all duration-300 shadow-md group"
            >
              <div>
                {/* TÍTULO DE LA REGIÓN CON ICONO LOCALIZADOR */}
                <div className="flex items-center gap-2 mb-6">
                  <MapPin size={18} className="text-[#E05C4F] shrink-0 stroke-[2.5]" />
                  <h4 className="text-xl font-black text-stone-100 uppercase tracking-tight">
                    {zona.titulo}
                  </h4>
                </div>

                {/* DETALLES INTERNOS */}
                <div className="space-y-4 border-b border-stone-800/60 pb-6 mb-6">
                  <div className="flex items-center gap-3 text-stone-400 text-xs font-medium tracking-wide">
                    <Truck size={16} className="text-[#E05C4F] group-hover:text-[#E05C4F] transition-colors" />
                    <span>{zona.envio}</span>
                  </div>
                  <div className="flex items-center gap-3 text-stone-400 text-xs font-medium tracking-wide">
                    <Clock size={16} className="text-[#E05C4F] group-hover:text-[#E05C4F] transition-colors" />
                    <span>{zona.tiempo}</span>
                  </div>
                </div>
              </div>

              {/* DESTACADO DE COSTO ABAJO */}
              <div className="text-lg font-black text-[#E05C4F] tracking-wide uppercase font-mono mt-2">
                {zona.precio}
              </div>
            </div>
          ))}
        </div>

        {/* DETALLE INFERIOR DE RETIRO EN FÁBRICA / LOCAL */}
        <div className="border-t border-stone-800/50 pt-8 max-w-3xl mx-auto">
          <p className="text-stone-400 text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 flex-wrap">
            <Map size={14} className="text-[#E05C4F]" />
            También disponible retiro en local – 
            <span className="text-stone-300 font-black decoration-[#E05C4F] underline">
              Av. Pueyrredón 300, Once, CABA
            </span>
          </p>
        </div>

      </div>

    </section>
  );
}