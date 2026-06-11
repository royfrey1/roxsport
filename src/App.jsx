import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CatalogoFardos from './components/Catalogo';
import ComoFunciona from './components/Comofunciona';
import Footer from './components/Footer';
import GaleriaMultimedia from './components/Galeria';
import SobreNosotros from './components/Sobrenosotros';
import Contacto from './components/Contactos';

// Creamos un componente para la Landing Page Principal (Limpia y rápida)
function Home() {
  return (
    <>
      <Hero />
      <CatalogoFardos />
      <ComoFunciona />
    </>
  );
}

export default function App() {
  return (
    <div className="bg-stone-950 min-h-screen text-stone-100 antialiased">
      {/* El Navbar se mantiene fijo arriba en ambas páginas */}
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<GaleriaMultimedia />} />
        <Route path="/nosotros" element={<SobreNosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      {/* El Footer se mantiene abajo en ambas páginas */}
      <Footer /> 
    </div>
  );
}