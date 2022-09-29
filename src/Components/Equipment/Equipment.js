import React from 'react';
import './Equipment.css'
const Equipment = ({clickHandler,equipment}) => {
    const {img,name,body,Forage,time} = equipment
   
    return (
        
        
  <div class="col">
    <div class="card border border-0 shadow">
      <img src={img} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{body.slice(0, 80)}...</p>
        <p className='for-age'>For-Age : {Forage}</p>
        <p className='time'>Time : {time}s</p>
        <button  onClick={()=>clickHandler(equipment)}  className='btn btn-success btn-cart'>Add to list</button>
      </div>
    </div>

    </div>

    );
};

export default Equipment;
