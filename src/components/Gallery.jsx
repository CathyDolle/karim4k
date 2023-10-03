import React, { useState } from 'react';
import Modale from '../components/Modale.jsx'
import Thumbnail from '../components/Thumbnail.jsx'
import { NavLink } from 'react-router-dom';

import img1 from '../img/Night/Bruxelles2022(1).jpg'
import img2 from '../img/Night/Bruxelles2022.jpg'
import img3 from '../img/Night/Paris2023.jpg'
import img4 from '../img/Night/Rotterdam(1).jpg'
import img5 from '../img/Night/Rotterdam(2).jpg'
import img6 from '../img/Night/Rotterdam(3).jpg'

import GridFilter from '../components/GridFilter.jsx';




const Gallery = () => {
    const [img, setImg] = useState(null);
    const [gridClass, setGridClass] = useState("size2");

    return (
        <div>
        <div className="heading">
            <nav>
                <NavLink className="big" to='/night'>Photo de nuit</NavLink>
                <NavLink to='/paysage'>landscape</NavLink>
                <NavLink to='/travel'>travel</NavLink>
                <NavLink to='/portrait'>portrait</NavLink>
                <NavLink to='/street'>street</NavLink>
            </nav>
            
            <GridFilter gridClass={gridClass} setGridClass={setGridClass}/>
        </div>
        <section className={"category " + gridClass}>
            <Thumbnail onClick={()=> setImg(img1)} title="Annecy"  number="01" name={img1}/>
            <Thumbnail onClick={()=> setImg(img2)} title="Annecy"  number="02" name={img2}/>
            <Thumbnail onClick={()=> setImg(img3)} title="Annecy"  number="03" name={img3}/>
            <Thumbnail onClick={()=> setImg(img4)} title="Annecy"  number="04" name={img4}/>
            <Thumbnail onClick={()=> setImg(img5)} title="Annecy"  number="05" name={img5}/>
            <Thumbnail onClick={()=> setImg(img6)} title="Annecy"  number="06" name={img6}/>
            <Modale closeModale={() => setImg(null)} img={img}/>
        </section>
        </div>
    );
};

export default Gallery;