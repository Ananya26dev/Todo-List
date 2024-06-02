import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "26/08/2024",
    },
    {
      name: "Go To Office",
      dueDate: "30/06/2024",
    },
    {
      name: "Enjoy Trip",
      dueDate: "30/07/2024",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}
export default App;
