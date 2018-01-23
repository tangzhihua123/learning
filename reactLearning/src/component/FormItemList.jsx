import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import {
	Form,
	Modal,
	Input
} from 'antd';
const FormItem = Form.Item;

class FormItemList extends Component {
	componentDidMount() {
		//监听订阅的事件  
        this.pubsub_token = PubSub.subscribe('handleSubmit', function(topic, name){  
            this.props.form.validateFields((err, values) => {
            	console.log('values----',values);
            	this.props.setData(values);
            }); 
        }.bind(this)) 
	}
	componentWillUnmount() {
		PubSub.unsubscribe(this.pubsub_token);  
	}
	
	render() {
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
			labelCol: {
				span: 6
			},
			wrapperCol: {
				span: 14
			},
		};
		return (
			<div>
			<Form onSubmit={this.handleSubmit}>
			<FormItem {...formItemLayout} label="子组件">
			{getFieldDecorator('childItem', {
				rules: [{
					required: true,
					message: '子组件',
				}],
			})(
			<Input placeholder="子组件"/>
			)}
			</FormItem>
			</Form>
			</div>
			);
	}
}
export default Form.create()(FormItemList);
