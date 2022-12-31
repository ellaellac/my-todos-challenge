import { useEffect, useState } from "react";
import "./App.scss";
import Button from "./components/Button/Button";
import Item from "./components/Item/Item";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [toDo, setToDo] = useState();
  const [toDoList, setToDoList] = useState([]);
  console.log(toDoList);

  //input field
  const handleInput = (event) => {
    const getToDo = event.target.value;
    setToDo(getToDo);
  };
  //added task btn
  const handleClick = () => {
    if (toDo) {
      setToDoList([...toDoList, { id: uuidv4(), task: toDo }]);
    }
  };

  //Display Todos
  const displayToDosJSX = toDoList.map((element) => {
    return (
      <Item
        key={element.id}
        id={element.id}
        task={element.task}
        toDoList={toDoList}
        setToDoList={setToDoList}
      />
    );
  });

  // Display Default Text
  const defaultTextJSX = (
    <p>Nothing to see here yet... Add a task in the field above!</p>
  );

  //clear input field
  useEffect(() => {
    setToDo("");
  }, [toDoList]);

  //Reset
  const reset = () => {
    setToDoList([]);
  };

  return (
    <div className="app">
      <div className="header">
        <h1>My Todos</h1>
        <Button className="reset-btn" title="Reset" btnFunction={reset} />
      </div>
      <label htmlFor="todo-input-field"></label>
      <input
        type="text"
        onInput={handleInput}
        value={toDo}
        placeholder="Add your task here..."
        className="input-field"
      />
      <Button className="task-btn" title="+" btnFunction={handleClick} />
      {toDoList.length > 0 ? displayToDosJSX : defaultTextJSX}
    </div>
  );
};

export default App;
