import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ShowProduct from './ShowProduct';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://safe-sierra-55799.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div>
            {
                products.map(product => <ShowProduct key={product._id} product={product} />)
            }
        </div>
    );
};

export default ManageProduct;