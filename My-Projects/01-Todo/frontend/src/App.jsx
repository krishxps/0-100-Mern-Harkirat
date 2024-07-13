import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginForm from './components/common/login'
import Register from './components/common/register'
import User from './components/user/user'
import Admin from './components/admin/admin'
import Main from './components/study/main'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/study' element={<Main />} />
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<User />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="*" element={<LoginForm />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
