import React, { useContext, useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { CartContext } from './CartContext';

function Shop() {
    const [catalog] = useState([
        {
            id: 1,
            name: 'Figurine',
            price: 24.99,
            quantity: 1,
        },
        {
            id: 2,
            name: 'Toy Robot',
            price: 39.99,
            quantity: 1,
        },
        {
            id: 3,
            name: 'Teddy Bear',
            price: 19.99,
            quantity: 1,
        },
        {
            id: 4,
            name: 'Unicorn Plush',
            price: 19.99,
            quantity: 1,
        },
    ]);

    const {cartArr, totalItemsValue} = useContext(CartContext);
    const [cart, setCart] = cartArr;
    const [totalItems, setTotalItems] = totalItemsValue;

    useEffect(() => {
        const total = () => {
            const total = cart.reduce((total, product) => product.quantity + total, 0);
            setTotalItems(total);
        }

        total();
    }, [cart, setTotalItems, totalItems]);

    const addToCart = (e) => {
        const productId = parseInt(e.target.value);
        let product = catalog.filter(product => {
            return product.id === productId;
        });

        // pushes product into cart and sets new state of cart
        if (cart.length === 0) {
            setCart(product);
        } else {
            // if there are duplicates in cart
            if (hasProduct(productId) === true) {
                const newCart = [...cart]; 
                product = newCart.filter(product => {
                    return product.id === productId;
                });
                // increment quantity by one
                product[0].quantity += 1; 
                setCart(newCart); // set newCart array as the new cart state
            } else setCart(prevCart => [...prevCart, product[0]]);
        }
    }

    const hasProduct = (productId) => {
        const hasProduct = cart.some(product => product.id === productId);
        return hasProduct;
    }

    const viewCart = () => {
        console.log(cart);
    }

    return (
        <React.Fragment>
            <h1>Shop</h1>
            <span># of items in cart: {totalItems}</span>
            <ul className='product-list'>
                {catalog.map(product => {
                    return (
                        <li key={product.id}>
                            <div className='product-container'>
                                <h1>{product.name}</h1>
                                <span>{product.price}</span>
                                <button value={product.id} onClick={addToCart}>Add To Cart</button>
                            </div>
                        </li>
                    )
                })}
            <button onClick={viewCart}>View Cart</button>
            </ul>
        </React.Fragment>
    );
}

export default Shop;