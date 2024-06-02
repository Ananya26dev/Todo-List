function TodoItem2() {
  let todoName = "Go To Office";
  let todoDate = "4/10/2023";
  return (
    <div>
      <div className="container">
        <div className="row todo-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button className="btn btn-danger todo-button">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TodoItem2;
