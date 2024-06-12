import { FaTrashCan } from "react-icons/fa6";
function TodoItem({ todoItems, onCheckboxChange, onDeleteClick }) {
  return (
    <div className="px-4 pb-4">
      <div className="list-group">
        {todoItems.map((item) => (
          <div className="input-group mb-1" key={item.name}>
            <div className="input-group-text">
              <input
                className="form-check-input mt-0"
                type="checkbox"
                checked={item.isChecked}
                onChange={() => onCheckboxChange(item.name)}
              />
            </div>
            <span className="form-control" placeholder="Todo Item">
              {item.isChecked ? (
                <s>
                  {item.name} || {item.dueDate}
                </s>
              ) : (
                <>
                  {item.name} || {item.dueDate}
                </>
              )}
            </span>
            <button
              className="btn btn-danger"
              type="button"
              onClick={() => onDeleteClick(item.name)}
            >
              <FaTrashCan />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default TodoItem;
