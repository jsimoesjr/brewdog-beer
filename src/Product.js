import React from "react";
import './Product.css';

function Product(props) {
   const {name, description, image_url, abv} = props;

   return (
      <div className='product'>
         <div className='product-image'>
            <img src={image_url} alt={name} />
         </div>
         <div className='product-info'>
            <h3>{name}</h3>
            <i>ABV: {abv}</i>
            <p>{description}</p>
         </div>
      </div>
   )
}

export default Product;