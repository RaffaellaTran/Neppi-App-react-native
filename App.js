import React, { Component } from 'react';
import { createStore, applyMiddleware,combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistCombineReducers, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import navigation from './src/reducers/reducer';
import Nav, { middleware }  from './Navigator';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';


const config = {
  key: 'primary',
  storage
 };
 const reducer = combineReducers({ navigation })
const store = createStore(reducer, applyMiddleware(logger, middleware))

  persistStore(
    store,
    null,
    () => {
      store.getState(); 
    }
  );   
  
  export default class App extends Component {
    render() {
    return (
      <Provider store={store}>
        <Nav />
      </Provider>
);
}
}
