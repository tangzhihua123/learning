import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';
import React from 'react';
import Tododetail from '../component/tododetail'
import App from '../App';
import Gotodolist from '../component/gotodolist'

const Index = () =>
	<Router>
		<div>
			<Route path="/" component={Gotodolist}/>
			<Route path="/app" component={App}/>
			<Route path="/Tododetail" component={Tododetail}/>
		</div>
	</Router>

export default Index