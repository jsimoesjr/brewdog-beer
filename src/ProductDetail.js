import React from "react";
import Product from "./Product";
import IngredientList from "./IngredientList";
import './ProductDetail.css'

function ProductDetail(props) {
   const {hops, malt} = props.data.ingredients,
      {method} = props.data;
   console.log(hops);
   console.log(malt);
   console.log(method);
   return (
      <div className='product-detail'>
         <p onClick={props.toggle}>Go Back</p>
         <Product {...props.data} />
         <IngredientList title="Hops" ingredients={hops}/>
         <IngredientList title="Malts" ingredients={malt}/>
      </div>
   )
}

export default ProductDetail;