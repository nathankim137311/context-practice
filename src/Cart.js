import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from './CartContext';

function Cart() {
    const {cartArr, totalItemsValue} = useContext(CartContext);
    const [cart, setCart] = cartArr;
    const [totalItems, setTotalItems] = totalItemsValue;
    const [totalPrice, setTotalPrice] = useState(0); 

    useEffect(() => {
        const totalPrice = () => {
            const total = cart.reduce((total, product) => (product.price * product.quantity) + total, 0);
            setTotalPrice(total); 
        }

        const totalItems = () => {
            const total = cart.reduce((total, product) => product.quantity + total, 0);
            setTotalItems(total);
        }

        totalPrice();
        totalItems(); 
    }, [cart, totalItems, setTotalItems]);

    const removeItem = (e) => {
        const productId = parseInt(e.target.value);
        setCart(cart.filter(product => product.id !== productId));
    }

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
                                <button className='cart-btn'>-</button>
                                <span>{product.quantity}</span>
                                <button className='cart-btn'>+</button>
                                <button value={product.id} onClick={removeItem}>remove</button>
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