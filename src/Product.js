import React from "react";

function Product(props) {
   const {name, description, image_url, abv} = props;

   return (
      <div>
         <div>
            <img height={80} src={image_url} alt={name} />
         </div>
         <div>
            <h3>{name}</h3>
            <i>ABV: {abv}</i>
            <p>{description}</p>
         </div>
      </div>
   )
}

export default Product;