import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = ({ item }) => {
  return (
    <div className="nav">
      <NavLink to="/">home</NavLink>
      <NavLink to="/cart">cart{item}</NavLink>
    </div>
  );
};

export default Navbar;
