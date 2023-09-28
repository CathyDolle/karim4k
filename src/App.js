import Lenis from '@studio-freight/lenis';
import './styles/App.scss';
import './styles/Library.scss';
import { Routes, Route } from "react-router-dom";
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
import Header from "./components/Header";



const lenis = new Lenis({
  duration: 1.8,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: 'vertical', // vertical, horizontal
  gestureDirection: 'vertical', // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})

// //get scroll value
// lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
//   console.log({ scroll, limit, velocity, direction, progress })
// })

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

function App() {
  
  AOS.init();

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
