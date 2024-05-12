import React from 'react';
import './Cosmetic.css';
import { addToDb, deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;

    const addToCart = (id) =>{
       addToDb(id);
    }

    const removeFromCart = id => {
        removeFromDb(id);
    }

    // const addToCartWithParam = () => addToCart(id);
    return (
        <div className='product'>
            <h2>This name: {name}</h2>
            <p>Buy This: {price}</p>
            <p><small>This id: {id}</small></p>
            {/* <button onClick={addToCartWithParam}>Add to Cart</button> */}
            <button onClick={()=> addToCart(id)}>Add to Cart : shortCut</button>
            <button onClick={()=> removeFromCart(id)}>Remove</button>
            <button onClick={deleteShoppingCart}>Delete All</button>
        </div>
    );
};

export default Cosmetic;