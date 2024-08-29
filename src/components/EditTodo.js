import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router";

import { Header } from "./Header";

import { useTodoAppContext } from "../context";

import { UPDATE_TODO, STATUS_LIST, STATUS_MAPPING } from "../constants";

const EditTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const { todos, dispatch } = useTodoAppContext();

  const navigate = useNavigate();
  const { id: todoId } = useParams();

  const editTodo = useMemo(() => todos.find(({ id }) => todoId == id, []));

  useEffect(() => {
    if (!editTodo) {
      navigate("/");
      return;
    }
    setTitle(editTodo.title);
    setDescription(editTodo.description);
    setStatus(editTodo.status);
  }, []);

  const handleSubmit = () => {
    dispatch({
      type: UPDATE_TODO,
      payload: { ...editTodo, title, description, status },
    });

    navigate("/");
  };

  return (
    <div>
      <Header heading="Edit Todo" showBackBtn/>
      <div className="form-container">
        <div className="input-text">
          <input
            type="text"
            placeholder="Enter the title"
            value={title}
            name="title"
            onChange={(evt) => setTitle(evt.target.value)}
          />
        </div>
        <div className="input-text">
          <textarea
            placeholder="Enter the description"
            value={description}
            name="description"
            onChange={(evt) => setDescription(evt.target.value)}
            rows={3}
          />
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className="status">
          {STATUS_MAPPING[status]?.label}
        </div>
        {isOpen && (
          <div className="status-dropdown">
            {STATUS_LIST.map((statusKey) => (
              <div
                onClick={() => {
                  setStatus(statusKey);
                  setIsOpen(false);
                }}
                className="dropdown-item"
              >
                <span
                  className={`${STATUS_MAPPING[statusKey]?.iconClass} iconClass`}
                ></span>
                {STATUS_MAPPING[statusKey]?.label}
              </div>
            ))}
          </div>
        )}
        <div className="footer-container">
          <button className="btn btn-border" onClick={() => navigate("/")}>
            Cancel
          </button>
          <button className="btn" onClick={handleSubmit}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;
