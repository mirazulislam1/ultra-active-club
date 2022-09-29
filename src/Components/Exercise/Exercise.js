import React, { useEffect, useState } from 'react';
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
            <div className='exercise-container'>
            {
                equipments.map(equipment => console.log(equipment))
            }
            </div>
            <div className='cart-container'>
            <h1>add a break</h1>
            </div>
        </div>
    );
};

export default Exercise;