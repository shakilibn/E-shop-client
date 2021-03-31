import React, { useContext, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import './CheckOut.css'

const CheckOut = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`https://safe-sierra-55799.herokuapp.com/product/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId])

    const { name, price, weight } = product;

    const handleCheckOut = () => {
        const orderDetails = { ...loggedInUser, product, orderTime: new Date() };

        fetch('https://safe-sierra-55799.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('checked out successfully');
                }
            })
    }

    return (
        <div className="checkout-container">
            <div className="checkout-area">
                
                <h3 className=" mt-3 mb-5">CheckOut</h3>

                <Table striped hover size="sm">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Weight</th>
                            <th scope="col">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">{name}</td>
                            <td>{price}</td>
                            <td>{weight}</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </Table>

                <div className="checkout-btn">
                    <Button className="mt-3" onClick={handleCheckOut}>CheckOut</Button>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;