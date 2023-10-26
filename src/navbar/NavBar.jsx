import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar-container">
        <ul className="navbar bg-blue-300 flex justify-evenly">
        <li className="navbar-item">
            <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
            <Link to="/shippingships">Ships</Link>
        </li>
        <li className="navbar-item">
            <Link to="/haulingships">Haulers</Link>
        </li>
        <li className="navbar-item">
            <Link to="/docks">Docks</Link>
        </li>
        </ul>
    </nav>
  );
};