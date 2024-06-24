import { useState } from "react"

function App() {
  const [count, setCount] = useState(100);
  function increment() {
    let rand =  0 + (Math.random() * (100-0));
    rand = Math.floor(rand);
    setCount(rand);
  }

  return (
    <>
      <h1>Learning React</h1>
      <button onClick={increment}>Counter {count}</button>
    </>
  )
}


export default App
