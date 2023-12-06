import "./TodoCreateButton.css";

export const TodoCreateButton = () => {
  return (
    <div className="todo-button-container">
      <button className="todo-button" type="submit">
        <svg 
        className="custom-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 48 48"
        >
          <circle cx="24" cy="24" r="21" fill="#4CAF50" />
          <g fill="#fff">
            <path d="M21 14h6v20h-6z" />
            <path d="M14 21h20v6H14z" />
          </g>
        </svg>
      </button>
    </div>
  );
};
