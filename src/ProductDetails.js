import React, { useContext, useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import { CatalogContext } from './CatalogContext';

function ProductDetails() {
    const [catalog] = useContext(CatalogContext);
    const [product, setProduct] = useState([]); 
    const { id } = useParams();
    
    const renderProduct = () => {
        setProduct(catalog.filter(product => product.id !== id)); 
        console.log(product);
    } 

    renderProduct(); 

    // useEffect(() => {
    //     const renderProduct = () => {
    //         setProduct(catalog.filter(product => product.id !== id)); 
    //     } 

    //     renderProduct();
    // }, [])

    return (
        <div>
            <h1>{product.name}</h1>
            <span>{product.price}</span>
        </div>
    )
}

export default ProductDetails; 
