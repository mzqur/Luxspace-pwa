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
  const [items, setItems] = React.useState([]);
    React.useEffect(function(){
      (async function () {
        const response = await fetch('https://prod-qore-app.qorebase.io/8ySrll0jkMkSJVk/allItems/rows?limit=7&offset=0&$order=asc', {
          headers: {
            "Content-Type": "application/json",
            "accept": "application/json",
            "x-api-key": process.env.REACT_APP_APIKEY
          }
        });
        const { nodes } = await response.json();
        setItems(nodes);
      })();
    },[]);
  return (
    <div>
      <Header /> 
      <Hero />
      <Browse />
      <Arived items={items}/>
      <Clients />
      <AsideMenu />
      <Footer />
    </div> 
  );
}

export default App;
