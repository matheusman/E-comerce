import React from "react";
import styles from "./styles/LoginForm.module.css";
import Input from "../components/Input";
import useForm from "../Hooks/useForm";
import Button from "../components/Button";
import useFetch from "../Hooks/useFetch";
import { GET_TOKEN, GET_USER_POST } from "../api";

type getToken = {
  token : string;
}

function LoginForm() {
  const email = useForm();
  const password = useForm();


  React.useEffect( () => {
    const token = window.localStorage.getItem('token')
    if (token) {
      getUser(JSON.parse(token))
    }
  }, [])

   const getUser = async function (token : string) {
    const {url, options} = GET_USER_POST(token)
    const response = await fetch(url, options);
    const json = await response.json()
    console.log(json)
   } 

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (email.value.length > 0 && password.value.length > 0) {
        const { url , options} = GET_TOKEN({ email : email.value, password : password.value})

        const responseGetToken = async (url : string, options : RequestInit | undefined) => {
          const response = await fetch(url, options);
          const json = await response.json() as getToken
          window.localStorage.setItem('token', JSON.stringify(json.token))
        };
        responseGetToken(url, options)
      }
  };

  return (
    <div className={styles.loginStart}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <Input type="text" name="email" label="Email" {...email} />
        <Input type="password" name="password" label="Senha" {...password} />
        <Button>Logar</Button>
      </form>
    </div>
  );
}

export default LoginForm;
