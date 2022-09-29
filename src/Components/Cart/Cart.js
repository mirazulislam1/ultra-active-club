import React from 'react';
import './Cart.css'
import logo from '../Cart/mark.png'
const Cart = (props) => {
    // console.log(props)
    const {cart} = props;
    let totalTime = 0;
    for(const equipment of cart){
         totalTime = totalTime + equipment.time;
        //  console.log(totalTime)

    }
    return (
        <div className=' cart-container m-4'>
           <div className='d-flex justify-content-center align-items-center'>
                <div><img className='w-75' src={logo} alt="" /></div>
               <div> 
               <h4 className='fs-5'>Mark-zuckerberg</h4>
               <p>White Plains, New York</p>
               </div>
            </div>
            <section  className='d-flex justify-content-around mt-4 cart'>
                <div>
                <h4>70<span className='fs-6'>kg</span></h4>
                <p>Weight</p>
                </div>
                <div>
                <h4>1.71<span className='fs-6'>m</span></h4>
                <p>Height</p>
                </div>
                <div>
                <h4>38<span className='fs-6'>yrs</span></h4>
                <p>Age</p>
                </div>
            </section>
            <section className='mt-4 '>
                <h2 className='mb-4 fs-4'>Add a break</h2>
                <div className='btn-added d-flex justify-content-around btn-carts p-4 rounded-4'>
                <div><button className='border border-0 rounded-4 bg-white'>10s</button></div>
                <div><button className='border border-0 rounded-4 bg-white'>20s</button></div>
                <div><button className='border border-0 rounded-4 bg-white'>30s</button></div>
                <div><button className='border border-0 rounded-4 bg-white'>40s</button></div>
                <div><button className='hover:text-primary border border-0 rounded-4 bg-white'>50s</button></div>
                </div>
            </section>
            <section className='mt-4'>
                <h2 className='fs-4 mb-3'>Exercise Details</h2>
                <div className='d-flex justify-content-between exercise-time mb-4 p-2'>
                <h3 className='fs-5'>Exercise time</h3>
                <p>{totalTime} seconds</p>
                </div>
                <div className='d-flex justify-content-between exercise-time mb-4 p-2'>
                <h3 className='fs-5'>Break time</h3>
                <p> seconds</p>
                </div>
            </section>
            <button className='w-100 border border-0 rounded-4 pt-2 active-btn'>
                <p className='fs-5 text-white'>Activity Completed</p>
            </button>
           </div> 
        
    );
};

export default Cart;