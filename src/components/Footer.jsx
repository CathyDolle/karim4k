import React from 'react';
import twitter from './../img/Icons/twitter.svg'
import instagram from './../img/Icons/instagram.svg'
import mail from './../img/Icons/mail.svg'

const Footer = () => {
    return (
        <footer>
            <nav>
                <a href="https://twitter.com/ImSoFresh_K" target="_blank" rel="noreferrer"><img src={twitter} alt="img"/></a>
                <a href="https://www.instagram.com/karim4kb/" target="_blank" rel="noreferrer"><img src={instagram} alt="img"/></a>
                <a href='mailto:agadowe@gmail.com' target="_blank" rel="noreferrer"><img src={mail} alt="img"/></a>
            </nav>
            {/* <div>
                <p>Design and Dev with ❥ by <a href="https://twitter.com/cathydolle" target="_blank" rel="noreferrer">Katy_v4</a></p>
            </div> */}
        </footer>
    );
};

export default Footer;