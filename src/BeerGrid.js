import React from 'react';
import { Link } from 'react-router-dom';
import Beer from './Beer';

function BeerGrid(props) {
    const { data } = props,
        products = data.map(product => {
            const { id } = product;

            return (
                <Link key={id} to={`/beers/${id}`}>
                    <Beer {...product} displayInfoclass='beer-info-grid' />
                </Link>
            );
        })

    return (
        <div>
            {products}
        </div>
    )
}

export default BeerGrid;