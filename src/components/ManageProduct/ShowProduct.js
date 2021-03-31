import React from 'react';
import { Table } from 'react-bootstrap';

const ShowProduct = (props) => {
    const { _id, name, price, weight, imageURL } = props.product;

    const deleteProduct = id => {
        fetch(`https://safe-sierra-55799.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }



    return (
        <div>
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <td>{name}</td>                        
                        <td>{price}</td>                        
                        <td>{weight}</td>              
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default ShowProduct;