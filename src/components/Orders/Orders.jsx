import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../../ReviewItem/ReviewItem';
import './Orders.css'
import { removeFromDb } from '../../../utilities/fakedb';

const Orders = () => {
    const saveCart = useLoaderData();

    const [cart, setCart] = useState(saveCart);

    const removeProductFromCart = (id)=>{
        const remainning= cart.filter(product => product.id !== id)
        setCart(remainning)
        removeFromDb(id)
    }
    
    return (
        <div className='shop-container'>
           <div className="review-container">
           {
            saveCart.map(product => <ReviewItem 
            key={product.div}
            product={product}
            removeProductFromCart= {removeProductFromCart}
            ></ReviewItem>)
           }
           </div>
           <div className="cart-container">
            <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Orders;