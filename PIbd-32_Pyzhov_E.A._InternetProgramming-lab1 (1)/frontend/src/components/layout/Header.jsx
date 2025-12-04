import { NavLink } from "react-router-dom";
import logo from "../../img/logo2.png"; 

export default function Header() {
  return (
    <header className="bg-primary py-2">
      <div className="container d-flex justify-content-between align-items-center">
        <NavLink to="/">
          <img src={logo} alt="Логотип" width="65" height="65" />
        </NavLink>
        <nav className="nav">
          <NavLink className="nav-link text-white" to="/profile">
            Мой профиль
          </NavLink>
          <NavLink className="nav-link text-white" to="/friends">
            Друзья
          </NavLink>
         
        </nav>
      </div>
    </header>
  );
}
