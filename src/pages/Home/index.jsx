import { useState } from "react";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Savetodo } from "../../Store/Reducer/Todolist";

function Home() {
  const [todo, setTodo] = useState({});
  const Navigate = useNavigate();
  const Dispatch = useDispatch();

  const navigateToTodo = () => {
    Navigate("/todo");
  };

  const inputFields = (key, value) => {
    setTodo({
      ...todo,
      [key]: value,
    });
  };

  const saveToDo = () => {
    Dispatch(Savetodo(todo));
    Navigate("/todo");
  };

  return (
    <>
      <div className="imageContainer">
        <h1>to-do-list</h1>
        <img width={"100px"} height={"100px"} src="/logo.png" alt="" />
      </div>
      <div className="inputContainer">
        <Input
          type="text"
          onChange={(e) => inputFields(e.target.id, e.target.value)}
          id="title"
          label="title"
          placeholder="write your title"
        />
        <Input
          type="text"
          onChange={(e) => inputFields(e.target.id, e.target.value)}
          id="description"
          label="description"
          placeholder="write your description"
        />
      </div>
      <div className="buttonContainer">
        <Button type="button" onClick={() => navigateToTodo()} text="all todoes" />
        <Button type="button" onClick={() => saveToDo()} text="save" />
      </div>
    </>
  );
}

export default Home;
