import { useState } from "react";
import "./Item.scss";
import Button from "../Button/Button";

const Item = ({ id, task, toDoList, setToDoList }) => {
  //cross-box
  let inputClassName = "input-text";
  const [cross, setCross] = useState(false);

  const handleCross = () => {
    setCross(!cross);
  };

  if (cross) {
    inputClassName += "-cross";
  }

  //Button- delete List
  const delToDo = () => {
    const filteredToDo = toDoList.filter((element) => element.id !== id);
    setToDoList(filteredToDo);
  };

  return (
    <div className="item">
      <div className="item__todo">
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          onClick={handleCross}
        />
        <p className={inputClassName}> {task}</p>
      </div>
      <Button className="delete-btn" title="Delete" btnFunction={delToDo} />
    </div>
  );
};

export default Item;
