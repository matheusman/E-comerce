import React from "react";

type eventInput = React.ChangeEvent<HTMLInputElement>

type inputTypesRegex = {
  email: {
    regex: RegExp;
    error: string;
  };
  cpf: {
    regex: RegExp;
    error: string;
  };
  password: {
    regex: RegExp;
    error: string;
  };
  cep: {
    regex: RegExp;
    error: string;
  };
  username: {
    regex: RegExp;
    error: string;
  };
  data: {
    regex: RegExp;
    error: string;
  };
  phone: {
    regex: RegExp;
    error: string;
  };
};

const typesInput = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    error: "Email invalido",
  },

  cpf: {
    regex:
    /(?:\d{3}[-.\s]?){3}\d{2}/,
    error: "CPF invalido",
  },

  password: {
    regex: /^(?=.*[a-z])[\d\w\W]{6}$/gi,
    error: "Senha invalida",
  },
  cep: {
    regex: /^([\d]{2})\.?([\d]{3})-?([\d]{3})/,
    error: "Cep invalido",
  },
  username: {
    regex: /[a-zA-Z\u00C0-\u00FF ]+/i,
    error: "Nome invalido",
  },
  data: {
    regex: /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/,
    error: "Coloque sua data de nascimento",
  },
  phone: {
    regex: /^\(?[1-9]{2}\)? ?(?:[2-8]|9[0-9])[0-9]{3}-?[0-9]{4}$/,
    error: "Coloque somente numeros",
  },
};

export default function useForm<K extends keyof inputTypesRegex>(input?: K) {
  const [value, setValue] = React.useState<string>("");
  const [active, setActive] = React.useState<boolean>(false);
  const [error, setError] = React.useState<null | string>(null);
  const [index, setIndex] = React.useState<number>(1)

  function validate(value: string) {
    if (input === undefined) return true;
    if (typesInput[input] === undefined) return true;
    if (value.length === 0) {
      setError("Preencha um valor.");
      return false;
    } else if (!typesInput[input].regex.test(value)) {
      console.log(typesInput[input].regex.test(value));
      setError(typesInput[input].error);
      return false;
    } else {
      setError(null);
      return true;
    }
  }
  
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (error) validate(value);
    setValue(event.target.value);
  };

  const onClick: React.MouseEventHandler<HTMLInputElement> = () => {
    setActive(true);
  };

  const onBlur: React.FocusEventHandler<HTMLInputElement> = (event) => {
    validate(value);
    setActive(false);
  };

  return {
    setValue,
    value,
    onChange,
    error,
    onBlur,
    onClick,
    active,
    validate: () => validate(value),
  };
}
