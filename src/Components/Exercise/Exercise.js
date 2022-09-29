import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Equipment from '../Equipment/Equipment';
import logo from '../Exercise/exercise.png'
import './Exercise.css'
const Exercise = () => {
    const [equipments,setEquipments] = useState([]);
    const [cart, setCart] = useState([])
    useEffect( ()=>{
        fetch('exercise.json')
        .then(res =>res.json())
        .then(data =>setEquipments(data))
    }, [])
    const clickHandler = (equipment) =>{
        // console.log(equipment)
        const newCart = [...cart, equipment]
        setCart(newCart)
    }
    return (
      
        <div className='head-container'>
             <div className='row m-4'>
             <div className='col-sm-12 col-md-8'>
                <div>
                <div className='d-flex align-items-center'>
                <img className='image' src={logo} alt="" />
                <h1 className='fs-3 text-success'>New-Power-House-GYM</h1>
               </div>
               <h3 className='mb-4'>Selected today's exercise</h3>
                </div>
             <div class="row row-cols-1 row-cols-md-3 g-4">
             {
                       equipments.map(equipment => 
                       <Equipment 
                        equipment={equipment}
                       key={equipment.id}
                        clickHandler={clickHandler}></Equipment>)
                   }
             </div>
             </div>
             <div className='col-sm-12 col-md-4 cart-container'>
             <Cart cart={cart}></Cart>
             </div>
             </div>
          </div>
        
          
        
    );
};

export default Exercise;
