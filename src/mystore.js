import React from 'react';	
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore ,applyMiddleware } from 'redux';

import reducers from './reducers/index';
import App from './components/app';
//import reducers from './reducers';

//const createStoreWithMiddleware = applyMiddleware()(createStore);

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(<Provider store={createStore(reducers)}>
					<App/>
				</Provider>
	,document.querySelector('.root'));
