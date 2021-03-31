import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import './CheckOut.css'

const CheckOut = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(()=>{
        fetch(`https://safe-sierra-55799.herokuapp.com/product/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[productId])

    const {name, price, weight} = product;

    const handleCheckOut = () => {
        const orderDetails = {...loggedInUser, product, orderTime:new Date()};

        fetch('https://safe-sierra-55799.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('checked out successfully');
            }
        })
    }

    return (
        <div className="checkOut-area">
            <h3>CheckOut</h3>
            <p>Product name : {name}</p>
            <p>Product price : {price}</p>
            <p>Product weight : {name}</p>
            <p>Product Quantity : 1</p>
            <Button onClick={handleCheckOut}>CheckOut</Button>
        </div>
    );
};

export default CheckOut;