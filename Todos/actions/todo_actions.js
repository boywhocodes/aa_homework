export const RECEIVE_TODOS = 'RECEIVE_TODOS'; // ressets list of todos
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodos = todos => {
  return {
    type: RECEIVE_TODOS,
    todos
  };
};

export const receiveTodo = todo => {
  return {
    type: RECEIVE_TODO,
    todo
  };
};
