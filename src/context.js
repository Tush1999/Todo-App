import React, { useContext, useEffect, useReducer, useState } from "react";

import reducers from "./reducers";

import { getTodoMapping } from "./helper";
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
    setTodosMapping(getTodoMapping(todos));
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
