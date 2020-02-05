import React from 'react';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';

class ProductSwitcher extends React.Component {
   state = {
      detailIsVisible: false, 
      product: {}
   }

   toggle = (product) => {
      this.setState(prevState => {
         return {
            detailIsVisible: !prevState.detailIsVisible,
            product: product
         }
      })
   }

   render() {
      return (
         !this.state.detailIsVisible
         ? <ProductList toggle={this.toggle} data={this.props.data} />
         : <ProductDetail toggle={this.toggle} data={this.state.product}/>
      )
   }
}
//    <Toggler>

//       {
//          ({ on, toggle }) => {
//             return 
//          }
//       }
//    </Toggler>
// )

// function ProductSwitcher(props) {

//    return (
//       <Toggler>

//          {
//             ({ on, toggle }) => {
//                return on
//                   ? <ProductList toggle={toggle} data={props.data} />
//                   : <ProductDetail toggle={toggle} />
//             }
//          }
//       </Toggler>
//    )
// }

export default ProductSwitcher;