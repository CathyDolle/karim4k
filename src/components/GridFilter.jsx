import React from 'react';
import icon1 from './../img/Icons/size1.svg'
import icon2 from './../img/Icons/size2.svg'
import icon3 from './../img/Icons/size3.svg'



function GridFilter(props) {
    return (
        <div className="grid_filter">
            <img className={props.gridClass === 'size1' ? 'active' : ''} onClick={()=>props.setGridClass('size1')} src={icon1} alt="icon"/>
            <img className={props.gridClass === 'size2' ? 'active' : ''} onClick={()=>props.setGridClass('size2')} src={icon2} alt="icon"/>
            <img className={props.gridClass === 'size3' ? 'active' : ''} onClick={()=>props.setGridClass('size3')} src={icon3} alt="icon"/>
        </div>
    );
}

export default GridFilter;