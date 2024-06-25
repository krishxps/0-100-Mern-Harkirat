/* eslint-disable react/prop-types */
import React ,{ useState } from 'react'
import './App.css'
function App() {
  const [title,changeTitle] = useState("Hi bro");
  const [second,changeSecond] = useState("How are you?");

  function changeSecTitle(){
    const Random = Math.floor(Math.random() * 100);
    changeSecond("My Name is " + Random);
  }
  return (
    <React.Fragment> 
      <Button changeTitle={changeTitle}></Button>
      <button onClick={changeSecTitle}>Update second Title</button>
      <Header title={title}></Header>
      <Header title={second}></Header>
    </React.Fragment>
  )
}
function Button({changeTitle}){
  return <button onClick={() => changeTitle(Math.floor(Math.random() * 100))}>
    Click me to change Title
  </button>;
}
function Header({title}){
  return <div>{title}</div>
}

export default App
