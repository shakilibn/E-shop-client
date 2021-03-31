import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderDetails from '../OrderDetails/OrderDetails';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(()=>{
        fetch(`https://safe-sierra-55799.herokuapp.com/orders?email=`+loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    console.log(orders);
    
    return (
        <div>
            {
                (orders.length) && 
                <div>
                    <h5>User Name : {orders[0].name}</h5>
                    <h5>User Email : {orders[0].email}</h5>
                </div>
            }
            {
                orders.map(order => <OrderDetails key={order._id} order={order} />)
            }
        </div>
    );
};

export default Orders;