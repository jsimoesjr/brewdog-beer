import React from "react";
import IngredientListItem from "./IngredientListItem";

class IngredientList extends React.Component {
    // Check whether previous ingredients are already DONE
    checkPreviousItems = id => {
        const { ingredients } = this.state,
            { add } = ingredients[id];

        let hasUndoneIngredients = false;
        for (let i = 0; i < id; i++) {
            if (!ingredients[i].done && ingredients[i].add !== add) {
                hasUndoneIngredients = true;
            }
        }

        if (!hasUndoneIngredients) {
            ingredients[id].done = true;
            this.setState({
                ingredients: ingredients
            })
        }


        return hasUndoneIngredients;
    }

    constructor(props) {
        super(props);
        const { ingredients } = this.props,
            ingredientList = ingredients.filter(ingredient => {
                const { add, name } = ingredient;

                return { name: name, add: add, done: false };
            });

        this.state = {
            ingredients: ingredientList
        };
    }

    render() {
        const { title, ingredients } = this.props,
            ingredientsItems = ingredients.map((ingredient, index) => (<IngredientListItem key={index} id={index} data={ingredient} checkPreviousItems={this.checkPreviousItems} />));

        return (
            <div className='display-info display-info-background ingredient-list'>
                <h3>{title}</h3>
                <div>
                    {ingredientsItems}
                </div>
            </div>
        );
    }
}

export default IngredientList;
// import React from "react";
// import IngredientListItem from "./IngredientListItem";

// function IngredientList(props) {
//     const {title, ingredients} = props,
//         ingredientsItems = ingredients.map((ingredient, index) => (<IngredientListItem key={index} data={ingredient} />));

//     return (
//         <div className='display-info display-info-background ingredient-list'>
//             <h3>{title}</h3>
//             <div>
//                 {ingredientsItems}
//             </div>
//         </div>
//     );
// }

// export default IngredientList;