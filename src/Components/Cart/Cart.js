import React from 'react';
import './Cart.css'
import logo from '../Cart/mark.png'
const Cart = () => {
    return (
        <div className='cart'>
           <img src={logo} alt="" />
           <div>
            <h3>Mark-zuckerberg</h3>
            <p>White Plains, New York</p>
           </div> 
        </div>
    );
};

export default Cart;