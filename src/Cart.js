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

    const decrementItem = (e) => {
        const productId = parseInt(e.target.value);
        const index = cart.findIndex(product => product.id === productId);
        
        // copy cart array from state 
        let newCart = [...cart];
        const product = newCart[index];
        if (product.quantity === 1) { // check and delete product from cart
            console.log(`removed ${product.name} from shopping cart`);
            setCart(cart.filter(product => product.id !== productId));
        } 
        else {
            product.quantity -= 1;
            setCart(newCart);
        }
    }

    const incrementItem = (e) => {
        const productId = parseInt(e.target.value);
        const index = cart.findIndex(product => product.id === productId);
        let newCart = [...cart];
        newCart[index].quantity += 1;
        setCart(newCart); 
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
                                <button value={product.id} className='cart-btn' onClick={decrementItem}>-</button>
                                <span>{product.quantity}</span>
                                <button value={product.id} className='cart-btn' onClick={incrementItem}>+</button>
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