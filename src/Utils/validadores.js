

const validarSenha = (senha) => {
  return senha !== null
}

const validarNome = (nome) => {
  return nome?.toString().length > 4
}

const validarLogin = (login) => {
  return login?.toString().length > 4
}


export {
  validarLogin,
  validarSenha,
  validarNome,
}