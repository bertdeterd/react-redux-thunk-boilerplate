import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/app';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const store = configureStore();

ReactDOM.render( <Provider store={store}><App/></Provider>, document.getElementById('root'));

