import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "./Header";

import { useTodoAppContext } from "../context";

import { ADD_TODO, PENDING_STATE } from "../constants";

const AddForm = () => {
  const { dispatch } = useTodoAppContext();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    dispatch({
      type: ADD_TODO,
      payload: {
        id: new Date().toString(),
        title,
        description,
        status: PENDING_STATE,
      },
    });
    navigate("/");
  };

  return (
    <div>
      <Header heading="Add Task" showBackBtn />
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
        <div className="footer-container">
          <button className="btn btn-border" onClick={() => navigate("/")}>Cancel</button>
          <button className="btn" onClick={handleSubmit}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
