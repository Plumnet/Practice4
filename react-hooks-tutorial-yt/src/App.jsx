import { useEffect, useState, useContext } from "react";
import "./App.css";
import ShinCodeContext from "./main";

function App() {
  const [count, setCount] = useState(0);
  const shincodeInfo = useContext(ShinCodeContext);


const  handleClick = () => {
  setCount(count + 1);
};

useEffect(() => {
  console.log("Hello Hooks");
  //　setCount(count + 1);
}, [count]);

  return (
    <div className="App">
      <h1>useState, useEffect</h1>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>

      <hr />
      <h1>useCotext</h1>
      <p>{shincodeInfo.name}</p>
      <p>{shincodeInfo.age}</p>
    </div>
    );
}

export default App
