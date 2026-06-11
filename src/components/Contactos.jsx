import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function Contacto() {
  // 🟢 URL DE GOOGLE MAPS CORREGIDA CON LA DIRECCIÓN REAL EN MORENO CENTRO
  const mapaUrl = "https://maps.google.com/maps?q=Avenida%20del%20Libertador%20329,%20Moreno%20Centro,%20Buenos%20Aires&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="contacto" className="bg-stone-900 py-14 px-4 border-t border-stone-800">
      <div className="max-w-6xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="text-[#E05C4F] font-mono text-xs font-black uppercase tracking-[0.2em] block mb-2">
            // CANAL DIRECTO
          </span>
          <h3 className="text-3xl sm:text-5xl font-black text-stone-100 uppercase tracking-tighter">
            ¿Tenés dudas? <span className="text-[#E05C4F] font-extrabold">Hablemos</span>
          </h3>
          <p className="text-stone-400 text-xs sm:text-sm max-w-md mx-auto mt-3">
            Atendemos consultas mayoristas de locales, revendedores y showrooms de todo el país.
          </p>
        </div>

        {/* GRILLA PRINCIPAL */}
        <div className="grid gap-8 lg:grid-cols-5 text-left items-stretch">
          
          {/* COLUMNA DE DATOS DE CONTACTO (Ocupa 2 de 5 columnas) */}
          <div className="lg:col-span-2 flex flex-col justify-between gap-4">
            <div className="bg-stone-950 p-6 rounded-xl border border-stone-850 space-y-6 flex-grow">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-[#E05C4F] shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-stone-400 font-mono text-[10px] uppercase tracking-wider">Local Oficial</h4>
                  <p className="text-stone-200 text-sm font-bold mt-0.5">Av. del Libertador 329, Moreno Centro, Buenos Aires</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-[#E05C4F] shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="text-stone-400 font-mono text-[10px] uppercase tracking-wider">Horarios de Atención</h4>
                  <p className="text-stone-200 text-sm font-bold mt-0.5">Lunes a Sábado: 10:00 a 18:00</p>
                  <p className="text-stone-400 text-xs mt-0.5">Domingos: Cerrado</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-[#E05C4F] shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-stone-400 font-mono text-[10px] uppercase tracking-wider">Teléfono de Contacto</h4>
                  <p className="text-stone-200 text-sm font-bold mt-0.5">+54 11 6142 8223</p>
                </div>
              </div>

            </div>

            {/* BOTÓN WHATSAPP GRANDE */}
            <a 
              href="https://wa.me/54XXXXXXXXXX?text=Hola%20Adrian,%20quiero%20hacerles%20una%20consulta%20por%20un%20fardo."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#E05C4F] hover:bg-[#c94f43] text-stone-950 font-black text-xs uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg active:scale-99"
            >
              <MessageCircle size={16} className="stroke-[2.5]" />
              Contactar con Roxsport por WhatsApp
            </a>
          </div>

          {/* MAPA REAL DE GOOGLE MAPS (Ocupa 3 de 5 columnas) */}
          <div className="lg:col-span-3 min-h-[350px] w-full bg-stone-950 border border-stone-850 rounded-xl overflow-hidden relative group p-1 flex">
            
            {/* Tag estético flotando arriba a la izquierda */}
            <div className="absolute top-4 left-4 z-10 bg-stone-950/90 backdrop-blur-sm border border-stone-800 px-3 py-1.5 rounded font-mono text-[9px] uppercase tracking-widest text-stone-400 pointer-events-none">
              MAP_FEED_MORENO
            </div>

            {/* IFRAME AJUSTADO A MORENO */}
            <iframe
              src={mapaUrl}
              className="w-full h-full min-h-[350px] rounded-lg filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-95 transition-all duration-500 border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación real Roxsport Moreno"
            ></iframe>
            
          </div>

        </div>

      </div>
    </section>
  );
}