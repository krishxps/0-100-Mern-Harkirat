import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Signup} from "./pages/Signup"
import {Signin} from "./pages/Signin"
import {Dashboard} from "./pages/Dashboard"
import {SendMoney} from "./pages/Send"
import { Suspense } from "react"

function App() {

return <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={navigator.onLine ? <Signup /> : <Signup />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Suspense fallback={<div>Loading...</div>}> <Signin /></Suspense>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/send" element={<SendMoney />} />
    </Routes>
  </BrowserRouter>
</>
}

export default App