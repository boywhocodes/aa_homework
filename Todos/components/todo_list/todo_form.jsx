import React from 'react';
// import {uniqueId} from '../..utils/idGenerator';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      done: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

handleSubmit(e) {
e.preventDefault();

const todo = Object.assign({}, this.state, {id: new Date().getTime()});
this.props.receiveTodo(todo);
this.setState({
title: '',
body: ''
});

}

update(field){
  // debugger
  console.log('sad');
return e => this.setState({[field]: e.target.value});

}




  render() {
    return (
      <form className='todo-form' onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input
            className = 'input'
            ref = 'title'
            value = {this.state.title}
            placeholder = 'Buy milk'
            onChange= {this.update('title')}
            required/>
        </label>




        <button className="create-button">Create Todo</button>
      </form>
    );

  }


}

export default TodoForm;
