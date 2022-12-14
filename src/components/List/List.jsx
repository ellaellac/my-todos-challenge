import { useState } from "react";
import "./List.scss";

const List = ({ userInput }) => {
  let inputClassName = "input-text";
  const [cross, setCross] = useState(false);

  const handleCross = () => {
    setCross(!cross);
  };

  if (cross) {
    inputClassName += "-cross";
  }

  return (
    <div className="list">
      <p onClick={handleCross}> ▢ </p>
      <p className={inputClassName}> {userInput}</p>
    </div>
  );
};

export default List;
