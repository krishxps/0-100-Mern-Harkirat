import './App.css'
import { useEffect } from 'react';

function App() {
  return (
    <>
      <MyComponent />
    </>
  )
}


function MyComponent() {
  useEffect(() => {
    // First time this will run
    console.error('Component mounted');

    // This will run at second time and after every re-render
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  return <div>My Component</div>;
}
export default App
