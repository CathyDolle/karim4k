import './styles/App.scss';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Gallery from './components/Gallery.jsx'
import background from './img/background.jpg'
import Highlights from './components/Highlights';

function Home() {
  return (
    <section>
      <Header/>
      <main>
        <div className="black_filter"/>
        <img src={background} alt="img"/>
        <p>Karim 4K pour des photos en 4K</p>
      </main>
      <Gallery/>
      <Highlights/>
      <Footer/>
    </section>
  );
}

export default Home;
