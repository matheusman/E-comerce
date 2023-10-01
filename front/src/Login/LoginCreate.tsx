import React from "react";
import styles from "./styles/LoginCreate.module.scss";
import useForm from "../Hooks/useForm";
import Input from "../components/Input";
import { UserData } from "../globalContext";
import validateCPF from "./verifyForms/validateCPF";
import Button from "../components/Button";
import PasswordTerms from "../components/PasswordTerms";

function LoginCreate() {
  const { error, createClientAcount, loading } = UserData()
  const username = useForm("username");
  const email = useForm("email");
  const password = useForm("password");
  const confirmPassword = useForm("password");
  const cpf = useForm("cpf");
  const data = useForm("data");
  const phone = useForm("phone");

  async function createUserFetch() {
    const regex = /[\D]/gi;
    const dateBrith = data.value.replace(regex, ""); //10112004
    const dia = Number(dateBrith.substring(0, 2));
    const mes = Number(dateBrith.substring(2, 4));
    const ano = Number(dateBrith.substring(4));
    const phoneEnd = phone.value.replace(regex, "");
    const cpfEnd = cpf.value.replace(regex, "");

    await createClientAcount({
      username : username.value,
      email : email.value,
      password : password.value,
      cpf : cpfEnd,
      phone : phoneEnd,
      dateBrith : new Date(ano, mes, dia)
    })
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (
      username.validate() &&
      email.validate() &&
      password.validate() &&
      password.value === confirmPassword.value &&
      cpf.validate() &&
      data.validate() &&
      phone.validate()
    ) {
      createUserFetch();
    }
  };
  
  return (
    <form className={`${styles.loginForm} animeLeft`} onSubmit={handleSubmit}>
      <h2>Create account</h2>
      <div className={styles.login}>
        <Input type="text" name="username" label="Nome" {...username} />
        <div>
          <Input
            type="password"
            name="password"
            label="Password"
            {...password}
          />
          {password.value.length > 0 && (
            <PasswordTerms value={password.value} />
          )}
        </div>
        <Input
          type="password"
          name="passwordLine"
          label="Confirmar senha"
          {...confirmPassword}
        />
        <Input type="email" name="email" label="Email" {...email} />
        <Input type="text" name="cpf" id="cpf" label="CPF" {...cpf} />
        <Input type="text" name="data" label="Data de nascimento" {...data} />
        <Input
          type="text"
          name="phone"
          id="phone"
          label="Telefone"
          {...phone}
        />
      </div>

      {error && <div className={error}>error</div>}
      
      {loading ? <Button disabled>Carregando...</Button> : <Button>Criar Conta</Button>}
      
    </form>
  );
}

export default LoginCreate;
