import { useRef } from "react";
import { FaCirclePlus } from "react-icons/fa6";
function AddTodoItem({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();
  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
  };
  return (
    <div className="px-4">
      <form onSubmit={handleAddButtonClicked}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add new todo"
            ref={todoNameElement}
            required
          />
          <input
            type="date"
            className="form-control"
            ref={dueDateElement}
            required
          />
          <button className="btn btn-success text-white" type="submit">
            <FaCirclePlus />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodoItem;
