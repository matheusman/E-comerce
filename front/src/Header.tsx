import React from "react";
import styles from "./styles/Header.module.css";
import Input from "./components/Input";
import useForm from "./Hooks/useForm";
import Button from "./components/Button";
import { Link } from "react-router-dom";
import { Search } from 'lucide-react';


function Header() {
  
  return (
    <div>
      
      <form className={styles.grid}>
        <Link to="/"><Button id="e" className={styles.button}><Search width='20px'/></Button></Link>
      </form>
    </div>  
  );
}

export default Header;
