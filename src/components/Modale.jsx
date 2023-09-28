import React, { useEffect } from 'react';

function Modale(props) {
    useEffect(() =>{
        if (props.img){
            document.body.classList.add('hideScrollbar')
        } else {
            document.body.classList.remove('hideScrollbar')
        }
    }, [props.img])
    return (
        <section className={props.img ? "modale show" : "modale hidden"}>
            <img src={props.img} alt="img"></img>
            <button onClick={props.closeModale}>Close</button>
        </section>
    );
}

export default Modale;