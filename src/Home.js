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
        <div className="intro">
          <h1>Karim Bbahla</h1>
          <p>Photography</p>
        </div>
      </main>
      <Gallery id="Gallery"/>
      <Highlights/>
      <Footer/>
    </section>
  );
}

export default Home;
