import React from 'react';
import ProductListItem from './ProductListItem';

function ProductList (props) {
   const{data, toggle} = props, 
      products = data.map(product => {
         const {id} = product;

         return <ProductListItem key={id} toggle={toggle} data={product} />
      })

   return (
      <div>
         {products}
      </div>
   )
}

export default ProductList;