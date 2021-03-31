import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {_id, name, price, imageURL } = props.product;

    const deleteProduct = id => {
        fetch(`https://safe-sierra-55799.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <div className="col-md-3 my-3">
            <Card style={{ width: '18rem' }}>
                <Card.Img style={{ height: '280px'}} variant="top" src={imageURL} />
                <Card.Body>
                    <Card.Title className="text-center">{name}</Card.Title>
                    <div className="d-flex justify-content-between">
                        <h2 className="d-inline">${price}</h2>
                        <Button as={Link} to={`product/${_id}`} className="d-inline" variant="primary">Buy Now</Button>
                        <button onClick={() => deleteProduct(_id)}>delete</button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;