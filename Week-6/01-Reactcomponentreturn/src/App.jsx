/* eslint-disable react/prop-types */
import React ,{ useState } from 'react'
import './App.css'
// function App() {
//   const [title,changeTitle] = useState("Hi bro");
//   const [second,changeSecond] = useState("How are you?");

//   function changeSecTitle(){
//     const Random = Math.floor(Math.random() * 100);
//     changeSecond("My Name is " + Random);
//   }
//   return (
//     <React.Fragment> 
//       <Button changeTitle={changeTitle}></Button>
//       <button onClick={changeSecTitle}>Update second Title</button>
//       <Header title={title}></Header>
//       <Header title={second}></Header>
//     </React.Fragment>
//   )
// }
// function Button({changeTitle}){
//   return <button onClick={() => changeTitle(Math.floor(Math.random() * 100))}>
//     Click me to change Title
//   </button>;
// }
// function Header({title}){
//   return <div>{title}</div>
// }
function App(){
  return <>
    <HeaderWithButton/>
    <Header title="IDK" />
    <Header title="I am Sure" />
  </>
}

// This Will Prevent For re-rendering whole page insted it will render only this object
function HeaderWithButton(){
  const [title,changeTitle] = useState("This will Change when you click on button");
  return <>
    <button onClick={()=>changeTitle(Math.floor(Math.random() * 100))}>
      Click To change
    </button>
    <Header title={title}></Header>
  </>
}

// memo lets you skip re-rendering a component when its props are unchanged.
const Header = React.memo(function Header({title}){
  return <div>{title}</div>
});

export default App
