const validRegister = (email, password, field) => {
  // onChange Email ===================
  if (field === 'email') {
    if (!email) {
      return {
        emailMessage: 'Por favor, insira seu e-mail',
      };
    }
    if (!validateEmail(email)) {
      return {
        emailMessage: 'E-mail inválido',
      };
    }
    return {
      emailMessage: '',
    };
  }

  // onChange Password ===================
  if (field === 'password') {
    if (!password) {
      return {
        passwordMessage: 'Por favor, insira uma senha',
      };
    }
    if (password.length < 6) {
      return {
        passwordMessage: 'A senha deve conter pelo menos 6 caracteres',
      };
    }
    return {
      passwordMessage: '',
    };
  }

  // onChange Form ===================
  if (!email && !password) {
    return {
      emailMessage: 'E-mail incorreto',
      passwordMessage: 'Insira uma senha',
    };
  }

  if (!email) {
    return {
      emailMessage: 'Por favor, preencha seu e-mail',
      passwordMessage: '',
    };
  }

  if (!password) {
    return {
      emailMessage: '',
      passwordMessage: 'Por favor, preencha sua senha',
    };
  }

  if (!validateEmail(email)) {
    return {
      emailMessage: 'Por favor preencha um email valido',
      passwordMessage: '',
    };
  }

  if (password.length < 6) {
    return {
      emailMessage: '',
      passwordMessage: 'A senha deve conter pelo menos 6 caracteres',
    };
  }

  return {
    emailMessage: '',
    passwordMessage: '',
  };
};

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default validRegister;
