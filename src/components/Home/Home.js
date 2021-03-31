import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://safe-sierra-55799.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[products])

    return (
        <div className="row">
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
        </div>
    );
};

export default Home;