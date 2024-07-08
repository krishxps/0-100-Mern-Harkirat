// ------------------------------------------------------------------------------
// Single Page Application
// ------------------------------------------------------------------------------

// import './App.css'
// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
// import Firstpage from './components/firstpage';
// import Secondpage from './components/secondpage';
// import Header from './components/header';

// function App() {
//   // React is single page application
//   return (
//     <BrowserRouter>
//      <Header />
//       <ButtonForPage />
//       <Routes>
//         <Route path="/" element={<Firstpage />} />
//         <Route path="/secondpage" element={<Secondpage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// // As useNavigate need to be inside BrouserRouter We need to wrap it inside a function
function ButtonForPage(){
  const change = useNavigate();
  return <div>
    <button onClick={() => change("/")}>Go to First Page</button>
    <button onClick={() => change("/secondpage")}>Go to Second Page</button>
  </div>
}

// ------------------------------------------------------------------------------
// Lazy Loading - Will send the component only when it is needed
// ------------------------------------------------------------------------------

import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/header";
const Firstpage = lazy(() => import("./components/firstpage"));
const Secondpage = lazy(() => import("./components/secondpage"));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ButtonForPage />
      <Routes>
        <Route
          path="/"
          element={
            // Suspense will prevent the component from loading until it is needed as it is asynchronous
            <Suspense fallback={<div>Loading...</div>}>
              <Firstpage />
            </Suspense>
          }
        />
        <Route
          path="/secondpage"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Secondpage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
