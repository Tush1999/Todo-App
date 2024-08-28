import { useNavigate } from "react-router";

import { IoMdArrowRoundBack } from "react-icons/io";

export const Header = ({ heading, showBackBtn = false }) => {
  const navigate = useNavigate();

  return (
    <div className="todo-heading">
      {showBackBtn && (
        <button onClick={() => navigate("/")}>
          <IoMdArrowRoundBack />
        </button>
      )}
      <span>{heading}</span>
    </div>
  );
};
