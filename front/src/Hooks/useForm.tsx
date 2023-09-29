import React from "react";

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
    regex: /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}-?[0-9]{2})$/,
    error: "CPF invalido",
  },

  password: {
    regex: /^(?=.*[A-Z])(?=.*[!#@$%&])?(?=.*[0-9])(?=.*[a-z]).{6,25}$/,
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
    regex: /(\d{2}[\s/-]?){2}\d{4}$/,
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

  function validate(value: string) {
    if (input === undefined) return true;
    if (typesInput[input] === undefined) return true;
    if (value.length === 0) {
      setError("Preencha um valor.");
      return false;
    } else if (!typesInput[input].regex.test(value)) {
      setError(typesInput[input].error);
      return false;
    } else {
      setError(null);
      return true;
    }
  }


  // function dateChange (event: eventInput) { // futuro
  //   const regex = /[\D]+/gi
  //   const lastLetter = event.target.value[event.target.value.length - 1]
  //   const data = value.replace(regex, '') + lastLetter
  //   console.log(regex.test(lastLetter))
  //   if (lastLetter === 'A') {
  //     data[data.length - 1]
  //   }
  //   if (regex.test(lastLetter)) return false
  //   if (value.length === 0) {
  //     return setValue(() => 'DD/MM/AAAA'.replace('D', lastLetter))
  //   }
  //   if (data.length >= 5 ) {
  //     setValue(value.replace('A', lastLetter))
  //   } else if (data.length >= 3) {
  //     setValue(value.replace('M', lastLetter))
  //   } else {
  //     setValue(value.replace('D', lastLetter))
  //   }

  // }


  //regex data : /(\d{2}[\s-/]?){2}\d{4}/


  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
     // futuro
    if (error) validate(value);
    setValue(event.target.value);
  };

  const onClick: React.MouseEventHandler<HTMLInputElement> = () => {
    setActive(true);
  };

  const onBlur: React.FocusEventHandler<HTMLInputElement> = (event) => {
    if (input === "data") {
      if (value.length === 1 || value.length === 4) {
        return setValue(event.target.value + '/');
      }
    }
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
