import React from 'react';

class Toggler extends React.Component {
   state = {
      on: this.props.defaultOnValue
   }

   static defaultProps = {
      defaultOnValue: true
   }

   toggle = () => {
      this.setState(prevState => {
         return {on: !prevState.on}
      })
   };

   render() {
      return (
         <div>
            {
               this.props.children({
                  on: this.state.on,
                  toggle: this.toggle
               })
            }
         </div>
      );
   }
}

export default Toggler;