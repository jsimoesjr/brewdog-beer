import React from "react";

function IngredientListItem(props) {
    const {name, amount} = props.data,
        {value, unit} = amount;
        
    return (
        <div>
            <b>{name}</b>
            <p>{`${value} ${unit}`}</p>
        </div>
    );
}

export default IngredientListItem;