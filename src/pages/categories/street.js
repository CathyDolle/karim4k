import React, { useState } from 'react';
import Header from '../../components/Header.jsx'
import Modale from '../../components/Modale.jsx'
import Footer from '../../components/Footer.jsx'
import Thumbnail from '../../components/Thumbnail.jsx'

import img1 from '../../img/Street/Bruxelles22(1).jpg'
import img2 from '../../img/Street/Bruxelles22(2).jpg'
import img3 from '../../img/Street/Bruxelles22(3).jpg'
import img4 from '../../img/Street/Bruxelles22(4).jpg'
import img5 from '../../img/Street/Bruxelles22.jpg'
import img6 from '../../img/Street/Flower.jpg'
import img7 from '../../img/Street/Paris2023.jpg'
import img8 from '../../img/Street/Paris22(1).jpg'
import img9 from '../../img/Street/Paris22.jpg'
import img10 from '../../img/Street/Paris23(1).jpg'
import img11 from '../../img/Street/Paris23(2).jpg'
import img12 from '../../img/Street/Paris23.jpg'
import img13 from '../../img/Street/Rotterdam2022(1).jpg'
import img14 from '../../img/Street/Rotterdam2022(2).jpg'
import img15 from '../../img/Street/Rotterdam2022(3).jpg'
import img16 from '../../img/Street/Rotterdam2022(4).jpg'
import img17 from '../../img/Street/Rotterdam2022(5).jpg'
import img18 from '../../img/Street/Rotterdam2022(6).jpg'
import img19 from '../../img/Street/Rotterdam2022(7).jpg'
import img20 from '../../img/Street/Rotterdam2022.jpg'
import img21 from '../../img/Street/SanFrancisco2022(1).jpg'
import img22 from '../../img/Street/SanFrancisco2022.jpg'
import img23 from '../../img/Street/SantaCruz2022(1).jpg'
import img24 from '../../img/Street/SantaCruz2022.jpg'


import GridFilter from '../../components/GridFilter.jsx';
import { NavLink } from 'react-router-dom';





const Street = () => {
    const [img, setImg] = useState(null);
    const [gridClass, setGridClass] = useState("size2");

    return (
        <div>
        <Header/>
        <div className="heading">
            <nav>
                <NavLink className="big" to='/street'>Photo de rue</NavLink>
                <NavLink to='/night'>night</NavLink>
                <NavLink to='/travel'>travel</NavLink>
                <NavLink to='/portrait'>portrait</NavLink>
                <NavLink to='/paysage'>paysage</NavLink>
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
            <Thumbnail onClick={()=> setImg(img7)} title="Annecy"  number="07" name={img7}/>
            <Thumbnail onClick={()=> setImg(img8)} title="Annecy"  number="08" name={img8}/>
            <Thumbnail onClick={()=> setImg(img9)} title="Annecy"  number="09" name={img9}/>
            <Thumbnail onClick={()=> setImg(img10)} title="Annecy"  number="10" name={img10}/>
            <Thumbnail onClick={()=> setImg(img11)} title="Yosemite"  number="11" name={img11}/>
            <Thumbnail onClick={()=> setImg(img12)} title="Yosemite"  number="12" name={img12}/>
            <Thumbnail onClick={()=> setImg(img13)} title="Yosemite"  number="13" name={img13}/>
            <Thumbnail onClick={()=> setImg(img14)} title="Yosemite"  number="13" name={img14}/>
            <Thumbnail onClick={()=> setImg(img15)} title="Yosemite"  number="13" name={img15}/>
            <Thumbnail onClick={()=> setImg(img16)} title="Yosemite"  number="13" name={img16}/>
            <Thumbnail onClick={()=> setImg(img17)} title="Yosemite"  number="13" name={img17}/>
            <Thumbnail onClick={()=> setImg(img18)} title="Yosemite"  number="13" name={img18}/>
            <Thumbnail onClick={()=> setImg(img19)} title="Yosemite"  number="13" name={img19}/>
            <Thumbnail onClick={()=> setImg(img20)} title="Yosemite"  number="13" name={img20}/>
            <Thumbnail onClick={()=> setImg(img21)} title="Yosemite"  number="13" name={img21}/>
            <Thumbnail onClick={()=> setImg(img22)} title="Yosemite"  number="13" name={img22}/>
            <Thumbnail onClick={()=> setImg(img23)} title="Yosemite"  number="13" name={img23}/>
            <Thumbnail onClick={()=> setImg(img24)} title="Yosemite"  number="13" name={img24}/>
            <Modale closeModale={() => setImg(null)} img={img}/>
        </section>
        <Footer/>
        </div>
    );
};

export default Street;