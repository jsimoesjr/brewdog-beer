import React from 'react';
import Product from './Product';

class ProductListItem extends React.Component {
    handleClick = () => {
        this.props.toggle(this.props.data);
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <Product {...this.props.data} />
            </div>
        )
    }
}

export default ProductListItem;