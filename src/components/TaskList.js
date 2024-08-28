import { useNavigate } from "react-router";

import { Header } from "./Header";

import Accordion from "react-bootstrap/Accordion";
import { IoMdAdd } from "react-icons/io";
import Task from "./Task";

import { useTodoAppContext } from "../context";

import { STATUS_MAPPING, STATUS_LIST } from "../constants";

const TaskList = () => {
  const { todosMapping } = useTodoAppContext();

  const navigate = useNavigate();

  return (
    <>
      <Header heading="TO-DO APP" />
      <div className="todo-container">
        {Object.keys(todosMapping)?.length ? (
          <div>
            <Accordion defaultActiveKey={STATUS_LIST[0]}>
              {STATUS_LIST.map((statusKey) => {
                const list = todosMapping[statusKey];
                return (
                  <Accordion.Item eventKey={statusKey} key={statusKey}>
                    <Accordion.Header as={"div"}>
                      <div>
                        {STATUS_MAPPING[statusKey]?.label} (
                        <strong>{list?.length || 0}</strong>)
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      {list?.length
                        ? list.map((data) => <Task {...data} key={data.id} />)
                        : "No tasks"}
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </div>
        ) : (
          ""
        )}
      </div>
      <button onClick={() => navigate("/add")} className="add-todo-btn">
        <IoMdAdd />
      </button>
    </>
  );
};

export default TaskList;
