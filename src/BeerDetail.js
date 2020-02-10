import React from "react";
import { Link } from 'react-router-dom';


import { util } from './global/Util';

import Beer from "./Beer";
import IngredientList from "./IngredientList";
import Loading from './Loading';

class BeerDetail extends React.Component {
    state = {
        data: {
            ingredients: {
                hops: [],
                malt: [],
            },
            method: {}
        },
        loading: false
    }

    componentDidMount() {
        const { beerId } = this.props.match.params;

        this.setState({ loading: true });
        fetch(util.getURL({ id: beerId }))
            .then(response => response.json())
            .then(([data]) => this.setState({ loading: false, data: data }));
    }

    // Format methods to match Hops and Malt structure
    retrieveMethods = () => {
        return Object.entries(this.state.data.method).map((method, index) => {
            const name = method[0],
                methodValue = method[1],
                data = {
                    name: name
                };

            if (methodValue) {
                if (Array.isArray(methodValue)) {
                    data['temp'] = methodValue[0].temp;
                    data['duration'] = methodValue[0].duration;
                } else {
                    data['temp'] = methodValue.temp;
                    data['duration'] = methodValue.duration;
                }
            }

            return data;
        });
    }

    render() {
        const { hops, malt } = this.state.data.ingredients,
            methods = this.retrieveMethods();

        return (
            this.state.loading
                ? <div><Loading /></div>
                : <div>
                    <div className='display-info'>
                        <Link to='/'>Go Back</Link>
                    </div>
                    <Beer {...this.state.data} displayInfoclass='beer-info-expanded' />
                    <IngredientList title="Hops" ingredients={hops} />
                    <IngredientList title="Malts" ingredients={malt} />
                    <IngredientList title="Methods" ingredients={methods} />
                </div>)
    }
}

export default BeerDetail;