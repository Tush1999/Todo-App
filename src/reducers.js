import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "./constants";

const reducers = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter(({ id }) => id !== action.payload.todoId);
    case UPDATE_TODO:
      const todos = [...state]
      let todoId = action.payload.id;
      const todoIndex = todos.findIndex(({ id }) => id == todoId);
      todos.splice(todoIndex, 1, action.payload);
      return todos;
    default:
      return state;
  }
};

export default reducers;
