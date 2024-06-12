import "./App.css";
import AddTodoItem from "./components/AddTodoItem";
import TodoItem from "./components/TodoItem";
import EmptyTodolist from "./components/EmptyTodolist";
import { useState } from "react";
function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };
  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <div className="container w-50">
      <div className="row justify-content-center align-items-center">
        <div className="col mt-4 p-4">
          <div className="card">
            <div className="card-header bg-primary">
              <h4 className="text-white text-center">Todo List</h4>
            </div>
            <div className="card-body">
              <h4 className="text-center">Welcome to Your To-Do List!</h4>
            </div>
            <AddTodoItem onNewItem={handleNewItem} />
            {todoItems.length === 0 && <EmptyTodolist />}
            <TodoItem todoItems={todoItems} onDeleteClick={handleDeleteItem} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
