import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="profile-left">
       <h1 className="home-title">FinCalls</h1>
      </div>

      <div className="profile-right">
        <ul className="navitems">
          <li>
            <NavLink
              exact
              to="/home"
              className="nav-link"
              activeClassName="active"
            >
              HOME
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className="nav-link" activeClassName="active">
              ABOUT
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className="nav-link"
              activeClassName="active"
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
