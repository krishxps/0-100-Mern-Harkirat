/* eslint-disable react/prop-types */
import { useState } from "react"

function App() {
  const [count, setCount] = useState(100);

  return (
    <div>
      <h1>Click to generate random number</h1>
      <CustomButton count={count} setCount={setCount} />
    </div>
  )
}

function CustomButton(props) {
  function increment() {
    let rand = 0 + (Math.random() * (100 - 0));
    rand = Math.floor(rand);
    props.setCount(rand);
  }
  return <button onClick={increment}>Counter {props.count}</button>
}

export default App
