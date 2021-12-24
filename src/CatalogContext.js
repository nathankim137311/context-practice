import React, { createContext, useState } from 'react';

export const CatalogContext = createContext(); 

export const CatalogProvider = props => {
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
    return (
        <CatalogContext.Provider value={[catalog]}>
            {props.children}
        </CatalogContext.Provider>
    );
}