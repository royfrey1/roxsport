import React from 'react';
import { ShieldCheck, Video, Users, Building2 } from 'lucide-react';

export default function SobreNosotros() {
  return (
    <section id="nosotros" className="bg-stone-950 py-10 px-4 border-t border-stone-900">
      <div className="max-w-6xl mx-auto grid gap-15 lg:grid-cols-2 items-center text-left">
        
        {/* BLOQUE IZQUIERDO: FOTO DEL EQUIPO / GALPÓN */}
        <div className="relative aspect-square max-h-[480px] bg-stone-900 rounded-xl border border-stone-850 overflow-hidden group shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop" 
            alt="Adrián y equipo en el galpón de Once" 
            className="w-full h-full object-cover filter contrast-110 grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          {/* Identificador flotante */}
          <div className="absolute bottom-4 left-4 bg-stone-950/90 backdrop-blur-md border border-stone-800 p-4 rounded-lg max-w-xs">
            <p className="text-stone-100 font-black text-xs uppercase tracking-wider">Adrián y Familia</p>
            <p className="text-[#E05C4F] font-mono text-[9px] uppercase tracking-widest mt-1">Fundadores de Roxsport</p>
          </div>
        </div>

        {/* BLOQUE DERECHO: TEXTO CORPORATIVO (Procesado de los audios) */}
        <div className="space-y-6">
          <span className="text-[#E05C4F] font-mono text-xs font-black uppercase tracking-[0.2em] block">
            // DETRÁS DE LA MARCA
          </span>
          <h3 className="text-3xl sm:text-5xl font-black text-stone-100 uppercase tracking-tighter leading-none">
            MÁS DE 10 AÑOS <br />
            <span className="text-[#E05C4F] font-extrabold">DANDO LA CARA</span>
          </h3>
          <p className="text-stone-400 text-sm font-medium leading-relaxed">
            Sabemos que comprar fardos al por mayor a la distancia genera desconfianza. Por eso, en **Roxsport** elegimos no escondernos detrás de un catálogo automático. Nos encontrás de lunes a sábados en nuestro galpón de Once, armando y despachando cada lote nosotros mismos. 
          </p>
          <p className="text-stone-400 text-sm font-medium leading-relaxed">
            Nuestra prioridad es que tu local o showroom sea rentable. Seleccionamos la indumentaria de manera exhaustiva para asegurar que cada prenda valga lo que pagás, ofreciendo transparencia absoluta de punta a punta.
          </p>

          {/* CUADRÍCULA DE VALORES */}
          <div className="grid gap-4 sm:grid-cols-2 pt-4">
            <div className="bg-stone-900/30 p-4 border border-stone-900 rounded-lg">
              <ShieldCheck className="text-[#E05C4F] mb-2" size={20} />
              <h4 className="text-stone-200 text-xs font-black uppercase tracking-wider">Atención Directa</h4>
              <p className="text-stone-500 text-[11px] mt-1 leading-normal">Trato directo con los dueños del negocio, sin intermediarios.</p>
            </div>
            <div className="bg-stone-900/30 p-4 border border-stone-900 rounded-lg">
              <Video className="text-[#E05C4F] mb-2" size={20} />
              <h4 className="text-stone-200 text-xs font-black uppercase tracking-wider">Videollamada en Vivo</h4>
              <p className="text-stone-500 text-[11px] mt-1 leading-normal">Revisá tu lote por cámara directo en el depósito antes de transferir.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}