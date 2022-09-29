import React, { useEffect, useState } from 'react';
import Equipment from '../Equipment/Equipment';
import './Exercise.css'
const Exercise = () => {
    const [equipments,setEquipments] = useState([]);
    useEffect( ()=>{
        fetch('exercise.json')
        .then(res =>res.json())
        .then(data =>setEquipments(data))
    }, [])
    return (
        <div className='exercise'>
           <div>
          <div className='head-container'>
            <h1 className='header'>New-Power-House-GYM</h1>
            <h3>Selected today's exercise</h3>
          </div>
           <div className='exercise-container'>
            
           {
               equipments.map(equipment => <Equipment equipment={equipment}></Equipment>)
           }
           </div>
           </div>
            <div className='cart-container'>
            <h1>add a break</h1>
            </div>
        </div>
    );
};

export default Exercise;