import React, { useState } from 'react';
import { MessageCircle, CheckCircle2 } from 'lucide-react';

export default function CatalogoFardos() {
  // 1. Mantenemos las categorías para el filtro global superior
  const categorias = ["Todos", "Premium", "Invierno", "Deportivo"];
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");

  // 2. Estructura de subsecciones con todos los datos intactos de Adrián
  const subsecciones = [
    {
      id: "nuevos-ingresos",
      tag: "FARDOS NUEVOS",
      tituloSeccion: "Fardos Premium Nuevo",
      descripcionSeccion: "Mercadería recién ingresada a depósito. Unidades exclusivas listas para despacho inmediato.",
      fardos: [
        {
          id: 1,
          titulo: "Fardo Premium Nuevo Nike", // Fardo de procedencia Costco
          categoria: "Premium",
          peso: "50_KG",
          prendasAprox: "100 prendas",
          imagen: "/full_nike.jpeg", // Corregido sin prefijo /public para entornos Vite/Next
          descripcion: "Ropa nueva de retorno de primera línea. Lote seleccionado de invierno que incluye variedad de buzos, camperas y pantalones de abrigo con excelente margen comercial.",
          incluye: ["Calidad Invierno Retorno", "Buzos y Pantalones", "Camperas de abrigo"],
          disponible: true
        },
        {
          id: 2,
          titulo: "Fardo Premium Nuevo Costco Invierno", // Lote específico Nike
          categoria: "Premium",
          peso: "50_KG",
          prendasAprox: "100 prendas",
          imagen: "/costco_invierno.jpeg", // Listo para agregar ruta cuando pases la foto 2
          descripcion: "Indumentaria deportiva nueva de retorno de la marca líder. Lote de invierno ideal para entrenamiento y uso urbano, compuesto por buzos, camperas y pantalones.",
          incluye: ["Lote exclusivo Costco", "Prendas de Invierno", "Buzos y Pantalones"],
          disponible: true
        },
        {
          id: 3,
          titulo: "Fardo Premium Nuevo (Kids Mix)",  // Lote Costco / Target Chicos
          categoria: "Premium",
          peso: "50_KG",
          prendasAprox: "100 prendas",
          imagen: "/mix_kids.jpeg", // Listo para agregar ruta cuando pases la foto 3
          descripcion: "Mix de indumentaria infantil nueva de retorno (marcas Costco y Target). Ropa de abrigo ideal para la temporada invernal: buzos, camperas y pantalones para chicos.",
          incluye: ["Marcas Costco & Target", "Especial Niños (Chicos)", "Retorno de Invierno"],
          disponible: true
        }
      ]
    },
    {
      id: "alta-demanda",
      tag: "ALTA DEMANDA",
      tituloSeccion: "Alta Demanda",
      descripcionSeccion: "Los lotes más buscados por los comercios. Rotación garantizada y excelente salida comercial.",
      fardos: [
        {
          id: 4, // ID único corregido
          titulo: "Mixto Deportivo Boutique", // Lote específico de ropa de abrigo invierno
          categoria: "Invierno, Deportivo",
          peso: "50_KG",
          prendasAprox: "80 - 100 prendas",
          imagen: "/Fardo_conocidas/america_boutique.jpeg",
          descripcion: "Lote cerrado con ropa pesada de abrigo. Camperas inflables, parkas, buzos de frisa y sweaters seleccionados para soportar bajas temperaturas.",
          incluye: ["Camperas de abrigo", "Sweaters surtidos", "Buzos de frisa"],
          disponible: true
        },
        {
          id: 5, // ID único corregido
          titulo: "Mixto Deportivo Invierno",
          categoria: "Invierno",
          peso: "50_KG",
          prendasAprox: "80 - 100 prendas",
          imagen: "/Fardo_conocidas/premium_depor_marca.jpeg",
          descripcion: "Lote cerrado de marcas conocidas. Camperas inflables, parkas, buzos de frisa y sweaters seleccionados para soportar bajas temperaturas.",
          incluye: ["Camperas de abrigo", "Sweaters surtidos", "Buzos de frisa"],
          disponible: true
        }
      ]
    },
    {
      id: "stock-limitado",
      tag: "STOCK LIMITADO",
      tituloSeccion: "Stock Limitado",
      descripcionSeccion: "Lotes con disponibilidad limitada. Asegurá la continuidad de tus productos estrella sin quiebres de stock.",
      fardos: [
        {
          id: 6, // ID único corregido
          titulo: "Camperas Deportivas con Gorro",
          categoria: "Deportivo",
          peso: "45_KG",
          prendasAprox: "10 - 12 prendas",
          imagen: "/Stock_limitado/camperas_con_gorro.jpeg",
          descripcion: "Camperas técnicas de entrenamiento con capucha. Lote seleccionado de marcas globales en excelente estado, ideal para la temporada de frío.",
          incluye: ["Abrigos", "Camperas", "Rompevientos"],
          disponible: true
        },
        {
          id: 7, // ID único corregido
          titulo: "Camperas Deportivas",
          categoria: "Deportivo, Invierno",
          peso: "45_KG",
          prendasAprox: "10 - 12 prendas",
          imagen: "/Stock_limitado/camperas_deportivas.jpeg",
          descripcion: "Camperas técnicas de entrenamiento. Lote seleccionado de marcas globales en excelente estado, ideal para la temporada de frío.",
          incluye: ["Camperas", "Sweaters", "Rompevientos"],
          disponible: true
        },
        {
          id: 8, // ID único corregido
          titulo: "Chaquetas Deportivas", // Lote específico de camperas deportivas sin capucha
          categoria: "Deportivo",
          peso: "45_KG",
          prendasAprox: "10 - 12 prendas",
          imagen: "/Stock_limitado/chaqueta_deportiva.jpeg",
          descripcion: "Chaquetas técnicas de entrenamiento. Lote seleccionado de marcas globales en excelente estado, ideal para la temporada de frío.",
          incluye: ["Chaquetas", "Sweaters", "Abrigos deportivos"],
          disponible: true
        },
        {
          id: 9, // ID único corregido
          titulo: "Marcas Premium Deportivas", // Lote específico de camperas deportivas sin capucha
          categoria: "Deportivo, Premium",
          peso: "45_KG",
          prendasAprox: "10 - 12 prendas",
          imagen: "/Stock_limitado/marcas_premium_deportivo.jpeg",
          descripcion: "Lote seleccionado de marcas globales en excelente estado, ideal para la temporada de frío. Chaquetas técnicas de entrenamiento.",
          incluye: ["Marcas Premium", "Camperas", " Abrigos deportivos"],
          disponible: true
        },
        {
          id: 10, // ID único corregido
          titulo: "Fardo Mixto", // Lote específico de camperas deportivas sin capucha
          categoria: "Todo, Deportivo, Premium, Invierno",
          peso: "45_KG",
          prendasAprox: "10 - 12 prendas",
          imagen: "/Stock_limitado/mixto.jpeg",
          descripcion: "Lote variado de marcas globales mixtas en excelente estado, diferentes temporadas y modelos.",
          incluye: ["Varias Marcas", "Diferentes Modelos", "Variedades de Abrigos deportivos"],
          disponible: true
        },
        {
          id: 11, // ID único corregido
          titulo: "Fardo Mixto deportivo de 2da", // Lote específico de camperas deportivas sin capucha
          categoria: "Deportivo",
          peso: "45_KG",
          prendasAprox: "50 - 60 prendas",
          imagen: "/Stock_limitado/mixto_deportivo_2da.jpeg",
          descripcion: "Lote variado de marcas globales mixtas en excelente estado, diferentes temporadas y modelos. Ropa deportiva de segunda selección con pequeños detalles estéticos pero sin comprometer la funcionalidad ni el rendimiento.",
          incluye: ["Varias Marcas", "Diferentes Modelos", "Prendas de Segunda Selección"],
          disponible: true
        },
        {
          id: 12, // ID único corregido
          titulo: "Pantalones Buzo", // Lote específico de camperas deportivas sin capucha
          categoria: "Deportivo",
          peso: "45_KG",
          prendasAprox: "50 - 60 prendas",
          imagen: "/Stock_limitado/pantalonbuzo.jpeg",
          descripcion: "Pantalones de buzo deportivos. Lote seleccionado de marcas globales en excelente estado, ideal para la temporada de frío. Pantalones de entrenamiento y uso urbano.",
          incluye: ["Pantalones Buzo", "Marcas conocidas", "Pantalones de entrenamiento"],
          disponible: true
        },
        {
          id: 13, // ID único corregido
          titulo: "Pantalones Jean", // Lote específico de camperas deportivas sin capucha
          categoria: "Premium",
          peso: "45_KG",
          prendasAprox: "50 - 60 prendas",
          imagen: "/Stock_limitado/pantalones_jean.jpeg",
          descripcion: "Pantalones jean de marcas reconocidas. Lote seleccionado de marcas globales en excelente estado, ideal para el uso urbano en cualquier temporada. Pantalones de uso urbano con excelente margen comercial.",
          incluye: ["Pantalones Jean", "Usos Urbanos", "Marcas reconocidas", "Variedad de talles"],
          disponible: true
        },
        {
          id: 14, // ID único corregido
          titulo: "Fardo Shein", // Lote específico de camperas deportivas sin capucha
          categoria: "Premium",
          peso: "45_KG",
          prendasAprox: "50 - 60 prendas",
          imagen: "/Stock_limitado/shein.jpeg",
          descripcion: "Fardo mixto de la marca Shein. Lote solo de prendas de la marca Shein, con variedad de modelos y estilos. Ropa de uso urbano con excelente margen comercial.",
          incluye: ["Fardo Shein", "Varios modelos", "Urbano y Deportivo", "Variedad de talles"],
          disponible: true
        },
        {
          id: 15, // ID único corregido
          titulo: "Fardo de Zapatillas Mixto", // Lote específico de camperas deportivas sin capucha
          categoria: "Premium",
          peso: "45_KG",
          prendasAprox: "50 - 60 pares",
          imagen: "/Stock_limitado/zapatillas_varios_talles.jpeg",
          descripcion: "Fardo mixto de zapatillas de marcas reconocidas. Lote solo de zapatillas, con variedad de modelos y estilos. Calzado deportivo y urbano con excelente margen comercial.",
          incluye: ["Varias Marcas", "Varios modelos", "Urbano y Deportivo", "Variedad de talles"],
          disponible: true
        }
      ]
    }
  ];

  return (
    <section id="catalogo" className="scroll-mt-24 bg-stone-950 py-24 px-4 border-t border-stone-900">
      <div className="max-w-7xl mx-auto">
        
        {/* ENCABEZADO INDUSTRIAL CON FILTROS GLOBALES ACTIVER */}
        <div className="flex flex-col gap-4 items-center justify-between border-b border-[#E05C4F] pb-8 mb-16 lg:flex-row">
          <div className="text-left">
            <h3 className="text-4xl sm:text-5xl font-black text-[#E05C4F] uppercase tracking-tighter">
              Lotes y Fardos <br /> <span className="text-stone-200 font-extrabold">Mas Solicitados</span>
            </h3>
          </div>
          
          {/* LOS BOTONES DE FILTRO ESTÁN DE VUELTA EXACTAMENTE ARRIBA */}
          <div className="flex flex-wrap gap-1.5 p-1 justify-center bg-stone-900/40 rounded border border-stone-900">
            {categorias.map((cat) => (
              <button
                key={cat}
                type="button"
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

        {/* CONTENEDOR DE SUBSECCIONES VERTICALES */}
        <div className="space-y-24">
          {subsecciones.map((sub) => {
            // Lógica de filtrado interna para cada sección por separado
            const fardosFiltradosEnSeccion = categoriaActiva === "Todos"
              ? sub.fardos
              : sub.fardos.filter(f => f.categoria === categoriaActiva);

            // Si al filtrar una categoría la subsección se queda sin fardos, no la mostramos para evitar bloques vacíos
            if (fardosFiltradosEnSeccion.length === 0) return null;

            return (
              <div key={sub.id} className="flex flex-col gap-8 text-left animate-fadeIn">
                
                {/* Título de la Subsección */}
                <div>
                  <span className="inline-block bg-stone-900 border border-stone-800 text-[#E05C4F] font-mono text-[9px] font-black tracking-widest px-2.5 py-1 rounded mb-3">
                    // {sub.tag}
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-black text-stone-100 uppercase tracking-tight">
                    {sub.tituloSeccion}
                  </h4>
                  <p className="text-stone-500 text-xs sm:text-sm max-w-3xl mt-1.5 font-medium leading-relaxed">
                    {sub.descripcionSeccion}
                  </p>
                </div>

                {/* 🚨 REJILLA DE TARJETAS AJUSTADA A 1 COLUMNA PARA EL LAYOUT HORIZONTAL */}
                <div className="grid gap-8 grid-cols-1">
                  {fardosFiltradosEnSeccion.map((fardo) => (
                    <div 
                      key={fardo.id} 
                      className="bg-stone-900/20 border border-stone-900 hover:border-stone-800/80 rounded-xl overflow-hidden flex flex-col md:flex-row transition-all duration-300 relative group shadow-xl max-w-4xl w-full mx-auto"
                    >
                      
                      {/* 📸 LADO IZQUIERDO: Espacio reservado para Imagen Vertical de celular */}
                      {fardo.imagen && (
                        <div className="w-full md:w-[280px] shrink-0 bg-stone-950/60 flex items-center justify-center border-b md:border-b-0 md:border-r border-stone-900 relative">
                          <img 
                            src={fardo.imagen} 
                            alt={fardo.titulo} 
                            /* 💡 object-contain asegura que la foto se dibuje ENTERA de arriba a abajo sin recortes */
                            className="w-full h-64 md:h-[420px] object-contain p-3 group-hover:scale-[1.02] transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/20 to-transparent pointer-events-none"></div>
                        </div>
                      )}

                      {/* 📝 LADO DERECHO: Bloque de Contenido e Información Técnica */}
                      <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                        <div>
                          {/* Etiquetas y Peso Neto */}
                          <div className="flex justify-between items-center mb-4">
                            <span className="bg-stone-900 text-stone-400 font-mono text-[9px] font-black tracking-widest px-2.5 py-1 rounded border border-stone-800/60">
                              {sub.tag}
                            </span>
                            <div className="text-right">
                              <span className="text-stone-500 font-mono text-[10px] block uppercase">Peso Neto</span>
                              <span className="text-stone-200 font-black text-sm font-mono">{fardo.peso.replace('_', ' ')}</span>
                            </div>
                          </div>

                          {/* Título de la mercadería */}
                          <h5 className="text-xl sm:text-2xl font-black text-stone-100 uppercase tracking-tight mb-3 group-hover:text-[#E05C4F] transition-colors">
                            {fardo.titulo}
                          </h5>

                          {/* Descripción técnica */}
                          <p className="text-stone-400 text-xs sm:text-sm font-medium leading-relaxed mb-6 max-w-2xl">
                            {fardo.descripcion}
                          </p>

                          {/* Desglose de ítems internos */}
                          <div className="bg-stone-950/40 border border-stone-900/60 rounded-lg p-4 mb-6 space-y-2 max-w-xl">
                            <span className="text-stone-500 font-mono text-[9px] block uppercase tracking-wider mb-1">// DETALLE_INTERNO</span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                              {fardo.incluye.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-stone-300 text-xs font-semibold">
                                  <CheckCircle2 size={12} className="text-[#E05C4F] shrink-0" />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Bloque de Acción Inferior */}
                        <div className="pt-4 border-t border-stone-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                          <div>
                            <span className="text-stone-500 font-mono text-[9px] block uppercase">Rendimiento</span>
                            <span className="text-stone-300 text-xs sm:text-sm font-bold font-mono">{fardo.prendasAprox}</span>
                          </div>

                          {fardo.disponible ? (
                            <a
                              href={`https://wa.me/54XXXXXXXXXX?text=Hola%20Adrian,%20me%20interesa%20el%20${encodeURIComponent(fardo.titulo)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-[#E05C4F] hover:bg-[#c94f43] text-stone-950 font-black text-[10px] uppercase tracking-widest px-5 py-3 rounded-lg transition-colors flex items-center gap-2 shadow-sm w-full sm:w-auto justify-center"
                            >
                              <MessageCircle size={12} className="stroke-[2.5]" />
                              Consultar Fardo
                            </a>
                          ) : (
                            <span className="text-stone-600 font-black text-[10px] uppercase tracking-widest font-mono border border-stone-900 px-4 py-2 rounded w-full sm:w-auto text-center">
                              Sin Stock
                            </span>
                          )}
                        </div>
                      </div>

                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}