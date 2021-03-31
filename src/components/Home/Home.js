import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Product from '../Product/Product';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://safe-sierra-55799.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
    }, [products])

    return (
        <div className="row">
            {
                loading ? <Spinner className="loading-spinner" animation="border" variant="dark" /> :
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
        </div>
    );
};

export default Home;