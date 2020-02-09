import React from "react";
import Button from "./Button";

function IngredientListItem(props) {
    const {name, amount, temp, duration} = props.data,
        {value, unit} = amount || temp || {};
        
    return (
        <div>
            <b>{name}</b>
            <p style={{display:(!value || !unit) && 'none'}}>{`${value} ${unit}`}</p>
            <Button duration={duration} />
        </div>
    );
}

export default IngredientListItem;