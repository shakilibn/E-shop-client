import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {

        const productInfo = {
            name:data.name,
            price:data.price,
            weight:data.weight,
            imageURL:imageURL
        }

        const url = `https://safe-sierra-55799.herokuapp.com/addProduct`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
        .then(res => console.log("server side response"))
    };

    const handleImageUpload = event => {

        const imageData = new FormData();
        imageData.set('key', 'd8bcaccb149b8e228209e2a29aa2da25');
        imageData.append('image',event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div>
            <h4 className="mb-4">Add Product</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Product Name </label>
                <input className="form-control" name="name" id="name" ref={register} placeholder="product name" /><br />

                <label htmlFor="weight">Product Weight </label>
                <input className="form-control" name="weight" id="weight" ref={register} placeholder="product weight" /><br />

                <label htmlFor="price">Product Price </label>
                <input className="form-control" name="price" id="price" ref={register} placeholder="product price" /><br />

                <input className="mb-3" name="uploadedFile" type="file" onChange={handleImageUpload} ref={register} /><br />

                <input className="submit-btn bg-primary" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;