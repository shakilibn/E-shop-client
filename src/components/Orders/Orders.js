import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import { Spinner, Table } from 'react-bootstrap';
import './Order.css'

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://safe-sierra-55799.herokuapp.com/orders?email=` + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setLoading(false);
            })
    }, [])

    return (
        <div className="orders-container">
            {
                loading ? <Spinner className="loading-spinner" animation="border" variant="dark" /> :
                <>
                    {
                        (orders.length) &&
                        <div className="mt-3 mb-5 d-flex flex-wrap justify-content-between">
                            <div className="">
                                <h3>Your Orders</h3>
                            </div>
                            <div className="">
                                <h6>User Name : {orders[0].name}</h6>
                                <h6>User Email : {orders[0].email}</h6>
                            </div>
                        </div>
                    }
                    <Table striped hover size="sm">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Weight</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                <th scope="col">Order Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => <tr>
                                    <td>{order.product.name}</td>
                                    <td>{order.product.weight}</td>
                                    <td>1</td>
                                    <td>{order.product.price}</td>
                                    <td>{(new Date(order.orderTime)).toDateString('dd/MM/YYYY')}</td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                </>
            }
        </div>
    );
};

export default Orders;