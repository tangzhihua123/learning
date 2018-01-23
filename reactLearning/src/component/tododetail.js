import React, {
	Component
} from 'react';
import {
	Button
} from 'antd';
import {
	connect
} from 'react-redux'
import {
	withRouter
} from 'react-router-dom'
// import Counter from './counter';
import {
	addCounter
} from '../action/counter';
class Tododetail extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const {
			count,
			addCounter
		} = this.props;
		console.log('count=====', count);
		debugger;
		return (
			<div>
				<span>{count}</span>
				<button onClick={() => {addCounter('text action')}}>Increase</button>
			</div>

		);
	}

}
const mapStateToProps = state => ({
	count: state.counter.count,
});

const mapDispatchToProps = {
	addCounter,
};

export default connect(mapStateToProps,
	mapDispatchToProps
)(Tododetail)