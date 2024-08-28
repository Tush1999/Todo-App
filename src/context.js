import React, { useContext, useEffect, useReducer, useState } from "react";

import reducers from "./reducers";

import { TODOS } from "./constants";

const TodoAppContext = React.createContext();

export const useTodoAppContext = () => useContext(TodoAppContext);

const TodoAppProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(
    reducers,
    JSON.parse(localStorage.getItem("todo-list")) || TODOS
  );
  const [todosMapping, setTodosMapping] = useState({});

  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(todos));
    setTodosMapping(
      todos.reduce((mapping, task) => {
        const { status } = task;
        mapping[status] = mapping[status] ? [...mapping[status], task] : [task];
        return mapping;
      }, {})
    );
  }, [todos]);

  return (
    <TodoAppContext.Provider
      value={{
        todos,
        dispatch,
        todosMapping,
      }}
    >
      {children}
    </TodoAppContext.Provider>
  );
};

export default TodoAppProvider;
