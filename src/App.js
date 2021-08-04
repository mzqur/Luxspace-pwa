import React from 'react';
import './styles/tailwind.output.css';
import Header from './component/header/Header';
import Hero from './component/hero/Hero';
import Browse from './component/browse/Browse';
import Arived from './component/arived/Arived';
import Clients from './component/client/Clients';
import AsideMenu from './component/aside_menu/AsideMenu';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div>
      <Header /> 
      <Hero />
      <Browse />
      <Arived />
      <Clients />
      <AsideMenu />
      <Footer />
    </div> 
  );
}

export default App;
