import React from 'react';
import DetailsModal from '../Modal/DetailsModal';
import "./Product.css";

const Product = ({ product, increaseCount, decreaseCount }) => {
    const { title, image, price } = product;
    return (
        <div data-aos="zoom-in" className='col-md-4'>
            <div className='card m-2'>
                <img src={image} alt="" className='w-50 m-auto image' />
                <h5 >{title.slice(0, 10)}</h5>
                <h6 >{price}$</h6>
                <div className="button-container m-2">
                    <button onClick={increaseCount} className='btn btn-success mx-2'>Add to Cart</button>
                    <button onClick={decreaseCount} className='btn btn-danger mx-2'>Delete</button>
                    <DetailsModal product={product} />
                </div>
            </div>
        </div>
    );
};

export default Product;