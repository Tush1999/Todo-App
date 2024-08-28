import { useNavigate } from "react-router";

import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

import { useTodoAppContext } from "../context";

import { REMOVE_TODO, STATUS_MAPPING } from "../constants";

const Task = ({ id, title, description, status }) => {
  const { dispatch } = useTodoAppContext();

  const navigate = useNavigate();
  const { label, iconClass } = STATUS_MAPPING[status] || {};
  return (
    <div className="task-container">
      <div className="first-row">
        <div className="title">{title}</div>
        <div className="task-status">
          <span className={`iconClass ${iconClass}`} /> {label}
        </div>
      </div>
      <div className="description">{description}</div>
      <div className="action-buttons">
        <div onClick={() => navigate(`/${id}`)} className="edit">
          <BiEditAlt />
        </div>
        <div
          onClick={() =>
            dispatch({ type: REMOVE_TODO, payload: { todoId: id } })
          }
          className="remove"
        >
          <RiDeleteBinLine />
        </div>
      </div>
    </div>
  );
};

export default Task;
