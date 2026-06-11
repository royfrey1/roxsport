import React, { useState, useEffect } from 'react';
import { Play, Image as ImageIcon, MessageCircle, Film, X } from 'lucide-react';
import { supabase } from '../clienteSupabase'; 

export default function GaleriaMultimedia() {
  const [filtroTipo, setFiltroTipo] = useState('todos');
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');
  const [itemSeleccionado, setItemSeleccionado] = useState(null);
  
  // 🟢 ESTADOS PARA LA BASE DE DATOS REAL
  const [itemsMultimedia, setItemsMultimedia] = useState([]);
  const [cargando, setCargando] = useState(true);

  const categorias = ["Todos", "Premium", "Invierno", "Deportivo", "Verano"];

  // 🔄 EFECTO: TRAER LOS DATOS EN VIVO DESDE SUPABASE
  useEffect(() => {
    async function obtenerDatosGaleria() {
      try {
        setCargando(true);
        // Hacemos la consulta a tu tabla 'multimedia'
        const { data, error } = await supabase
          .from('multimedia')
          .select('*')
          .order('id', { ascending: false }); // Trae primero los últimos fardos subidos

        if (error) throw error;
        
        setItemsMultimedia(data || []);
      } catch (error) {
        console.error("Error al conectar con Supabase:", error.message);
      } finally {
        setCargando(false);
      }
    }

    obtenerDatosGaleria();
  }, []);

  // 🔒 EFECTO: CONGELAR EL SCROLL CUANDO EL MODAL ESTÁ ABIERTO
  useEffect(() => {
    document.body.style.overflow = itemSeleccionado ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [itemSeleccionado]);

  // 🎛️ LÓGICA DE FILTRADO CRUZADO
  const itemsFiltrados = itemsMultimedia.filter(item => {
    const coincideTipo = filtroTipo === 'todos' || item.tipo === filtroTipo;
    const coincideCategoria = categoriaActiva === 'Todos' || item.categoria === categoriaActiva;
    return coincideTipo && coincideCategoria;
  });

  // PANTALLA DE CARGA (Súper útil mientras se descarga el JSON de la BD)
  if (cargando) {
    return (
      <div className="min-h-screen bg-stone-900 flex items-center justify-center">
        <div className="text-center font-mono text-xs text-stone-500 uppercase tracking-[0.2em] animate-pulse">
          // SINCRONIZANDO STOCK DISPONIBLE...
        </div>
      </div>
    );
  }

  return (
    <section className="bg-stone-900 py-15 px-4 min-h-screen border-t border-stone-850">
      <div className="max-w-7xl mx-auto">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-12">
          <span className="text-[#E05C4F] font-mono text-xs font-black uppercase tracking-[0.2em] block mb-2">
            // STOCK DISPONIBLE
          </span>
          <h3 className="text-3xl sm:text-5xl font-black text-stone-100 uppercase tracking-tighter">
            Galería del <span className="text-[#E05C4F] font-extrabold">Depósito</span>
          </h3>
          <p className="text-stone-400 text-xs sm:text-sm max-w-xl mx-auto mt-4 leading-relaxed">
            Revisá el material que grabamos directo en Once. Todo el stock es verificado minuciosamente antes del despacho mayorista.
          </p>
        </div>

        {/* CONTROLES Y FILTROS */}
        <div className="flex flex-col gap-4 items-center justify-between border-b border-stone-800 pb-8 mb-12 lg:flex-row">
          {/* Tipo de Archivo */}
          <div className="flex bg-stone-950 p-1 rounded-lg border border-stone-800">
            <button onClick={() => setFiltroTipo('todos')} className={`text-[10px] font-black uppercase tracking-wider px-4 py-2 rounded-md transition-all flex items-center gap-2 ${filtroTipo === 'todos' ? 'bg-[#E05C4F] text-stone-950' : 'text-stone-400'}`}>
              <Film size={12} /> Todos
            </button>
            <button onClick={() => setFiltroTipo('foto')} className={`text-[10px] font-black uppercase tracking-wider px-4 py-2 rounded-md transition-all flex items-center gap-2 ${filtroTipo === 'foto' ? 'bg-[#E05C4F] text-stone-950' : 'text-stone-400'}`}>
              <ImageIcon size={12} /> Fotos fardos
            </button>
            <button onClick={() => setFiltroTipo('video')} className={`text-[10px] font-black uppercase tracking-wider px-4 py-2 rounded-md transition-all flex items-center gap-2 ${filtroTipo === 'video' ? 'bg-[#E05C4F] text-stone-950' : 'text-stone-400'}`}>
              <Play size={12} className={filtroTipo === 'video' ? 'fill-stone-950' : ''} /> Videos Tienda
            </button>
          </div>

          {/* Categorías de Ropa */}
          <div className="flex flex-wrap gap-1.5 justify-center">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaActiva(cat)}
                className={`text-[10px] font-bold uppercase tracking-widest px-3 py-2 rounded border transition-all ${
                  categoriaActiva === cat ? 'border-[#E05C4F] bg-[#E05C4F]/10 text-[#E05C4F]' : 'border-stone-800 text-stone-400 hover:text-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* GRILLA DE CONTENIDO */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {itemsFiltrados.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setItemSeleccionado(item)}
              className="bg-stone-950 border border-stone-850 rounded-xl overflow-hidden flex flex-col justify-between group hover:border-stone-700 transition-all duration-300 cursor-pointer"
            >
              {/* Miniatura / Card superior */}
              <div className="relative aspect-video w-full bg-stone-900 overflow-hidden">
                <img src={item.miniatura} alt={item.titulo} className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
                <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/40 transition-colors"></div>
                
                <span className="absolute top-3 left-3 bg-stone-950/90 backdrop-blur-sm text-stone-300 font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 rounded border border-stone-800">
                  {item.categoria}
                </span>

                {item.tipo === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-stone-950/90 border border-[#E05C4F]/50 flex items-center justify-center text-[#E05C4F]">
                      <Play size={18} className="fill-[#E05C4F] ml-0.5" />
                    </div>
                  </div>
                )}
              </div>

              {/* Textos inferiores de la Card (Se alimentan de las columnas de tu tabla) */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-black text-stone-200 uppercase tracking-tight mb-2 group-hover:text-[#E05C4F] transition-colors">
                    {item.titulo}
                  </h4>
                  <p className="text-stone-500 text-xs font-medium leading-relaxed mb-5">
                    {item.descripcion}
                  </p>
                </div>
                
                {/* Evitamos que el clic en el link de WhatsApp active el modal por accidente */}
                <div className="pt-4 border-t border-stone-900 flex items-center justify-between" onClick={(e) => e.stopPropagation()}>
                  <span className="text-stone-600 font-mono text-[10px] uppercase font-bold tracking-wider">// {item.tipo.toUpperCase()}</span>
                  <a 
                    href={`https://wa.me/54XXXXXXXXXX?text=Hola%20Adrian,%20te%20consulto%20por%20el%20lote%20"${encodeURIComponent(item.titulo)}"%20de%20la%20galeria.`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 text-stone-400 hover:text-[#E05C4F] text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <MessageCircle size={13} /> Consultar bulto
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RECUADRO SI NO HAY ITEMS REGISTRADOS */}
        {itemsFiltrados.length === 0 && (
          <div className="bg-stone-950 border border-stone-850 p-12 rounded-xl text-center font-mono text-xs text-stone-500 uppercase tracking-wider">
            No hay elementos multimedia disponibles para esta selección.
          </div>
        )}

        {/* 🚨 MODAL FLOTANTE CORRECTO CON LOS DATOS DE LA DB */}
        {itemSeleccionado && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/95 backdrop-blur-sm p-4 animate-fadeIn">
            <div className="absolute inset-0" onClick={() => setItemSeleccionado(null)}></div>

            <div className="bg-stone-900 border border-stone-800 rounded-xl max-w-4xl w-full overflow-hidden relative shadow-2xl flex flex-col z-10 max-h-[95vh]">
              
              <button 
                onClick={() => setItemSeleccionado(null)}
                className="absolute top-3 right-3 z-30 w-9 h-9 rounded-full bg-stone-950/90 border border-stone-800 flex items-center justify-center text-stone-200 hover:text-[#E05C4F] transition-all shadow-lg"
              >
                <X size={18} className="stroke-[2.5]" />
              </button>

              <div className="w-full bg-stone-950 flex items-center justify-center aspect-video max-h-[70vh] sm:max-h-[80vh] overflow-hidden border-b border-stone-900">
                {itemSeleccionado.tipo === 'video' ? (
                  <video 
                    src={itemSeleccionado.archivo_url}  
                    controls 
                    autoPlay 
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img 
                    src={itemSeleccionado.archivo_url}  
                    alt={itemSeleccionado.titulo} 
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              <div className="p-5 bg-stone-950 text-left overflow-y-auto flex-grow">
                <span className="text-[#E05C4F] font-mono text-[9px] uppercase tracking-widest font-black">
                  {itemSeleccionado.categoria}
                </span>
                <h4 className="text-lg font-black text-stone-100 uppercase tracking-tight mt-1">
                  {itemSeleccionado.titulo}
                </h4>
                <p className="text-stone-400 text-xs mt-2 leading-relaxed">
                  {itemSeleccionado.descripcion}
                </p>

                <div className="mt-5 pt-4 border-t border-stone-900 flex justify-end">
                  <a 
                    href={`https://wa.me/54XXXXXXXXXX?text=Hola%20Adrian,%20te%20consulto%20por%20el%20bulto%20"${encodeURIComponent(itemSeleccionado.titulo)}"%20de%20la%20galeria.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#E05C4F] hover:bg-[#c94f43] text-stone-950 font-black text-[10px] uppercase tracking-widest px-4 py-2.5 rounded-lg flex items-center gap-1.5 transition-colors"
                  >
                    <MessageCircle size={12} className="stroke-[2.5]" />
                    Consultar por WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}