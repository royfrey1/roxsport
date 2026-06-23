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
        <div className="grid gap-8 lg:grid-cols-5 text-left items-stretch border-b border-[#E05C4F] pb-8 mb-16">
          
          {/* COLUMNA DE DATOS DE CONTACTO (Ocupa 2 de 5 columnas) */}
          <div className="lg:col-span-2 flex flex-col justify-between gap-4">
            <div className="bg-stone-950 p-6 rounded-xl border border-stone-850 space-y-6 flex-grow">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-[#E05C4F] shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-stone-400 font-mono text-[10px] uppercase tracking-wider">Local Oficial</h4>
                  <p className="text-stone-200 text-sm font-bold mt-0.5">Ubicado en Avenida del Libertador 325, Moreno Centro, Buenos Aires</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-[#E05C4F] shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="text-stone-400 font-mono text-[10px] uppercase tracking-wider">Horarios de Atención</h4>
                  <p className="text-stone-200 text-sm font-bold mt-0.5">Lunes a Sábado: 10:00 a 18:00 DE CORRIDO</p>
                  <p className="text-stone-400 text-xs mt-0.5">Domingos: Cerrado</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-[#E05C4F] shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-stone-400 font-mono text-[10px] uppercase tracking-wider">Teléfonos de Contacto</h4>
                  <p className="text-stone-200 text-sm font-bold mt-0.5">+54 11-2296-6242<br/>+54 11-6142-8223<br/>+54 11-2168-6395<br/> </p>
                </div>
              </div>

            </div>

            {/* BOTÓN WHATSAPP GRANDE */}
            <a 
              href="https://wa.me/541122966242?text=Hola%20Adrian,%20quiero%20hacerles%20una%20consulta%20por%20un%20fardo."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#E05C4F] hover:bg-[#c94f43] text-stone-950 font-black text-xs uppercase tracking-widest py-4 rounded-xl flex items-center justify-center md:gap-1 lg:gap-2 transition-all shadow-lg active:scale-99"
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

        {/* BLOQUE DE CÓDIGOS QR EN LA SECCIÓN DE CONTACTO WITH BOTONES */}
        <div className="bg-stone-900/40 p-6 border border-stone-900 rounded-xl space-y-6 mt-8">
            <div>
              <span className="text-[#E05C4F] font-mono text-[15px] font-black uppercase tracking-widest block">// ESCANEÁ O HACÉ CLIC</span>
              <h4 className="text-2xl font-black text-stone-100 uppercase tracking-tighter mt-1">NUESTRAS COMUNIDADES</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* QR INSTAGRAM */}
              <div className="bg-stone-950 p-4 border border-stone-850 rounded-lg text-center flex flex-col items-center justify-between group">
                <div className="w-full flex flex-col items-center">
                  <div className="w-full max-w-[180px] aspect-square bg-stone-900 rounded border border-stone-800 overflow-hidden flex items-center justify-center p-2 mb-3">
                    <img src="/QR/INSTA.jpg" alt="QR Instagram" className="w-full h-full object-contain filter invert opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-stone-300 font-mono text-xs font-black uppercase tracking-wider mb-4">INSTAGRAM</span>
                </div>
                {/* Botón de enlace directo */}
                <a 
                  href="https://www.instagram.com/roxsport.rox/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-2 px-3 text-[11px] font-mono font-black uppercase tracking-wider text-stone-200 border border-[#E05C4F]/40 bg-[#E05C4F]/10 hover:bg-[#E05C4F] hover:text-stone-950 hover:border-[#E05C4F] rounded transition-all duration-300"
                >
                  Seguinos en Instagram
                </a>
              </div>

              {/* QR TIKTOK */}
              <div className="bg-stone-950 p-4 border border-stone-850 rounded-lg text-center flex flex-col items-center justify-between group">
                <div className="w-full flex flex-col items-center">
                  <div className="w-full max-w-[180px] aspect-square bg-stone-900 rounded border border-stone-800 overflow-hidden flex items-center justify-center p-2 mb-3">
                    <img src="/QR/TIKTOK.jpg" alt="QR TikTok" className="w-full h-full object-contain filter invert opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-stone-300 font-mono text-xs font-black uppercase tracking-wider mb-4">TIKTOK</span>
                </div>
                {/* Botón de enlace directo */}
                <a 
                  href="https://www.tiktok.com/@adrianbrunobossini?_r=1&_t=ZS-97S7xOUunvL" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-2 px-3 text-[11px] font-mono font-black uppercase tracking-wider text-stone-200 border border-[#E05C4F]/40 bg-[#E05C4F]/10 hover:bg-[#E05C4F] hover:text-stone-950 hover:border-[#E05C4F] rounded transition-all duration-300"
                >
                  Seguinos en TikTok
                </a>
              </div>

              {/* QR FACEBOOK */}
              <div className="bg-stone-950 p-4 border border-stone-850 rounded-lg text-center flex flex-col items-center justify-between group">
                <div className="w-full flex flex-col items-center">
                  {/* Dejamos el contenedor del QR listo para cuando te lo pase, pero el usuario ya puede usar el botón */}
                  <div className="w-full max-w-[180px] aspect-square bg-stone-900 rounded border border-stone-800 overflow-hidden flex items-center justify-center p-2 mb-3">
                    <img src="/QR/FACEBOOK.jpg" alt="QR Facebook" className="w-full h-full object-contain filter invert opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-stone-300 font-mono text-xs font-black uppercase tracking-wider mb-4">FACEBOOK</span>
                </div>
                {/* Botón de enlace directo (Salva las papas mientras el QR no ande) */}
                <a 
                  href="https://www.facebook.com/roxsport.roxsport" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-2 px-3 text-[11px] font-mono font-black uppercase tracking-wider text-stone-200 border border-[#E05C4F]/40 bg-[#E05C4F]/10 hover:bg-[#E05C4F] hover:text-stone-950 hover:border-[#E05C4F] rounded transition-all duration-300"
                >
                  Seguinos en Facebook
                </a>
              </div>

            </div>
        </div>
      </div>
    </section>
  );
}