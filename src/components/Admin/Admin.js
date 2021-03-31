import { Button } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css'
import AddProduct from '../AddProduct/AddProduct';
import { useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTasks } from '@fortawesome/free-solid-svg-icons'

const Admin = () => {
    const [toggle, setToggle] = useState(true);
 
    return (
        <div className="row mt-2 admin-container">
            <div className="col-md-2 side-bar">
                <Button onClick={() => setToggle(false)} className="mt-3 mb-3" variant="primary" block><FontAwesomeIcon icon={faTasks} /> Manage Product</Button>
                <Button onClick={() => setToggle(true)} variant="primary" block><FontAwesomeIcon icon={faPlus} /> Add Product</Button>
            </div>
            <div className="col-md-8">
                {
                    toggle ? <AddProduct /> : <ManageProduct />
                }                
            </div>
        </div>
    );
};

export default Admin;