import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import logo from '../assets/logoeditable.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  const enlacesNav = [
    { name: 'Inicio', to: '/inicio' },
    { name: 'Galeria', to: '/galeria' },
    { name: 'Nosotros', to: '/nosotros' },
    { name: 'Contacto', to: '/contacto' },
  ];

  return (
    <footer className="bg-[#191919] text-stone-400 relative overflow-hidden">
      
      {/* 1. MARQUESINA DINÁMICA (ALERTA DE DESPACHO INTERNO) */}
      <div className="w-full bg-[#E05C4F] py-2.5 overflow-hidden whitespace-nowrap border-y border-[#E32714] relative z-10 flex select-none">
        {/* El contenedor doble permite que el texto scrollee infinitamente sin cortes */}
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

      {/* 2. CONTENIDO PRINCIPAL DEL FOOTER */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-left relative z-10">
        
        {/* COLUMNA 1: BRANDING */}
        <div className="space-y-4">
          <div className="flex-shrink-0 h-28 sm:h-34 w-42 sm:w-48 overflow-hidden group">
            <Link to="/" className="block w-full h-full">
              <img src={logo} alt="Roxsport Oficial" className="w-full h-full object-cover" />
            </Link>
          </div>
          <p className="text-xs font-medium leading-relaxed tracking-wide text-stone-500 max-w-xs">
            Mayorista de fardos de ropa. Tu proveedor de confianza en Buenos Aires desde hace más de 10 años.
          </p>
        </div>

        {/* COLUMNA 2: NAVEGACIÓN INTERNA */}
        <div>
          <h5 className="text-xs font-black uppercase tracking-widest text-[#E05C4F] font-mono mb-4">// NAVEGACIÓN</h5>
          <ul className="space-y-2.5">
            {enlacesNav.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.to} 
                  className="text-xs font-bold uppercase tracking-wider text-stone-400 hover:text-[#E05C4F] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMNA 3: DATOS DE CONTACTO */}
        <div>
          <h5 className="text-xs font-black uppercase tracking-widest text-[#E05C4F] font-mono mb-4">// CONTACTO</h5>
          <ul className="space-y-3.5 text-xs font-medium tracking-wide">
            <li className="flex items-start gap-2.5">
              <MapPin size={15} className="text-stone-600 shrink-0 mt-0.5" />
              <span>Av. Pueyrredón 300, Moreno, CABA</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={15} className="text-stone-600 shrink-0" />
              <span>+54 11 0000-0000</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={15} className="text-stone-600 shrink-0" />
              <span className="hover:text-[#E05C4F] transition-colors">info@roxsport.com.ar</span>
            </li>
          </ul>
        </div>

        {/* COLUMNA 4: HORARIOS & CTA WHATSAPP */}
        <div>
          <h5 className="text-xs font-black uppercase tracking-widest text-[#E05C4F] font-mono mb-4">// HORARIOS</h5>
          <ul className="space-y-2.5 text-xs font-medium tracking-wide mb-5">
            <li className="flex items-center gap-2">
              <Clock size={14} className="text-stone-600" />
              <span>Lun - Vie: 9:00 - 18:00</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock size={14} className="text-stone-600" />
              <span>Sáb: 9:00 - 14:00</span>
            </li>
          </ul>
          <a 
            href="https://wa.me/54XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#E05C4F] hover:text-[#E05C4F] transition-colors"
          >
            <MessageCircle size={16} className="stroke-[2.5]" />
            Escribinos por WhatsApp
          </a>
        </div>

      </div>

      {/* 3. BARRA DE CIERRE LEGAL */}
      <div className="border-t border-stone-800 bg-stone-950 px-6 py-6 text-[10px] font-mono tracking-wider text-stone-400">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()} ROXSPORT MAYORISTA – BUENOS AIRES, ARGENTINA</p>
          <p className="mt-2 md:mt-0 italic">
                        Desarrollado por 
                        <a 
                            href="https://portfolio-royf.vercel.app/"
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="font-bold text-[#E05C4F] hover:underline transition-all duration-300 ml-1"
                        >
                            Roy Frey
                        </a>
                    </p>
          <p className="uppercase">TODOS LOS PRECIOS SON FINALES • SUJETOS A CAMBIO SIN PREVIO AVISO</p>
        </div>
      </div>

    </footer>
  );
}