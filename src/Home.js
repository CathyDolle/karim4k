import './styles/App.scss';
import Footer from './components/Footer.jsx'
import Gallery from './components/Gallery.jsx'
import background from './img/background.jpg'
import Highlights from './components/Highlights';

function Home() {
  return (
    <section>
      <main>
        <div className="black_filter"/>
        <img src={background} alt="img"/>
        <p>Karim 4K pour des photos en 4K<br/>(SCROLL TO DISCOVER)</p>
      </main>
      <Gallery id="Gallery"/>
      <Highlights/>
      <Footer/>
    </section>
  );
}

export default Home;
