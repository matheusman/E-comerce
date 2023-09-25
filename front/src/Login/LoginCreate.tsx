import React from "react";
import styles from "./styles/LoginForm.module.css";
import useForm from "../Hooks/useForm";
import Input from "../components/Input";
import { UserData } from "../globalContext";
import validateCPF from "./verifyForms/validateCPF";

function LoginForm() {

  const username = useForm('username');
  const email = useForm('email');
  const password = useForm('password');
  const confirmPassword = useForm('password')
  const cpf = useForm('cpf')
  const data = useForm('data')
  const phone = useForm('phone')

  const handleSubmit : React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
  }
  
  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <h2>Create account</h2>
      <div className={styles.login}>
        <Input type="text" name="username" label="Nome" {...username}/>
        <Input type="email" name="email" label="Email" {...email}/>
        <Input type="password" name="password" label="Password" {...password}/>
        <Input type="password" name="password" id="passwordLine" label="Confirmar senha" {...confirmPassword}/>
        <Input type="text" name="cpf" maxLength={14} label="CPF" {...cpf}/>
        <Input type="text" name="data" label="Data de nascimento" {...data}/>
        <Input type="text" name="phone" label="Telefone" {...phone}/>
      </div>
    </form>
  );
}

export default LoginForm;
