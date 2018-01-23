import React, { Component } from 'react';
import {Row, Col, Checkbox, Button} from 'antd';
import PubSub from 'pubsub-js';
export default class todoitem extends Component {
	componentDidMount() {
		this.pubsub_token = PubSub.subscribe('todolist', function(topic, name){  
			console.log('pubsub_token====',name);
            this.setState({  
                name : name  
            })  
        }.bind(this));
	}

	deleteTask = () => {
		debugger;
		//监听订阅的事件  
        this.pubsub_token = PubSub.subscribe('todolist', function(topic, name){  
        	console.log('pubsub_token====deleteTask',name);
            this.setState({  
                name : name  
            })  
        }.bind(this));

		const delId = this.props.taskId;
		this.props.deleteTask(delId);
	}
	componentWillUnmount () {  
        //销毁监听的事件  
        PubSub.unsubscribe(this.pubsub_token);  
    }
	toggleComplete = () => {
		this.props.toggleComplete(this.props.taskId);
	}
	goDetail = () => {
		// const location = {
  // 			pathname: '/Tododetail',
  // 			state: {}
		// }
	}
	render() {
		// console.log({...this.props});
		let task = this.props.task;
		if (this.props.complete === "true") {
			task = <del>{task}</del>;
		}
		return (
			<li>
				<Row>
					<Col span={20}>
						<Checkbox onChange={this.toggleComplete}/> <span className="cursor" onClick={this.goDetail}>{task}</span>
					</Col>
					<Col span={4}>
						<Button type="danger" className="pull-right" onClick={this.deleteTask}>删除</Button>
					</Col>
				</Row>
			</li>
			);
	}
}
