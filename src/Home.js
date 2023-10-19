import './styles/App.scss';
import Footer from './components/Footer.jsx'
import Gallery from './components/Gallery.jsx'
import Highlights from './components/Highlights';
import karim from './img/karim.png'
import { Parallax, Background } from 'react-parallax';

function Home() {
  return (
    <section>
      <Parallax strength={600}>
        <Background className="custom-bg">
          <div className="black_filter"/>
        </Background>
        <div className="intro">
          <img src={karim} alt='img'/>
        </div>
      </Parallax>
      <Parallax strength={600}>
      <Gallery/>
      <Highlights/>
      </Parallax>
      <Footer/>
    </section>
  );
}

export default Home;
