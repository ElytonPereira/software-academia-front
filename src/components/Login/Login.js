import { useState } from 'react';
import jpImg from '../../assets/jp.svg'
import './Login.css'
import RegisterButton from '../registrarUser/RegisterButton/RegisterButton';
import {useNavigate } from 'react-router-dom'
import { validarLogin, validarSenha } from '../../Utils/validadores';


function Login() {

  const [login, setLogin] = useState("")
  const [senha, setSenha] = useState("")
  const [token, setToken] = useState("")
  
  const navigate = useNavigate();


  const API = "http://localhost:9090"

  const handleSubmit = async (e) =>{
    e.preventDefault()
    
    const data = {
      senha,
      login      
    }

    console.log(JSON.stringify(data));

    await fetch(API + "/auth", {      
      method: "POST",
      body: JSON.stringify(data),
      headers:{
        "Content-Type": "application/json", 
      },
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro na solicitação: '  + console.log(response.text()));
      }

      return response.json(); 
      })
    .then((data) => {      
      console.log("Retorno ", data);      
      setToken(data); //MANDANDO O JSON PARA A VARIAVEL
      
      if(data !== 'undefined'){
        localStorage.setItem("TOKEN", data.token);
        localStorage.setItem("NOME", login);
        console.log('quero ver22222' + data.token )
        alert('Usuario: ' + login +  ' logado com sucesso')
        navigate('/home')  
        console.log('Autentição realizada: ' + localStorage.getItem("TOKEN")); 
      } 
    })
    .catch((error) => {
      
      console.error('Erro na solicitação:', error);
    })
    
  }

  const validadorInput = () => {
    return validarLogin(login) && validarSenha(senha)
  }

  return (
    <div className="container"> 
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form" onSubmit={(e) => e.preventDefault()} >

            <span className="login-form-title">Bem vindo!</span>
            <span className="login-form-title"><img src={jpImg} alt="Imagem"/></span>

            <div className='wrap-input'>
              <input 
              className ={login !== "" ? 'has-val input' : 'input'} 
              type='login'
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              />
              <span className='focus-input' data-placeholder='Login'></span>
            </div>

            <div className='wrap-input'>
              <input 
              className={senha !== "" ? 'has-val input' : 'input'} 
              type='password'
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              />
              <span className='focus-input' data-placeholder='Senha'></span>
            </div>
             <div>{token.token}</div>
            <div className='container-login-form-btn'>
              <button className='login-form-btn' 
              disabled={!validadorInput()}
              onClick={handleSubmit}>Login</button>
              
            </div>
            <RegisterButton/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;