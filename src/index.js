import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux' 
import App from './App'

import { createNote } from './reducers/noteReducer'
import { filterChange } from './reducers/filterReducer'
import store from './store';

store.subscribe(() => console.log(store.getState()))
store.dispatch(filterChange('IMPORTANT'))
store.dispatch(createNote('combineReducers forms one reducer from many simple reducers'))

console.log(store.getState())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

