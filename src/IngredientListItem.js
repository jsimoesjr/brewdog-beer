import React from "react";
import Button from "./Button";

function IngredientListItem(props) {
    const {checkPreviousItems, id} = props,
        {name, amount, temp, duration, add} = props.data,
        {value, unit} = amount || temp || {};
        
    return (
        <div className='ingredient-list-item'>
            <div className='left'>
                <div className='name'>{name}</div>
                <div className='amount' style={{disdivlay:(!value || !unit) && 'none'}}>{`${value} ${unit}`}</div>
            </div>
            <div className='right'>
                <Button duration={duration} id={id} add={add} checkPreviousItems={checkPreviousItems}/>
            </div>
            <div className='float-reset'></div>
        </div>
    );
}

export default IngredientListItem;