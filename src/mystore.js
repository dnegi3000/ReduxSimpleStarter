import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import MegaMenu from './components/megamenu'

//const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(<App/>,document.querySelector('.root'));
