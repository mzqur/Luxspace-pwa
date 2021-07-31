import React from 'react';
import './styles/tailwind.output.css';
import Header from './component/Header';
import Hero from './component/Hero';
import Browse from './component/Browse';
import Arived from './component/Arived';
import Clients from './component/Clients';
import AsideMenu from './component/AsideMenu';
import Footer from './component/Footer';

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
