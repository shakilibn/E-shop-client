import React from 'react';
import './Product.css';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Product = (props) => {
    const { _id, name, price, imageURL } = props.product;

    return (
        <div className="col-md-3 my-3">
            <div className="d-flex justify-content-center">
                <Card style={{ width: '18rem' }}>
                    <Card.Img style={{ height: '280px' }} variant="top" src={imageURL} />
                    <Card.Body>
                        <Card.Title className="text-center">{name}</Card.Title>
                        <div className="d-flex justify-content-between">
                            <h2 className="d-inline text-color">${price}</h2>
                            <Button as={Link} to={`product/${_id}`} className="d-inline color-btn">Buy Now</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Product;