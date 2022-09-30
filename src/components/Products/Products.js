import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Products.css";

const Products = ({ increaseCount, decreaseCount }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h3>Our shop products</h3>
            <div className="row">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        increaseCount={increaseCount}
                        decreaseCount={decreaseCount}
                    />)
                }
            </div>
        </div>
    );
};

export default Products;