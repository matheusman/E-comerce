import React from "react";
import styles from "./styles/Header.module.scss";
import { User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import Search from "./components/Search";
import ButtonSearch from "./components/ButtonSearch";
import logo from "./assets/logo-triangular.png";
import { UserData } from "./globalContext";
import map from "./assets/map.svg";
import car from "./assets/shopping-cart.svg";
export type focusSearch = {
  focus: boolean;
  setFocus: React.Dispatch<React.SetStateAction<boolean>>;
};

function Header() {
  const [focus, setFocus] = React.useState<boolean>(false);
  const { data, userLogout } = UserData();
  return (
    <div>
      <form className={styles.header}>
        <Link to="/" className={styles.logo}>
          <img height="60px" src={logo} />
        </Link>
        <div className={styles.flex}>
          <Search focus={focus} setFocus={setFocus} />
          <ButtonSearch focus={focus} setFocus={setFocus} />
        </div>
        <nav className={styles.user}>
          <Link to="/location">
            <img src={map} alt="" />
          </Link>
          <Link to="/carrinho">
            <img src={car} alt="" />
          </Link>

          {data ? (
            <div className={styles.user}>
              <div>{data.username}</div>
              <button onClick={userLogout}>Sair</button>
            </div>
          ) : (
            <div>
              <Link to="/authenticate">Login</Link>
              <NavLink to="/authenticate/create">Criar</NavLink>
            </div>
          )}
          <User />
        </nav>
      </form>
    </div>
  );
}

export default Header;
