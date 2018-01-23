import React, { Component } from 'react';

export default class input extends Component {
	state = {
		value:'',
		placeholder:''
	}
	getInitialState = () => {
		return {value: 'Hello!'};
	}
	handleChange = (event) => {
		this.setState({value: event.target.value});
	}
	handleClick = () => {
		this.refs.myTextInput.focus();
	}
	componentDidMount = () => {
		console.log('didmount----'+this.props.name);

		this.setState({placeholder: this.props.name}, () => {
			console.log('didmount--after-setState--'+this.state.placeholder);
		});

		console.log('didmount--setState--'+this.state.placeholder);
	}
	render() {
		var value = this.state.value;
		//var value = this.props.name;
		return (
			<div>
				<input ref='myTextInput' type="text" value={value} onChange={this.handleChange} placeholder={this.state.placeholder} />
				<span onClick={this.handleClick}>获取焦点</span>
				<p>{value}</p>
			</div>
			);
	}
}
