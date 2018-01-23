import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import PubSub from 'pubsub-js';
import Input from './component/input'
import List from './component/list'
import Todobox from './component/ToDoBox'
import FormItemList from './component/FormItemList.jsx'
import {
  Form,
  Modal,
  Button
} from 'antd';
const FormItem = Form.Item;

class App extends Component {
  state = {
    title: ['小红', '小白', '小天'],
    arrList: [
      <h1>Hello world!</h1>,
      <h2>React is awesome</h2>,
    ],
    listData: [{
      name: '1111',
      age: '23'
    }, {
      name: '2222',
      age: '24'
    }, {
      name: '333',
      age: '25'
    }],
    showModal: false,
  }
  handleSubmit = () => {
    console.log('handleSubmit');
    PubSub.publish('handleSubmit', 'getFormData');
  }
  handleCancel = () => {
    console.log('handleCancel');
    this.setState({
      showModal: false,
    });
  }
  goShowModal = () => {
    this.setState({
      showModal: true,
    });
  }
  setData = (val) => {
    console.log('父组件获取子组件的值----', val);
    alert('父组件触发子组件获取input值，传给父组件！' + JSON.stringify(val));
  }
  render() {
    console.log('this.props:', this.props);
    const {
      getFieldDecorator
    } = this.props.form;
    const formItemLayout = {
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 14
      },
    };
    return (
      <div className="App">
          <Button
              style={{marginRight:'10px'}}
              onClick={this.goShowModal}
          >
              组件通信demo
          </Button>
          <Modal title="组件通信demo"
                       visible={this.state.showModal}
                       onOk={this.handleSubmit.bind(this)}
                       onCancel={this.handleCancel.bind(this)}
                >
            <Form onSubmit={this.handleSubmit}>
              <FormItem {...formItemLayout} label="项目名称">
                  {getFieldDecorator('appName', {
                      rules: [{
                          required: true,
                          message: '请输入项目名称',
                      }],
                  })(
                      <Input placeholder="请输入项目名称"/>
                  )}
              </FormItem>
              <FormItem {...formItemLayout} label="包名">
                  {getFieldDecorator('packageName', {
                      rules: [{
                          required: true,
                          message: '请输入包名',
                      }],
                  })(
                      <Input placeholder="请输入包名"/>
                  )}
              </FormItem>
            </Form>
            <FormItemList setData={this.setData}/>
          </Modal>
      <Todobox routerHistory={this.props.history}/>
    </div>
    );
  }
}

export default Form.create()(App);