import React from 'react';

const ProductDetails = async ({value}) => {
    console.log(value);
    return (
        <div>
            <li>{value.name}</li>
            <li>{value.price}</li>
        </div>
    );
};

export default ProductDetails;