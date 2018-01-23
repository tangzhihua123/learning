import React, {
	Component
} from 'react';
import {
	Form,
	Input,
	Button,
} from 'antd';
import ReactDOM from 'react-dom';
export default class addtodoItem extends Component {
	constructor(props) {
		super(props)
		// this.saveNewItem = this.saveNewItem.bind(this)
	}
	saveNewItem = () => {
		let element = ReactDOM.findDOMNode(this.refs.newItem);
		let task = element.value;
		if (task) {
			this.props.addTodoItem(task);
			//清楚input输入框内容
			element.value = '';
		} else {
			alert('请输入计划');
		}
	}
	render() {
		return (
		<div>
			<Form.Item>
				<label htmlFor="newItem"></label>
				<Input id="newItem" ref="newItem" type="text" placeholder="吃饭睡觉打豆豆~"></Input>
				<Button type="primary" className="pull-right" onClick={this.saveNewItem}>保存</Button>
			</Form.Item>
		</div>
		);
	}
}