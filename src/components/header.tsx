import { Link } from 'react-router-dom';
import "./header.scss";

function Header() {
  return (
    <header className="header">
      <Link data-testid="todo-link" className="header-item" to="/">To Do List</Link>
      <Link data-testid="completed-link" className="header-item" to="/completed">Completed List</Link>
      <Link data-testid="deleted-link" className="header-item" to="/deleted">Deleted List</Link>
    </header>
  );
}

export default Header;