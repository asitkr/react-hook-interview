import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState("");

  useEffect(() => {
    if(flag) {
      console.log("useEffect " + count);
    }
  })

  const increaseData = () => {
    setFlag(true);
    setCount(count + 1);
  }

  const decreaseData = () => {
    if(count > 0){
      setFlag(false);
      setCount(count - 1);
    }
  }

  return (
    <div className="App">
      <h1>Hook Count : {count}</h1>
      <button onClick={increaseData}>Upadate Data</button>
      <button onClick={decreaseData}>UpadateCount</button>
    </div>
  );
}

export default App;
