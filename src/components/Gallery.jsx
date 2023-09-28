import React from 'react';
import { NavLink } from 'react-router-dom';
import Thumbnail from './Thumbnail.jsx'
import img1 from '../img/Paysage/cover.jpg'
import img2 from '../img/Night/cover.jpg'
import img3 from '../img/11.jpg'
import img4 from '../img/Portrait/cover.jpg'
import img5 from '../img/Travel/cover.jpg'

const Gallery = () => {
    return (
        <section className="gallery">
                <div className="desc">
                    <h1>Gallery</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className="categories">
                    <NavLink className="category"  to="/paysage">
                    <Thumbnail title="Paysage"  number="(13)" name={img1}/>
                    </NavLink>
                    <NavLink className="category"  to="/night">
                    <Thumbnail title="Photo de nuit"  number="(06)" name={img2}/>
                    </NavLink>

                    <NavLink className="category"  to="/street">
                    <Thumbnail title="Photo de rue"  number="(04)" name={img3}/>
                    </NavLink>

                    <NavLink className="category"  to="/portrait">
                    <Thumbnail title="Portrait"  number="(07)" name={img4}/>
                    </NavLink>

                    <NavLink className="category"  to="/travel">
                    <Thumbnail title="Voyage"  number="(07)" name={img5}/>
                    </NavLink>
                </div>
            </section>
    );
};

export default Gallery;