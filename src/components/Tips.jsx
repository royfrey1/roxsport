import React from 'react';
import { 
  Box, 
  Sparkles, 
  ShieldAlert, 
  UserCheck, 
  Search, 
  TrendingUp, 
  AlertTriangle 
} from 'lucide-react';

export default function GuiaInicios() {
  // Mapeamos los tips exactos de las imágenes para renderizarlos de forma dinámica con sus respectivos íconos
  const tips = [
    {
      id: 1,
      titulo: "Empacados en el Exterior",
      descripcion: "Los fardos no los arma el proveedor local, sino que vienen directamente cerrados y precintados desde el exterior. Por lo tanto, el distribuidor no es responsable del contenido exacto de un fardo sellado de origen.",
      icono: <Box className="text-[#E05C4F]" size={28} />,
    },
    {
      id: 2,
      titulo: "Naturaleza de la Ropa Usada",
      descripcion: "Tanto los fardos de primera como los de segunda calidad contienen prendas usadas o de retorno. Al ser este tipo de mercadería, algunas prendas podrían presentar suciedad menor o requerir algún arreglo (lavar, planchar o coser).",
      icono: <Sparkles className="text-amber-500" size={28} />,
    },
    {
      id: 3,
      titulo: "Límites de Garantía Mayorista",
      descripcion: "Debes tener en cuenta que ningún proveedor local puede garantizarte una cantidad exacta de prendas, marcas específicas dentro del mix, o que la ropa venga con etiquetas de fábrica.",
      icono: <ShieldAlert className="text-stone-400" size={28} />,
    },
    {
      id: 4,
      titulo: "La Calidad es Variable",
      descripcion: "La consistencia y el tipo de prendas de los fardos varía de acuerdo a las diferentes empresas enfardadoras del exterior, ya que existen muchas marcas y plantas de reciclaje textil.",
      icono: <TrendingUp className="text-blue-400" size={28} />,
    },
    {
      id: 5,
      titulo: "Atención con el Administrador",
      descripcion: "Si vas a realizar una compra o consulta a través de un grupo de WhatsApp, asegúrate estrictamente de estar hablando y coordinando de forma directa con el administrador real del canal.",
      icono: <UserCheck className="text-emerald-500" size={28} />,
    },
    {
      id: 6,
      titulo: "Busca Referencias Previas",
      descripcion: "Antes de comprar, tómate un tiempo para investigar y buscar referencias de las personas a las que les vas a comprar. La inversión en este rubro es mucha como para ingresar sin informarse bien.",
      icono: <Search className="text-purple-400" size={28} />,
    }
  ];

  return (
    <section id="tips-inicio" className="bg-stone-950 py-24 px-4 border-t border-stone-900">
      <div className="max-w-6xl mx-auto">
        
        {/* ENCABEZADO DE LA SECCIÓN */}
        <div className="text-center mb-16">
          <span className="inline-block bg-stone-900 border border-stone-800 text-[#E05C4F] font-mono text-[9px] font-black tracking-widest px-2.5 py-1 rounded mb-3">
            // INFORMACIÓN CLAVE PARA EMPRENDEDORES
          </span>
          <h3 className="text-3xl sm:text-5xl font-black text-stone-100 uppercase tracking-tighter">
            Tips para Iniciarse <br className="hidden sm:inline" />
            <span className="text-[#E05C4F] font-extrabold">En el Mundo de los Fardos</span>
          </h3>
          <p className="text-stone-500 text-xs sm:text-sm max-w-2xl mx-auto mt-4 font-medium leading-relaxed">
            Queremos que arranques con el pie derecho. Te dejamos estas sugerencias y reglas del mercado mayorista para que protejas tu capital y escales tu stock con seguridad.
          </p>
        </div>

        {/* REJILLA DINÁMICA DE TIPS CON ÍCONOS ASOCIADOS AL LADO */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tips.map((tip) => (
            <div 
              key={tip.id} 
              className="bg-stone-900/10 border border-stone-900/80 hover:border-stone-800 hover:bg-stone-900/30 p-6 rounded-xl transition-all duration-300 group flex items-start gap-4 shadow-md"
            >
              {/* 💡 ÍCONO ASOCIADO AL LADO (Contenedor con diseño industrial flotante) */}
              <div className="p-3 bg-stone-950 border border-stone-900 group-hover:border-stone-800 rounded-lg shrink-0 transition-colors shadow-inner">
                {tip.icono}
              </div>

              {/* CONTENIDO TEXTUAL */}
              <div className="space-y-1.5 text-left">
                <h4 className="text-base font-black text-stone-200 uppercase tracking-tight group-hover:text-[#E05C4F] transition-colors">
                  {tip.titulo}
                </h4>
                <p className="text-stone-400 text-xs font-medium leading-relaxed">
                  {tip.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RECUADRO DE ADVERTENCIA DE COMPRA (SACADO DIRECTO DE LA CAPTURA) */}
        <div className="mt-12 bg-stone-900/20 border border-stone-900 rounded-xl p-6 flex flex-col sm:flex-row items-start gap-4 max-w-4xl mx-auto text-left">
          <div className="p-2.5 bg-stone-950 border border-stone-900 text-[#E05C4F] rounded-lg shrink-0">
            <AlertTriangle size={20} />
          </div>
          <div>
            <h5 className="text-stone-200 font-black text-xs uppercase tracking-wider mb-1">
              Información sobre Cambios y Reembolsos
            </h5>
            <p className="text-stone-500 text-[11px] font-semibold leading-relaxed">
              Tanto las prendas individuales como los fardos cerrados <span className="text-stone-300">no tienen cambio ni reembolso de ningún tipo sin ninguna excepción</span>. Les pedimos por favor que antes de realizar una compra despejen todas sus dudas técnicas con el equipo de soporte.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}