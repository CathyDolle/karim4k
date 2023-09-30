import React, { useState } from 'react';
import Modale from '../../components/Modale.jsx'
import Footer from '../../components/Footer.jsx'
import Thumbnail from '../../components/Thumbnail.jsx'

import img1 from '../../img/Travel/cinqueTerre.jpg'
import img2 from '../../img/Travel/cinqueTerre1.jpg'
import img3 from '../../img/Travel/cinqueTerre2.jpg'
import img4 from '../../img/Travel/cinqueTerre3.jpg'
import img5 from '../../img/Travel/cinqueTerre4.jpg'
import img6 from '../../img/Travel/cinqueTerre5.jpg'
import img7 from '../../img/Travel/ostende.jpg'
import img8 from '../../img/Travel/ostende2.jpg'
import img9 from '../../img/Travel/ostende3.jpg'
import img10 from '../../img/Travel/paris.jpg'
import img11 from '../../img/Travel/rotterdam.jpg'
import img12 from '../../img/Travel/rotterdam2.jpg'

import GridFilter from '../../components/GridFilter.jsx';
import { NavLink } from 'react-router-dom';





const Travel = () => {
    const [img, setImg] = useState(null);
    const [gridClass, setGridClass] = useState("size2");

    return (
        <div>
        <div className="heading">
            <nav>
                <NavLink className="big" to='/travel'>Travel</NavLink>
                <NavLink to='/night'>night</NavLink>
                <NavLink to='/paysage'>landscape</NavLink>
                <NavLink to='/portrait'>portrait</NavLink>
                <NavLink to='/street'>street</NavLink>
            </nav>
            
            <GridFilter gridClass={gridClass} setGridClass={setGridClass}/>
        </div>
        <section className={"category " + gridClass}>
            <Thumbnail onClick={()=> setImg(img7)} title="Annecy"  number="07" name={img7}/>
            <Thumbnail onClick={()=> setImg(img8)} title="Annecy"  number="08" name={img8}/>
            <Thumbnail onClick={()=> setImg(img9)} title="Annecy"  number="09" name={img9}/>
            <Thumbnail onClick={()=> setImg(img10)} title="Annecy"  number="10" name={img10}/>
            <Thumbnail onClick={()=> setImg(img11)} title="Yosemite"  number="11" name={img11}/>
            <Thumbnail onClick={()=> setImg(img12)} title="Yosemite"  number="12" name={img12}/>
            <Thumbnail onClick={()=> setImg(img1)} title="Annecy"  number="01" name={img1}/>
            <Thumbnail onClick={()=> setImg(img2)} title="Annecy"  number="02" name={img2}/>
            <Thumbnail onClick={()=> setImg(img3)} title="Annecy"  number="03" name={img3}/>
            <Thumbnail onClick={()=> setImg(img4)} title="Annecy"  number="04" name={img4}/>
            <Thumbnail onClick={()=> setImg(img5)} title="Annecy"  number="05" name={img5}/>
            <Thumbnail onClick={()=> setImg(img6)} title="Annecy"  number="06" name={img6}/>
            <Modale closeModale={() => setImg(null)} img={img}/>
        </section>
        <Footer/>
        </div>
    );
};

export default Travel;