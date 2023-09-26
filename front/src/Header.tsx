import React from "react";
import styles from "./styles/Header.module.css";
import { Link } from "react-router-dom";
import Search from './components/Search'
import ButtonSearch from "./components/ButtonSearch";


export type focusSearch = {
  focus : boolean;
  setFocus : React.Dispatch<React.SetStateAction<boolean>>;
}

function Header() {
  
  const [focus, setFocus] = React.useState<boolean>(false);

  return (
    <div>
      
      <form className={styles.header}>
        <div></div>
        <div className={styles.flex}>
          <Search focus={focus} setFocus={setFocus}/>
          <ButtonSearch focus={focus} setFocus={setFocus} />
        </div>
        <div></div>
      </form>
    </div>  
  );
}

export default Header;
