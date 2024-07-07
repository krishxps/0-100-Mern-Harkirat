import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Todos from './pages/Todos';
import CreateTodo from './pages/CreateTodo';
import UpdateTodo from './pages/UpdateTodo';

const App = () => (
  <AuthProvider>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/todos" component={Todos} />
        <Route path="/create-todo" component={CreateTodo} />
        <Route path="/update-todo/:id" component={UpdateTodo} />
      </Switch>
    </Router>
  </AuthProvider>
);

export default App;
