import './App.css'
function App() {
  return (
    <div> 
      <Header title="Title"></Header>
      <Header title="Title 2nd"></Header>
    </div>
  )
}

function Header({title}){
  return <div>{title}</div>
}

export default App
