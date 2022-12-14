import { useState } from "react";
import "./App.scss";
import "./components/Input/Input";
import Input from "./components/Input/Input";
import List from "./components/List/List";

const App = () => {
  const [userInput, setUserInput] = useState();

  return (
    <div className="App">
      <h1>My Todos</h1>
      <Input setUserInput={setUserInput} />
      {userInput && <List userInput={userInput} />}
    </div>
  );
};

export default App;
