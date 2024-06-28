/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
// import React, { useState } from 'react'

////////////////////////////////////////////////////////////////////////////////
//  Re-Render
////////////////////////////////////////////////////////////////////////////////
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

////////////////////////////////////////////////////////////////////////////////
//  Re-Render - Better Way
////////////////////////////////////////////////////////////////////////////////
// function App(){
//   return <>
//     <HeaderWithButton/>
//     <Header title="IDK" />
//     <Header title="I am Sure" />
//   </>
// }

// // This Will Prevent For re-rendering whole page insted it will render only this object
// function HeaderWithButton(){
//   const [title,changeTitle] = useState("This will Change when you click on button");
//   return <>
//     <button onClick={()=>changeTitle(Math.floor(Math.random() * 100))}>
//       Click To change
//     </button>
//     <Header title={title}></Header>
//   </>
// }

// // memo lets you skip re-rendering a component when its props are unchanged.
// const Header = React.memo(function Header({title}){
//   return <div>{title}</div>
// });

////////////////////////////////////////////////////////////////////////////////
//  Keys in React
////////////////////////////////////////////////////////////////////////////////
// let counter = 3;
// function App() {
//   const [todo, setTodo] = useState([{
//     id: 1,
//     title: "Go to gym",
//     description: "Go to gym Today"
//   },
//   {
//     id: 2,
//     title: "Lol",
//     description: "Go to gym Today Lol"
//   }, {
//     id: 3,
//     title: "Hahahah",
//     description: "Go to gym Today Hahahah"
//   }]);

//   function addTodo() {
//     setTodo([...todo,{
//       id: ++counter,
//       title: Math.random(),
//       description: Math.random()
//     }])
//   }

//   return <>
//     <button onClick={addTodo}>Add Todo</button>
//     {/* We need key to uniquely identify each component so in future react can figure what to change so when state change it can help in re-rendering*/}
//     {todo.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>)}
//   </>
// }

// function Todo({ title, description }) {
//   return <div>
//     <h1>
//       {title}
//     </h1>
//     <h4>
//       {description}
//     </h4>
//   </div>
// }

////////////////////////////////////////////////////////////////////////////////
//  Fake Wrapper 
////////////////////////////////////////////////////////////////////////////////
// function App(){
//     return <div>
//         <CardWarapper InnerComponent={WhoKnows} />
//         <CardWarapper InnerComponent={TextComponent} />
//     </div>
// }
// function TextComponent(){
//     return <div>
//         Hi there
//     </div>
// }

// function WhoKnows(){
//     return <div>
//         From Who Knows
//     </div>
// }

// function CardWarapper({InnerComponent}){
//     return <div style={{border:'2px solid black'}} >
//         <InnerComponent />
//     </div>
// }

////////////////////////////////////////////////////////////////////////////////
//  Real - Wrapper 
////////////////////////////////////////////////////////////////////////////////
function App(){
    return <div>
        <CardWrapper>
            <CardWrapper>
                LOL
            </CardWrapper>
                <Something />
            <CardWrapper>
                Hi there
            </CardWrapper>
        </CardWrapper>
    </div>
}

function CardWrapper({children}){
    return <div style={{border:"2px solid black",padding: 20,textAlign:"center"}}>
        {children}
    </div>
}

function Something(){
    return <>
        <h2 style={{textAlign: "center"}}>Something</h2>
    </>
}
export default App
