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
        <>
            <div className="introduction">
                <h1 className="mb-3">E-Shop</h1>
                <h5  className="mb-3">Largest Online Market Place</h5>
                <p>Purchase your product from online and get within 24 hours</p>
            </div>

            <div className="row home-container">
                {
                    loading ? <Spinner className="loading-spinner" animation="border" variant="dark" /> :
                        products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </>
    );
};

export default Home;