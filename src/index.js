import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import ConfigureStore from './store/ConfigureStore';

import App from './App';

const store = ConfigureStore()
console.log("store" , store.getState())

store.subscribe(() =>{
  console.log(store.getState())
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <App />
  </Provider>
);


