import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://safe-sierra-55799.herokuapp.com/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setLoading(false);
        })
    },[products])

    const deleteProduct = id => {
        fetch(`https://safe-sierra-55799.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    const handleEdit = () => {
        console.log("edit clicked");
    }

    return (
        <div>
            {
                loading ? <Spinner className="loading-spinner" animation="border" variant="dark" /> :
                <Table striped hover size="sm">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <tr>
                         <td>{product.name}</td>
                         <td>{product.weight}</td> 
                         <td>{product.price}</td> 
                         <td><FontAwesomeIcon onClick={handleEdit} className="mr-3 bg-white text-success fa-1x" icon={faEdit} />
                             <FontAwesomeIcon onClick={() => deleteProduct(product._id)} className="bg-white text-danger" icon={faTrashAlt} /></td>
                         </tr>)
                    }
                </tbody>
            </Table>
            }
        </div>
    );
};

export default ManageProduct;