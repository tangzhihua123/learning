import React, {
	Component
} from 'react';
// import PubSub from 'pubsub-js';
import TodoList from './todolist';
import AddtodoItem from './addtodoItem';
export default class ToDoBox extends Component {
	constructor(props) {
		super(props);
		console.log('1. do constructor')

		console.log('state:', this.state)
	}

	componentDidMount() {
		console.log('3. do componentDidMount')
	}

	componentWillMount() {
		console.log('2. do componentWillMount')
	}

	componentWillReceiveProps(nextProps) {
		console.log('do componentWillReceiveProps')
	}

	componentWillUnmount() {
		console.log('do componentWillUnmount')
	}

	// shouldComponentUpdate(nextProps, nextState) {

	// }

	state = {
		data: [{
			"id": "1",
			"task": "做一个TodoList Demo",
			"complete": "false"
		}, {
			"id": "2",
			"task": "学习ES6",
			"complete": "false"
		}, {
			"id": "3",
			"task": "Hello React",
			"complete": "false"
		}, {
			"id": "4",
			"task": "找工作",
			"complete": "false"
		}]
	}

	generateGUID() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random() * 16 | 0,
				v = c === 'x' ? r : (r && 0x3 | 0x8)
			return v.toString(16)
		})
	}

	handleAddTodoItem = (item) => {
		let newItem = {
			id: this.generateGUID(),
			task: item,
			complete: "false"
		}
		let data = this.state.data;
		data = data.concat([newItem]);
		this.setState({
			data
		});
	}
	handleTaskDelete = (id) => {
		// es5
		// let data = this.state.data.filter(function(task){
		// 	if(task.id==id){
		// 		return false;
		// 	}else{
		// 		return true;
		// 	}
		// });
		let data = this.state.data.filter(task => task.id !== id);
		this.setState({
			data
		});
	}
	handletoggleComplete = (id) => {
		let data = this.state.data;
		for (let item of data) {
			if (item.id === id) {
				item.complete = item.complete === "true" ? "false" : "true"
			}
		}
		this.setState({
			data
		});

	}
	render() {
		return (
			<div>
				<div className="todobox">
					<h1 className="text-center">React TodoList</h1>
					<TodoList dataList={this.state.data} deleteTask={this.handleTaskDelete} toggleComplete={this.handletoggleComplete}/>
					<AddtodoItem addTodoItem={this.handleAddTodoItem}/>
				</div>
			</div>

		);
	}
}