/* eslint-disable react/prop-types */
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button count={count} setCount={setCount} />
    </div>
  );
}

function Button(props) {
  function onButtonClick(){
    props.setCount(props.count + 1);
  }
  return <button onClick={onButtonClick}>counter {props.count}</button>
}
export default App;
