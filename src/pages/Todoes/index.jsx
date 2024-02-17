import React from "react";
import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Deletetodo } from "../../Store/Reducer/Todolist";

const Todo = () => {
  const Navigate = useNavigate();
  const Dispatch = useDispatch();
  const state = useSelector((state) => state.todolist);

  const navigateToHome = () => {
    Navigate("/home");
  };

  const editToDo = (index) => {
    Navigate(`/modal/${index}`);
  };

  const deleteToDo = (index) => {
    Dispatch(Deletetodo(index));
  };

  return (
    <>
      <Button type="button" onClick={() => navigateToHome()} text="back" />
      {state.todoList.map((object, index) => {
        return (
          <div key={index} className="todo">
            <h2>{object.title}</h2>
            <p>{object.description}</p>
            <div className="buttonContainer">
              <Button
                type="button"
                onClick={() => editToDo(index)}
                text="edit"
              />
              <Button
                type="button"
                onClick={() => deleteToDo(index)}
                text="delete"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Todo;
