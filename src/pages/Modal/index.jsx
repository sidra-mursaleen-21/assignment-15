import React, { useState } from "react";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { Savechanges } from "../../Store/Reducer/Todolist";
import { useDispatch } from "react-redux";

function Modal() {
  const [todo, setTodo] = useState({});
  const Navigate = useNavigate();
  const Parameter = useParams();
  const Dispatch = useDispatch();

  const navigateToToDo = () => {
    Navigate("/todo");
  };

  const inputFeilds = (key, value) => {
    setTodo({
      ...todo,
      [key]: value,
    });
  };

  const saveChanges = () => {
    Dispatch(
      Savechanges({
        index: Parameter.id,
        todo: todo,
      })
    );
    Navigate("/todo");
  };

  return (
    <>
      <div className="modalContainer">
        <div className="modal">
          <div className="changeInput">
            <Input
              type="text"
              onChange={(e) => inputFeilds(e.target.id, e.target.value)}
              id="title"
              label="title"
              placeholder="write a new title"
            />
            <Input
            type="text"
              onChange={(e) => inputFeilds(e.target.id, e.target.value)}
              id="description"
              label="description"
              placeholder="write a new description"
            />
          </div>
          <div className="buttonContainer">
            <Button type="button" onClick={() => navigateToToDo()} text="back" />
            <Button type="button" onClick={() => saveChanges()} text="save" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
