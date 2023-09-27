import React from "react";
import styles from "./styles/Header.module.css";
import { User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import Search from "./components/Search";
import ButtonSearch from "./components/ButtonSearch";
import logo from "./assets/logo-triangular.png";
import { UserData } from "./globalContext";

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
        <NavLink to="/" className={styles.logo}>
          <img height="60px" src={logo} />
        </NavLink>
        <div className={styles.flex}>
          <Search focus={focus} setFocus={setFocus} />
          <ButtonSearch focus={focus} setFocus={setFocus} />
        </div>
        <nav className={styles.user}>
          {data ? (
            <div className={styles.user}>
              <div>{data.username}</div>
              <button onClick={userLogout}>Sair</button>
            </div>
          ) : (
            <div>
              <NavLink to="/authenticate">Login</NavLink>
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
