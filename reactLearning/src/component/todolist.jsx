import React, { Component } from 'react';
import Todoitem from './todoItem';
import PubSub from 'pubsub-js';
export default class todolist extends Component {
	componentDidMount() {
		PubSub.publish('todolist', this.props.dataList);
	}
	render() {
		var taskList = this.props.dataList.map(listItem=>
			 <Todoitem taskId={listItem.id}
                key={listItem.id}
                task={listItem.task}
                complete={listItem.complete}
                deleteTask={this.props.deleteTask}
                toggleComplete={this.props.toggleComplete}
               />
		);
		return (
			<ul>
				{taskList}
			</ul>
		);
	}
}
