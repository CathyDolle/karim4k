import './styles/App.scss';
import Footer from './components/Footer.jsx'
import Gallery from './components/Gallery.jsx'
import Highlights from './components/Highlights';
import { Parallax, Background } from 'react-parallax';

function Home() {
  return (
    <section>
      <Parallax strength={600}>
        <Background className="custom-bg">
          <div className="black_filter"/>
        </Background>
        <div className="intro">
          <h1>Karim Bbahla</h1>
          <p>Photography</p>
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
