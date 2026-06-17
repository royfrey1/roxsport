import React, { useRef, useState } from 'react';
import { ArrowDown, Layers, Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';

export default function Hero() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      }
    }
  };

  return (
    <section id="inicio" className="relative bg-stone-950 overflow-hidden border-b border-stone-900">
      
      {/* 1. CONTENEDOR PRINCIPAL DEL HERO */}
      <div className="relative min-h-[80vh] flex items-center px-4 sm:px-8 lg:px-16 py-9 max-w-7xl mx-auto z-20">
        
        {/* IMAGEN DE FONDO INDUSTRIAL CON OVERLAY */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="/public/logoeditable.png" 
            alt="Depósito textil industrial" 
            className="w-full h-full object-cover object-center opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/50 via-stone-950/80 to-stone-950 md:bg-gradient-to-r md:from-stone-950 md:via-stone-950/70 to-transparent"></div>
        </div>

        {/* LÍNEAS DE CONTENCIÓN / FLEJES DE LOS FARDOS */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-5">
          <div className="absolute top-0 left-1/3 w-[2px] h-full bg-orange-500 rotate-12 transform origin-top"></div>
          <div className="absolute top-0 right-1/4 w-[2px] h-full bg-orange-500 -rotate-12 transform origin-top"></div>
          <div className="absolute top-1/3 left-0 w-full h-[1px] bg-stone-500"></div>
        </div>

        {/* ESTRUCTURA EN DOS COLUMNAS */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-20">
          
          {/* COLUMNA IZQUIERDA: CONTENIDO TEXTUAL */}
          <div className="text-center md:text-left w-full">
             
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

          {/* COLUMNA DERECHA: MARCO DEL VIDEO INTACTO Y COMPLETO */}
          <div className="relative w-full max-w-[310px] aspect-[9/16] rounded-xl overflow-hidden border border-stone-800 bg-stone-950/30 shadow-2xl group mx-auto flex items-center justify-center">
            
            <video
                ref={videoRef}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover cursor-pointer"
                onClick={togglePlay}
              >
                <source src="/videos/apertura-fardos.mp4" type="video/mp4" />
                Tu navegador no soporta video.
              </video>

            {/* PANEL DE CONTROL INTERACTIVO (Se adapta perfectamente abajo) */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent flex items-center justify-between opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-20">
              <div className="flex items-center gap-2">
                <button type="button" onClick={togglePlay} className="p-2 rounded bg-stone-900 border border-stone-800 text-stone-200 hover:text-white transition-colors">
                  {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                </button>
                <button type="button" onClick={toggleMute} className="p-2 rounded bg-stone-900 border border-stone-800 text-stone-200 hover:text-white transition-colors">
                  {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                </button>
              </div>
              <button type="button" onClick={handleFullScreen} className="p-2 rounded bg-stone-900 border border-stone-800 text-stone-200 hover:text-white transition-colors">
                <Maximize2 size={14} />
              </button>
            </div>

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

      {/* 2. MARQUESINA ADAPTADA AL FINAL DEL HERO */}
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