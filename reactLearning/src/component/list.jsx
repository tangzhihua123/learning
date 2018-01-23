import React, { Component } from 'react';

export default class list extends Component {
	render() {
		return (
			<div>
			{
				React.Children.map(this.props.children,function(child){
					return <div>{child}</div>
				} )
			}
			</div>
			);
	}
}
