import React from 'react';
import Thumbnail from './Thumbnail.jsx'
import img5 from '../img/Best/LaureLondres.jpg'
import img6 from '../img/Best/LaureLondres2.jpg'
import img3 from '../img/Best/MSI2023.jpg'
import img4 from '../img/Best/Noemie.jpg'
import img7 from '../img/Best/Paris.jpg'
import img8 from '../img/Best/Rotterdam.jpg'
import img9 from '../img/Best/Rotterdam2.jpg'
import img10 from '../img/Best/Rotterdam3.jpg'
import img11 from '../img/Best/Rotterdam4.jpg'
import img12 from '../img/Best/Rotterdam5.jpg'
import img13 from '../img/Best/Rotterdam6.jpg'
import img15 from '../img/Best/Yosemite.jpg'


const highlights = () => {
      
    return (
        <section data-aos="fade-up" data-aos-duration="1000" className="highlights">
        <h1>Highlights</h1>
        <div className="margin_bottom">
            <Thumbnail title="image 1"  number="001" name={img5}/>
        </div>
        <div className="margin_top">
            <Thumbnail title="image 1"  number="001" name={img4}/>
        </div>
        <div className="margin_bottom">
            <Thumbnail title="image 1"  number="001" name={img3}/>
        </div>
        <div className="margin_top">
            <Thumbnail title="image 1"  number="001" name={img6}/>
        </div>
        <div className="margin_bottom">
            <Thumbnail title="image 1"  number="001" name={img8}/>
        </div>
        <div className="margin_top">
            <Thumbnail title="image 1"  number="001" name={img9}/>
        </div>
        <div className="margin_bottom">
            <Thumbnail title="image 1"  number="001" name={img7}/>
        </div>
        <div className="margin_top">
            <Thumbnail title="image 1"  number="001" name={img10}/>
        </div>
        <div className="margin_bottom">
            <Thumbnail title="image 1"  number="001" name={img11}/>
        </div>
        <div className="margin_top">
            <Thumbnail title="image 1"  number="001" name={img12}/>
        </div>
        <div className="margin_bottom">
            <Thumbnail title="image 1"  number="001" name={img13}/>
        </div>
        <div className="margin_top">
            <Thumbnail title="image 1"  number="001" name={img15}/>
        </div>
    </section>
    );
};

export default highlights;
