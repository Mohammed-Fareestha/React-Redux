import React, { useState } from 'react'
import CustomerAdd from './CustomerAdd'
import { Provider } from 'react-redux';
import { store } from './store';


function App() {

  return (
    <Provider store={store}> 
      <div style={{textAlign:'center', paddingTop:'30px'}}>
        <h1>React DO-To List</h1>
        <CustomerAdd/>
      </div>
    </Provider>
   
  );
}

export default App;
