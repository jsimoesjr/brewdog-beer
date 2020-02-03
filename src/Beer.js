import React from "react";

function Beer(props) {
   const {name, description, image_url, abv} = props;

   return (
      <div>
         <img style={{ height: 80, width: 80, objectFit: "contain" }} src={image_url} alt={name} />
         <h1>{name}</h1>
         <b>{abv}</b>
         <p>{description}</p>
         <hr></hr>
      </div>
   )
}

export default Beer;