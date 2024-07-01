import { useMemo } from "react";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  // It will be executed when inputValue change.
  let count = useMemo(()=>{
    let sum = 0
    for (let i = 1; i <= inputValue; i++) {
      sum += i;
    }
    return sum;
  },[inputValue]) ;

  return <div>
    <input onChange={(e) => setInputValue(e.target.value) } 
    placeholder={"Find sum from 1 to n"}></input>
    <br />
    Sum from 1 to {inputValue} is {count}
    <br />
    <button onClick={() => {
      setCounter(counter + 1);
    }}>Counter ({counter})</button>
  </div>
}

export default App;