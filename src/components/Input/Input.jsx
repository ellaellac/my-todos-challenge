import { useState } from "react";
import "./Input.scss";
import Button from "../Button/Button";

const Input = ({ setUserInput }) => {
  const [todo, setTodo] = useState("");

  const handleInput = (event) => {
    const getInput = event.target.value;
    setTodo(getInput);
  };

  const addInput = () => {
    setUserInput(todo);
  };

  return (
    <>
      <label htmlFor="User-Input"></label>
      <input onInput={handleInput} type="text" />
      <Button title="+" btnFunction={addInput} />
    </>
  );
};
export default Input;
