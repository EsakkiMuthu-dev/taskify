import { Todo } from "../models/model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
interface Props {
  todos: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodo, setTodos }: Props) => {
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const markAsDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  return (
    <div>
      <h1>TodoList</h1>
      <h1> Bucket List</h1>
      <ul>
        {todos.map(
          (todo: Todo) =>
            !todo.isDone && (
              <>
                <li key={todo.id}>
                  {todo.todo}
                  <span onClick={() => handleDelete(todo.id)}>
                    {" "}
                    {<AiFillDelete />}
                  </span>
                  <span onClick={() => markAsDone(todo.id)}>{<MdDone />}</span>
                </li>
              </>
            )
        )}
      </ul>
      <hr />
      <hr />
      <h1> Completed List</h1>
      <ul>
        {todos.map(
          (todo: Todo) =>
            todo.isDone && (
              <>
                <li key={todo.id}>
                  {todo.todo}
                  <span onClick={() => handleDelete(todo.id)}>
                    {" "}
                    {<AiFillDelete />}
                  </span>
                  <span onClick={() => markAsDone(todo.id)}>{<MdDone />}</span>
                </li>
              </>
            )
        )}
      </ul>
    </div>
  );
};

export default TodoList;
