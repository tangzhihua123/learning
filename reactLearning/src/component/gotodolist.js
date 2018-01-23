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
import SortableTree, {
	addNodeUnderParent,
	removeNodeAtPath,
	changeNodeAtPath
} from 'react-sortable-tree';
const firstNames = [
	'input'
];
class Gotodolist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			treeData: [{
				title: '无线组',
				id: '1',
				children: [{
					title: '前端组',
					id: '12',
				}, {
					title: 'iOS组',
					id: '13',
				}, {
					title: 'Android组',
					id: '14',
				}, {
					title: 'RN组',
					id: '15',
				}]
			}],
		};
	}
	goDoList = () => {
		console.log(this.props);
		this.props.history.push('/app');

	};
	gotDetail = (node, treeIndex, path) => {
		// gotDetail = (info) => {
		alert('12121212');
		console.log('node===id', node.id);
	}
	// onIncreaseClick = () => {
	// 	this.props.addCounter();
	// }

	render() {
		const {
			count,
			addCounter
		} = this.props;
		console.log('count=====', count);
		const getNodeKey = ({
			treeIndex
		}) => treeIndex;
		const getRandomName = () =>
			'请输入目标';
		debugger;
		console.log('tree===', this.state.treeData);
		console.log('tree===', this.state.data1);
		return (
			<div>
				// <Button type="primary" onClick={this.goDoList}>dolist</Button>
				<div style={{ height: 1400 }}>

			        <SortableTree
			          treeData={this.state.treeData}
			          onChange={treeData => this.setState({ treeData })}
			           generateNodeProps={({ node, path }) => ({
			              buttons: [
			                <button
			                  onClick={() =>
			                    this.setState(state => ({
			                      treeData: addNodeUnderParent({
			                        treeData: state.treeData,
			                        parentKey: path[path.length - 1],
			                        expandParent: true,
			                        getNodeKey,
			                        newNode: {
			                          // title: `${getRandomName()}`,
			                          title: (
						                <input
						                  style={{ fontSize: '1.1rem' }}
						                  value={node.name}
						                  onChange={event => {
						                    const name = event.target.value;

										// this.setState(state => ({
										// 	treeData: changeNodeAtPath({
										// 		treeData: state.treeData,
										// 		path,
										// 		getNodeKey,
										// 		newNode: { ...node,
										// 			name
										// 		},
										// 	}),
										// }));
						                  }}
						                />
						              ),
						              type:'input'

			                        },
			                      }).treeData,
			                    }))
			                  }
			                >
			                  Add Child
			                </button>,
			                <button
			                  onClick={() =>
			                    this.gotDetail({node})
			                  }
			                >
			                  Detail
			                </button>,
			                <button
			                  onClick={() =>
			                    this.setState(state => ({
			                      treeData: removeNodeAtPath({
			                        treeData: state.treeData,
			                        path,
			                        getNodeKey,
			                      }),
			                    }))
			                  }
			                >
			                  Remove
			                </button>,
			              ],
			            })}
			        />
			      </div>
				{/* <Counter/> 
				<span>{count}</span>
				<button onClick={() => {addCounter('text action')}}>Increase</button>*/}

			</div>

		);
	}
}
debugger;
const mapStateToProps = state => ({
	count: state.counter.count,
});
// function mapStateToProps(state) {
// 	console.log('mapStateToProps======', state);
// 	return {
// 		count: state.counter.count,
// 	}
// }
const mapDispatchToProps = {
	addCounter,
};

export default connect(mapStateToProps,
	mapDispatchToProps
)(Gotodolist)