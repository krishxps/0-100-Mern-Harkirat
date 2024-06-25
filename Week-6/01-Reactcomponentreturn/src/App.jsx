/* eslint-disable react/prop-types */
import { useState } from 'react'
import './App.css'
function App() {
  const [title,changeTitle] = useState("Hi bro")
  return (
    <div> 
      <Button changeTitle={changeTitle}></Button>
      <Header title={title}></Header>
      <Header title="Title 2nd"></Header>
    </div>
  )
}
function Button({changeTitle}){
  return <button onClick={() => changeTitle(Math.floor(Math.random() * 100))}>Click me to change Title</button>;
}
function Header({title}){
  return <div>{title}</div>
}

export default App
