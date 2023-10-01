import React from "react";
import styles from "./styles/LoginForm.module.scss";
import stylesInput from "../components/styles/Input.module.css";
import Input from "../components/Input";
import useForm from "../Hooks/useForm";
import Button from "../components/Button";
import { UserData } from "../globalContext";
import { NavLink } from "react-router-dom";
import { User } from "lucide-react";

function LoginForm() {
  const email = useForm();
  const password = useForm();
  const { getToken, error, loading } = UserData();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (email.value.length > 0 && password.value.length > 0) {
      getToken({ email: email.value, password: password.value });
    }
  };

  return (
    <div className={`${styles.loginStart} animeLeft`}>
      <h2 className="title">Login</h2>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <div>
          <Input
            type="text"
            name="email"
            login={true}
            icon={`${stylesInput.inputLoginIcon} ${stylesInput.email}`}
            label="Email"
            {...email}
          />
        </div>
        <Input
          type="password"
          name="password"
          login={true}
          icon={`${stylesInput.inputLoginIcon} ${stylesInput.passoword}`}
          label="Senha"
          {...password}
        />
        <div className={styles.loginLostPassowordButton}>
          <NavLink to="/lost" className={`${styles.lost} lostPassword`}>
            Esqueceu a senha?
          </NavLink>
          {loading ? (
            <Button disabled>Carregando...</Button>
          ) : (
            <Button>Logar</Button>
          )}
        </div>
        {error && <div>{error}</div>}
      </form>
        <NavLink className={`lostPassword ${styles.create}`} to="/authenticate/create">
          Criar conta
        </NavLink>
    </div>
  );
}

export default LoginForm;
