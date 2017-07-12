import React from 'react';
import ToDoListItem from './todo_list_item';
import TodoForm from './todo_form';

class ToDoList extends React.Component {
    render () {
      // console.log(this.props);
      const {todos, receiveTodo} = this.props;
      return(
        <div>
        <h1>RETURNING OWOO</h1>
        {this.props.todos.map(todo => <ToDoListItem todo={todo} key={todo.id}/>)}
        <TodoForm receiveTodo = {receiveTodo}/>
        </div>
      );
    }
}

export default ToDoList;
