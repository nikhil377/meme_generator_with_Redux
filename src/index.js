import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore, applyMiddleware} from 'redux';
import {Provider } from 'react-redux';
import rootReducers from './reducers';
import {fetchMemes} from './actions';
import thunk from 'redux-thunk';

const store = createStore(rootReducers,applyMiddleware(thunk));
// every time store is updated , it is subscribed and we can get the data
store.subscribe(()=>console.log("store",store.getState()));
store.dispatch(fetchMemes());


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
