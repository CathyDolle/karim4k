import Lenis from '@studio-freight/lenis'
import AOS from "aos";
import "aos/dist/aos.css";
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
import { useEffect } from "react";


AOS.init()



function App() {
  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0,0)
  },[location])


  return (
    <Routes>
      <Route path="/" exact element={<Home />}/>
      <Route path="/paysage" element={<Paysage />}/>
      <Route path="/night" element={<Night />}/>
      <Route path="/street" element={<Street />}/>
      <Route path="/portrait" element={<Portrait />}/>
      <Route path="/travel" element={<Travel />}/>
      <Route path="/shop" element={<Shop />}/>
    </Routes>
  );
}

export default App;
