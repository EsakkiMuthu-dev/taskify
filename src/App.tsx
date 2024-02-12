import React from "react";
import "./App.css";
import InputField from "./components/InputField";
import { useState } from "react";
import { Todo } from "./models/model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    console.log("Submitted");
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };
  console.log(todos);
  return (
    <div className="App">
      <h1> Taskify</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodo={setTodo} setTodos={setTodos} />
    </div>
  );
};

export default App;

// let name: string = "something";

// let someone: boolean = true;
// console.log(someone);
// let open: string[];
// open = ["sdnjkdls", "sdjkds"];

// type Person = {
//   name: string;
//   id?: number;
// };

// let person: Person = { name: "Esakki Muthu", id: 21 };
// let bharu: Person = { name: "Bharathiii ", id: 123 };
// console.log(bharu.name);
// let somePerson: Person = { name: "someone", id: 278 };
// let som: Person = { name: "smjjk" };
