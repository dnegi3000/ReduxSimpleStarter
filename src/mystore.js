import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './reducers/index';
import App from './components/app';
//import reducers from './reducers';

//const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(<Provider store={store}>
					<App/>
				</Provider>
	,document.querySelector('.root'));
