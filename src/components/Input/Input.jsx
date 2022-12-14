import { useState } from "react";
import "./Input.scss";

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
      <button onClick={addInput}> + </button>
    </>
  );
};
export default Input;
