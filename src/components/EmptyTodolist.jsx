import { FaCircleInfo } from "react-icons/fa6";
function EmptyTodolist() {
  return (
    <div className="row">
      <div className="col-12 px-5">
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <FaCircleInfo className="me-1" />
          <strong>No tasks in your to-do list!</strong> Time to start adding and
          tackling your goals!
        </div>
      </div>
    </div>
  );
}
export default EmptyTodolist;
