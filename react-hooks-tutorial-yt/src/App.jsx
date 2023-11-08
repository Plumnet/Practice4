import { useEffect, useState, useContext , useRef} from "react";
import "./App.css";
import ShinCodeContext from "./main";

function App() {
  const [count, setCount] = useState(0);
  const shincodeInfo = useContext(ShinCodeContext);
  const ref = useRef();


const  handleClick = () => {
  setCount(count + 1);
};

useEffect(() => {
  console.log("Hello Hooks");
  //　setCount(count + 1);
}, [count]);

const handleRef = () => {
  console.log(ref);
}

  return (
    <div className="App">
      <h1>useState, useEffect</h1>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>

      <hr />
      <h1>useCotext</h1>
      <p>{shincodeInfo.name}</p>
      <p>{shincodeInfo.age}</p>

      <hr />
      <h1>useRef</h1>
      <input type="text" ref={ref} />
      <button onClick={handleRef}>UseRef</button>
    </div>
    );
}

export default App
