import React from 'react';
import { useState, useEffect } from 'react';
import { Blurhash } from "react-blurhash";

function Thumbnail(thumb) {
    const[imgLoaded, setImgLoaded] = useState(false)

    useEffect(() =>{
        const img = new Image()
        img.onload = () =>{
            setImgLoaded(true)
        }
        img.src = thumb.name
    }, [thumb.name])

    return (
        <div onClick={thumb.onClick} className="thumbnail">
            <>
                <div style={{ display: imgLoaded ? 'none' : 'inline'}}>
                    <Blurhash
                        hash="L1O|b2-;fQ-;_3fQfQfQfQfQfQfQ"
                        width='100%'
                        height='100%'
                        resolutionX={32}
                        resolutionY={32}
                        punch={1}
                    />
                </div>
                <img style={{ display: !imgLoaded ? 'none' : 'inline'}}className={thumb.class} loading="lazy" src={thumb.name} alt="img"/>
            </>
            <div className="infos">
                <p>{thumb.title}</p>
                <p>{thumb.number}</p>
            </div>
        </div>
    );
}

export default Thumbnail;

