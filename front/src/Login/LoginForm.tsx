import React from "react";
import styles from "./styles/LoginForm.module.css";
import Input from "../components/Input";
import useForm from "../Hooks/useForm";
import Button from "../components/Button";
import { UserData } from "../globalContext";

function LoginForm() {
  const email = useForm();
  const password = useForm();
  const { getToken, error, loading } = UserData()

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (email.value.length > 0 && password.value.length > 0) {
        getToken({email: email.value, password : password.value})
      }
  };

  return (
    <div className={styles.loginStart}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <Input type="text" name="email" label="Email" {...email} />
        <Input type="password" name="password" label="Senha" {...password} />
        {loading ? <Button disabled>Carregando...</Button>: <Button>Logar</Button>}
        {error && <div>{error}</div>}
      </form>
    </div>
  );
}

export default LoginForm;
