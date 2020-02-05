import React from 'react';
import DataProvider from './DataProvider';
import ProductSwitcher from './ProductSwitcher';
import Loading from './Loading';

function App() {
   return (
      <DataProvider url='https://api.punkapi.com/v2/beers?page=1&per_page=20'>
         {({loading, data}) => {
            return (
               loading
                  ? <Loading />
                  : <ProductSwitcher data={data} />
            )
         }}
      </DataProvider>
   );
}

export default App;

// ?page=1&per_page=20'>