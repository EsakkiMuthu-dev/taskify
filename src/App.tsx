import React from "react";
import "./App.css";
import InputField from "./components/InputField";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1> Taskify</h1>
      <InputField />
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
