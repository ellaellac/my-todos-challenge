import { useState } from "react";
import Button from "../Button/Button";
import "./List.scss";

const List = ({ userInput }) => {
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
  const [delList, setdelList] = useState(false);

  const handleDel = () => {
    setdelList(!delList);
  };

  //   const emptyListJSX = (
  //     <>
  //     </>
  //   );

  //   const showList = (
  //     <div className="list">
  //       <p onClick={handleCross}> ▢ </p>
  //       <p className={inputClassName}> {userInput}</p>
  //       <Button title="Delete" btnFunction={handleDel} />
  //       <>{/* {delList ?emptyListJSX :} */}</>
  //     </div>
  //   );

  return (
    <div className="list">
      <p onClick={handleCross}> ▢ </p>
      <p className={inputClassName}> {userInput}</p>
      <Button title="Delete" btnFunction={handleDel} />
      {/* {delList ? emptyListJSX : showList} */}
    </div>
  );
};

export default List;
