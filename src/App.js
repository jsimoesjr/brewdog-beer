import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { util } from './global/Util';

import Loading from './Loading';
import BeerGrid from './BeerGrid';
import BeerDetail from './BeerDetail';

class App extends React.Component {
    state = {
        loading: false,
        data: []
    }

    componentDidMount() {
        this.setState({ loading: true });
        fetch(util.getURL())
            .then(response => response.json())
            .then(data => this.setState({ loading: false, data: data }));
    }

    render() {
        return (
            this.state.loading
                ? <div><Loading loading={this.state.loading} /></div>
                : <div>
                    <Switch>
                        <Route exact path='/'>
                            <BeerGrid data={this.state.data} />
                        </Route>
                        <Route path='/beers/:beerId' component={BeerDetail} />
                    </Switch>
                </div>
        );
    }
}

export default App;