import { Link } from 'react-router-dom';

const Header = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/todos">Todos</Link></li>
    </ul>
  </nav>
);

export default Header;
