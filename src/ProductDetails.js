import React, { useContext } from 'react'; 
import { useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { CatalogContext } from './CatalogContext';

function ProductDetails() {
    const [catalog] = useContext(CatalogContext);
    const [product, setProduct] = useState([]); 
    const { id } = useParams();

    const renderProduct = () => {
        setProduct(catalog.filter(product => product.id !== id)); 
    } 

    return (
        <div>
            <h1>{product.name}</h1>
            <span>{product.price}</span>
            {/* <h1>{id}</h1>
            <ul>
                {catalog.map(product => {
                    return (
                        <li key={product.id}>{product.name}</li>
                    )
                })}
            </ul> */}
        </div>
    )
}

export default ProductDetails; 
