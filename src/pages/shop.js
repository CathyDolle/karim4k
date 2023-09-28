import React from 'react';
import Header from './../components/Header.jsx'
import Footer from './../components/Footer.jsx'
import Thumbnail from './../components/Thumbnail.jsx'
import img1 from './../img/1.jpg'

const shop = () => {
    return (
        <div>
            <Header/>
            <section className="shop">
            <h1>Coming soon</h1>
            <Thumbnail title="image 1"  number="001" name={img1}/>
            </section>
            <Footer/>
        </div>
    );
}

export default shop;