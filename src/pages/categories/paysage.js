import React, { useState } from 'react';
import Modale from '../../components/Modale.jsx'
import Footer from '../../components/Footer.jsx'
import Thumbnail from '../../components/Thumbnail.jsx'

import img1 from '../../img/Paysage/Annecy.jpg'
import img2 from '../../img/Paysage/Annecy(1).jpg'
import img3 from '../../img/Paysage/Annecy(2).jpg'
import img4 from '../../img/Paysage/Annecy(3).jpg'
import img6 from '../../img/Paysage/Annecy(5).jpg'
import img7 from '../../img/Paysage/Annecy(6).jpg'
import img8 from '../../img/Paysage/Annecy(7).jpg'
import img9 from '../../img/Paysage/Annecy(8).jpg'
import img10 from '../../img/Paysage/Annecy(9).jpg'
import img11 from '../../img/Paysage/Yosemite(1).jpg'
import img12 from '../../img/Paysage/Yosemite(2).jpg'
import img13 from '../../img/Paysage/Yosemite(3).jpg'

import GridFilter from '../../components/GridFilter.jsx';
import { NavLink } from 'react-router-dom';





const Tokyo = () => {
    const [img, setImg] = useState(null);
    const [gridClass, setGridClass] = useState("size2");

    return (
        <div>
            <div className="heading">
            <nav>
                <NavLink className="big" to='/paysage'>Paysage</NavLink>
                <NavLink to='/night'>night</NavLink>
                <NavLink to='/travel'>travel</NavLink>
                <NavLink to='/portrait'>portrait</NavLink>
                <NavLink to='/street'>street</NavLink>
            </nav>
            
            <GridFilter gridClass={gridClass} setGridClass={setGridClass}/>
        </div>
        <section className={"category " + gridClass}>
            <Thumbnail onClick={()=> setImg(img1)} title="Annecy"  number="01" name={img1}/>
            <Thumbnail onClick={()=> setImg(img2)} title="Annecy"  number="02" name={img2}/>
            <Thumbnail onClick={()=> setImg(img6)} title="Annecy"  number="06" name={img6}/>
            <Thumbnail onClick={()=> setImg(img7)} title="Annecy"  number="07" name={img7}/>
            <Thumbnail onClick={()=> setImg(img8)} title="Annecy"  number="08" name={img8}/>
            <Thumbnail onClick={()=> setImg(img9)} title="Annecy"  number="09" name={img9}/>
            <Thumbnail onClick={()=> setImg(img10)} title="Annecy"  number="10" name={img10}/>
            <Thumbnail onClick={()=> setImg(img11)} title="Yosemite"  number="11" name={img11}/>
            <Thumbnail onClick={()=> setImg(img12)} title="Yosemite"  number="12" name={img12}/>
            <Thumbnail onClick={()=> setImg(img13)} title="Yosemite"  number="13" name={img13}/>
            <Thumbnail onClick={()=> setImg(img3)} title="Annecy"  number="03" name={img3}/>
            <Thumbnail onClick={()=> setImg(img4)} title="Annecy"  number="04" name={img4}/>
            <Modale closeModale={() => setImg(null)} img={img}/>
        </section>
        <Footer/>
        </div>
    );
};

export default Tokyo;