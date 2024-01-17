import React from 'react';

function Product(props) {
    return (
        <div>
            <h2>Product Name: {props.ProductName}</h2>
            <p>Product Price: ${props.ProductPrice}</p>
        </div>
    );
}

export default Product;
