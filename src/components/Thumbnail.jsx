import React from 'react';

function Thumbnail(thumb) {
    return (
        <div onClick={thumb.onClick} className="thumbnail">
            <img className={thumb.class} src={thumb.name} alt="img"/>
            <div className="infos">
                <p>{thumb.title}</p>
                <p>{thumb.number}</p>
            </div>
        </div>
    );
}

export default Thumbnail;

