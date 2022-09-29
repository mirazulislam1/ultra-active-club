import React from 'react';
import './Equipment.css'
const Equipment = props => {
    const {img,name,body,Forage,time} = props.equipment
    return (
        <div className='equipment-component'>
            <img src={img} alt="" />
            <div>
                <p className='title'>{name}</p>
                <p>{body.slice(0, 80)}...</p>
                <p className='for-age'>For-Age : {Forage}</p>
                <p className='time'>Time : {time}s</p>
            </div>
        </div>
    );
};

export default Equipment;