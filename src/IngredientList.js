import React from "react";
import IngredientListItem from "./IngredientListItem";

function IngredientList(props) {
    const {title, ingredients} = props,
        ingredientsItems = ingredients.map(ingredient => (<IngredientListItem data={ingredient} />));

    return (
        <div className='ingredient-list'>
            <h3>{title}</h3>
            <div>
                {ingredientsItems}
            </div>
        </div>
    );
}

export default IngredientList;