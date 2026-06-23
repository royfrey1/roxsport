import React from 'react';
import { MessageSquare, Box, Truck, TrendingUp } from 'lucide-react';

export default function ComoFunciona() {
  const pasos = [
    {
      id: "01",
      titulo: "Consultá",
      descripcion: "Escribinos por WhatsApp. Te asesoramos de forma personalizada sobre el fardo ideal para el perfil de tu negocio o showroom.",
      icono: MessageSquare
    },
    {
      id: "02",
      titulo: "Elegí tu Fardo",
      descripcion: "Seleccioná entre nuestras categorías disponibles: premium, verano, invierno, deportivo o ropa urbana por unidad. Todos los fardos filtrados.",
      icono: Box
    },
    {
      id: "03",
      titulo: "Recibí",
      descripcion: "Retirá directo por nuestro galpón de distribución o coordinamos el despacho rápido por el transporte que elijas a cualquier punto del país.",
      icono: Truck
    },
    {
      id: "04",
      titulo: "Vendé",
      descripcion: "Empezá a comercializar en tu local, feria o redes. Con los costos competitivos de Roxsport, tu margen de ganancia está respaldado.",
      icono: TrendingUp
    }
  ];

  return (
    <section id="nosotros" className="scroll-mt-24 bg-stone-950 py-24 px-4 relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E05C4F] to-transparent"></div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        
        <span className="text-[#E05C4F] font-mono text-xs font-black uppercase tracking-widest block mb-2">
          PROCESO SIMPLE
        </span>
        <h3 className="text-4xl sm:text-5xl font-black text-stone-100 uppercase tracking-tighter mb-20">
          CÓMO <span className="text-[#E05C4F] font-extrabold">TRABAJAMOS</span>
        </h3>

        {/* CONTENEDOR EN RECT CON GRID */}
        <div className="grid gap-12 md:gap-0 md:grid-cols-4 relative">
          {pasos.map((paso, index) => {
            const IconoComponente = paso.icono;
            return (
              <div key={paso.id} className="flex flex-col items-center group relative px-4">
                
               
                {/* Sale exactamente desde el centro de la caja actual (left-1/2) y llega al centro de la siguiente */}
                {index < pasos.length - 1 && (
                  <div className="absolute top-10 left-1/2 w-full h-[1px] bg-stone-800 pointer-events-none hidden md:block z-0 transition-all duration-300 group-hover:bg-[#E05C4F] group-hover:shadow-[0_0_12px_#E05C4F] group-hover:h-[2px]"></div>
                )}
                
                {/* CAJA DEL ÍCONO */}
                <div className="relative mb-6 z-10">
                  {/* Número de paso */}
                  <span className="absolute -top-1.5 -right-2 bg-stone-900 border border-stone-800 text-[#E05C4F] font-mono text-[9px] font-bold px-1.5 py-0.5 rounded tracking-tighter shadow-md">
                    {paso.id}
                  </span>
                  
                  {/* Recuadro contenedor */}
                  <div className="w-20 h-20 bg-stone-950 border border-stone-800/80 rounded flex items-center justify-center text-[#E05C4F] group-hover:border-[#E05C4F]/50 group-hover:bg-stone-900 transition-all duration-300 shadow-inner">
                    <IconoComponente size={26} className="stroke-[1.8]" />
                  </div>
                </div>

                {/* TÍTULO DEL PASO */}
                <h4 className="text-lg font-black text-stone-100 uppercase tracking-tight mb-3 group-hover:text-[#E05C4F] transition-colors z-10">
                  {paso.titulo}
                </h4>

                {/* DESCRIPCIÓN */}
                <p className="text-stone-400 text-xs font-medium leading-relaxed tracking-wide max-w-[220px] mx-auto z-10">
                  {paso.descripcion}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}