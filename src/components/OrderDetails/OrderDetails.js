import React from 'react';

const OrderDetails = (props) => {
    const {name, weight, price} = props.order.product;
    const {orderTime} = props.order;
    return (
        <div>
            <p>{name} {weight} {price} {(new Date(orderTime)).toDateString('dd/MM/YYYY')}</p>
        </div>
    );
};

export default OrderDetails;