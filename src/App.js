import { Routes, Route } from "react-router";

import TodoAppProvider from "./context";
import TaskList from "./components/TaskList";
import AddForm from "./components/AddForm";
import EditTodo from "./components/EditTodo";

function App() {
  return (
    <>
      <TodoAppProvider>
        <div className="app-container">
          <Routes>
            <Route index element={<TaskList />} />
            <Route path="/add" element={<AddForm />} />
            <Route path=":id" element={<EditTodo />} />
          </Routes>
        </div>
      </TodoAppProvider>
    </>
  );
}

export default App;
