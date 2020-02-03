import React from 'react';
import './App.css';
import Beer from './Beer'

class App extends React.Component {
   state = {
      beers: []
   };

   componentDidMount () {
      fetch('https://api.punkapi.com/v2/beers?page=1&per_page=20')
         .then(response => response.json())
         .then(beers => {
            this.setState((prevStatte => {
               return {
                  beers: beers
               }
            }));
         });
   }

   render () {
      const beers = this.state.beers.map(beer => {
         const {id, name, description, image_url, abv} = beer;

         return <Beer key={id} name={name} description={description} image_url={image_url} abv={abv} />;
      });

      return ( 
         <div >
            {beers}
         </div>
      );
   }
}

export default App;
