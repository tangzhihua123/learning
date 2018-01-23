import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import Router from './router/index'
import 'antd/dist/antd.css';
import store from './store/store'
ReactDOM.render(
	<Provider store={store()}>
		<Router/> 
	</Provider>,
	document.getElementById('root'));