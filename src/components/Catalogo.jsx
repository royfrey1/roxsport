import React, { useState } from 'react';
import { MessageCircle, Info, CheckCircle2, SlidersHorizontal } from 'lucide-react';

export default function CatalogoFardos() {
  // Categorías para que el cliente filtre rápido en la web
  const categorias = ["Todos", "Premium", "Invierno", "Deportivo",];
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");

  // Estructura de fardos procesando los datos reales del negocio de Adrián
  const fardos = [
    {
      id: 1,
      titulo: "Fardo Premium Vintage",
      categoria: "Premium",
      peso: "45 KG",
      prendasAprox: "120 - 140 prendas",
      colorTag: "NUEVO INGRESO",
      descripcion: "Selección exclusiva de buzos, camperas y remeras retro de marcas de primera línea. Ideal para showrooms orientados a moda vintage con alto margen de reventa.",
      incluye: ["Camperas retro", "Buzos universitarios", "Remeras gráficas"],
      disponible: true
    },
    {
      id: 2,
      titulo: "Fardo Invierno Mix",
      categoria: "Invierno",
      peso: "50 KG",
      prendasAprox: "80 - 100 prendas",
      colorTag: "ALTA DEMANDA",
      descripcion: "Lote cerrado con ropa pesada de abrigo. Camperas inflables, parkas, buzos de frisa y sweaters seleccionados para soportar bajas temperaturas.",
      incluye: ["Camperas de abrigo", "Sweaters surtidos", "Buzos de frisa"],
      disponible: true
    },
    {
      id: 3,
      titulo: "Fardo Deportivo Premium",
      categoria: "Deportivo",
      peso: "45 KG",
      prendasAprox: "150 - 170 prendas",
      colorTag: "STOCK LIMITADO",
      descripcion: "Indumentaria técnica y deportiva para entrenamiento. Incluye calzas, shorts, remeras térmicas y rompevientos de marcas globales en excelente estado.",
      incluye: ["Calzas y Shorts", "Remeras dry-fit", "Rompevientos"],
      disponible: true
    },
  ];

  // Filtro lógico
  const fardosFiltrados = categoriaActiva === "Todos" 
    ? fardos 
    : fardos.filter(f => f.categoria === categoriaActiva);

  return (
    <section id="catalogo" className="bg-stone-950 py-24 px-4 border-t border-stone-900">
      <div className="max-w-7xl mx-auto">
        
        {/* ENCABEZADO INDUSTRIAL */}
        <div className="flex flex-col gap-4 items-center justify-between border-b border-[#E05C4F] pb-8 mb-12 lg:flex-row">
          <div className="text-left">
            <h3 className="text-4xl sm:text-5xl font-black text-[#E05C4F] uppercase tracking-tighter">
              Lotes y Fardos <br /> <span className="text-stone-200 font-extrabold">Mas Solicitados</span>
            </h3>
          </div>
          
          {/* FILTROS DE CATEGORÍAS */}
          <div className="flex flex-wrap gap-1.5 p-1 justify-center bg-stone-900/40 rounded border border-stone-900">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaActiva(cat)}
                className={`text-[10px] font-bold uppercase tracking-widest px-3 py-2 rounded transition-all ${
                  categoriaActiva === cat 
                    ? 'bg-[#E05C4F] text-stone-950 shadow-md' 
                    : 'text-stone-400 hover:text-stone-100 hover:bg-stone-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
        </div>

        {/* REJILLA DE TARJETAS (Muestra las especificaciones detalladas del audio) */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-left">
          {fardosFiltrados.map((fardo) => (
            <div 
              key={fardo.id} 
              className="bg-stone-900/20 border border-stone-900 hover:border-stone-800/80 rounded-xl p-6 flex flex-col justify-between transition-all duration-300 relative group"
            >
              
              {/* Contenido Superior */}
              <div>
                {/* Etiquetas de Estado */}
                <div className="flex justify-between items-center mb-6">
                  <span className="bg-stone-900 text-[#E05C4F] font-mono text-[9px] font-black tracking-widest px-2.5 py-1 rounded border border-stone-800/60">
                    {fardo.colorTag}
                  </span>
                  <div className="text-right">
                    <span className="text-stone-500 font-mono text-[10px] block uppercase">Peso Neto</span>
                    <span className="text-stone-200 font-black text-sm font-mono">{fardo.peso}</span>
                  </div>
                </div>

                {/* Título de la mercadería */}
                <h4 className="text-xl font-black text-stone-100 uppercase tracking-tight mb-3 group-hover:text-[#E05C4F] transition-colors">
                  {fardo.titulo}
                </h4>

                {/* DESCRIPCIÓN EXPLICATIVA (Pedido por Adrián para sacar dudas) */}
                <p className="text-stone-400 text-xs font-medium leading-relaxed mb-6">
                  {fardo.descripcion}
                </p>

                {/* Desglose técnico de lo que contiene el bulto */}
                <div className="bg-stone-950/40 border border-stone-900/60 rounded-lg p-4 mb-6 space-y-2">
                  <span className="text-stone-500 font-mono text-[9px] block uppercase tracking-wider mb-1">// DETALLE_INTERNO</span>
                  {fardo.incluye.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-stone-300 text-xs font-semibold">
                      <CheckCircle2 size={12} className="text-[#E05C4F] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bloque de Acción / Botón de Compra por WhatsApp */}
              <div className="pt-4 border-t border-stone-900 flex items-center justify-between gap-4">
                <div>
                  <span className="text-stone-500 font-mono text-[9px] block uppercase">Rendimiento</span>
                  <span className="text-stone-300 text-xs font-bold font-mono">{fardo.prendasAprox}</span>
                </div>

                {fardo.disponible ? (
                  <a
                    href={`https://wa.me/54XXXXXXXXXX?text=Hola%20Adrian,%20me%20interesa%20el%20${encodeURIComponent(fardo.titulo)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#E05C4F] hover:bg-[#c94f43] text-stone-950 font-black text-[10px] uppercase tracking-widest px-4 py-3 rounded-lg transition-colors flex items-center gap-2 shadow-sm"
                  >
                    <MessageCircle size={12} className="stroke-[2.5]" />
                    Pedir Lote
                  </a>
                ) : (
                  <span className="text-stone-600 font-black text-[10px] uppercase tracking-widest font-mono border border-stone-900 px-3 py-2 rounded">
                    Sin Stock
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}