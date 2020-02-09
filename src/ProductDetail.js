import React from "react";
import Product from "./Product";
import IngredientList from "./IngredientList";
import IngredientListItem from "./IngredientListItem";

function ProductDetail(props) {
   const {hops, malt} = props.data.ingredients, 
      method = Object.entries(props.data.method).map((method, index) => {
         const name = method[0], 
            methodValue = method[1],
            data = {
               name: name
            };

         if(methodValue) {
            if (Array.isArray(methodValue)) {
               data['temp'] =  methodValue[0].temp;
               data['duration'] = methodValue[0].duration;
            } else {
               data['temp'] =  methodValue.temp;
               data['duration'] = methodValue.duration;
            }
         }
         
         return <IngredientListItem key={index} data={data} /> 
      });


   return (
      <div>
         <p onClick={props.toggle}>Go Back</p>
         <Product {...props.data} />
         <IngredientList title="Hops" ingredients={hops}/>
         <IngredientList title="Malts" ingredients={malt}/>
         <div>
            <h3>Methods</h3>
            {method}
         </div>
      </div>
   )
}

export default ProductDetail;