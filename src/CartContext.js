import React, { createContext, useState } from 'react';

export const CartContext = createContext({}); 

export const CartProvider = props => {
    const [cart, setCart] = useState([]);
    const [totalItems, setTotalItems] = useState();
    return (
        <CartContext.Provider value={{ cartArr: [cart, setCart], totalItemsValue: [totalItems, setTotalItems]}}>
            {props.children}
        </CartContext.Provider>
    );
}
