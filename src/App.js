import { useEffect } from "react";
import './styles/App.scss';
import './styles/Library.scss';
import { Routes, Route, useLocation } from "react-router-dom";
import Paysage from './pages/categories/paysage';
import Night from './pages/categories/night';
import Portrait from './pages/categories/portrait';
import Travel from './pages/categories/travel';
import Street from './pages/categories/street';
import Shop from './pages/shop';
import Home from './Home';
import Highlights from './pages/highlights';
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lenis from '@studio-freight/lenis'
import Header from "./components/Header";



function App() {
  
  AOS.init();
  const lenis = new Lenis()
  const location = useLocation();

  useEffect(() => {
    Lenis.scrollTo(0,0)
  },[location])

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/paysage" element={<Paysage />}/>
        <Route path="/night" element={<Night />}/>
        <Route path="/street" element={<Street />}/>
        <Route path="/highlights" element={<Highlights />}/>
        <Route path="/portrait" element={<Portrait />}/>
        <Route path="/travel" element={<Travel />}/>
        <Route path="/shop" element={<Shop />}/>
      </Routes>
    </>
  );
}

export default App;
