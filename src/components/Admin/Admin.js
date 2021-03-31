import { Button } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css'
import AddProduct from '../AddProduct/AddProduct';
import { useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';

const Admin = () => {
    const [toggle, setToggle] = useState(1);
 
    return (
        <div className="row mt-2">
            <div className="col-md-2 side-bar">
                <Button onClick={() => setToggle(2)} variant="primary" block>Manage Product</Button>
                <Button onClick={() => setToggle(1)} variant="primary" block>Add Product</Button>
            </div>
            <div className="col-md-8">
                <h4>Add Product</h4>
                {
                    toggle === 1 ? <AddProduct /> : <ManageProduct />
                }                
            </div>
        </div>
    );
};

export default Admin;