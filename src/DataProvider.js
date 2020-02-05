import React from 'react';

class DataProvider extends React.Component {
   state = {
      loading: false, 
      data: []
   }

   componentDidMount() {
      this.setState({loading: true});
      fetch(this.props.url)
         .then(response => response.json())
         .then(data => this.setState({loading: false, data: data}));
   }

   render() {
      return (
         <div>
            {
               this.props.children({
                  loading: this.state.loading,
                  data: this.state.data
               })
            }
         </div>
      )
   }
}

export default DataProvider;