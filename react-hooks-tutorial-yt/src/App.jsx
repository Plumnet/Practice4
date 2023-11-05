import "./App.css"

function App() {
let count = 0;

const  handleClick = () => {
  count++;
  console.log(count);
}

  return (
    <div className="App">
      <h1>UseState</h1>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>
    </div>
    );
}

export default App
