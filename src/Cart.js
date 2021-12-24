import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from './CartContext';

function Cart() {
    const {cartArr, totalItemsValue} = useContext(CartContext);
    const [cart] = cartArr;
    const [totalItems] = totalItemsValue;
    const [totalPrice, setTotalPrice] = useState(0); 

    useEffect(() => {
        const total = () => {
            const cartTotal = cart.reduce((total, product) => (product.price * product.quantity) + total, 0);
            setTotalPrice(cartTotal); 
        }

        total(); 
    }, [cart]);

    return (
        <React.Fragment>
            <h1>Cart</h1>
            <h2>{totalItems} items in your cart</h2>
            <ul className='cart-container'>
                {cart.map(product => {
                    return (
                        <li key={product.id}>
                            <div className='product-container'>
                                <span>{product.id}</span>
                                <h3>{product.name}</h3>
                                <span>{product.price}</span>
                                <span>{product.quantity}</span>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <span>Cart Total: {totalPrice}</span>
        </React.Fragment>
    );
}

export default Cart; 