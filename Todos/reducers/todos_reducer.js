import {RECEIVE_TODOS, RECEIVE_TODO} from '../actions/todo_actions';
import merge from 'lodash/merge';

const _default = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const todosReducer = (state = _default, action) => {
switch(action.type) {
// let copy = merge({}, state

  case RECEIVE_TODOS:
      return [...state, action.todo];
  case RECEIVE_TODO:
  const newTodo = {[action.todo.id]: action.todo};
      return merge({}, state, newTodo);  // creates copy
  default:
      return state;
}
};


export default todosReducer;
