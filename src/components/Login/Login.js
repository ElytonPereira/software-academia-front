import { useState } from 'react';
import jpImg from '../../assets/jp.svg'
import './Login.css'
import RegisterButton from '../RegisterButton/RegisterButton';

function Login() {

  const [login, setLogin] = useState("")
  const [senha, setSenha] = useState("")


  return (
    <div className="container"> 
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form" onSubmit={(e) => e.preventDefault()}>

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
              type='senha'
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              />
              <span className='focus-input' data-placeholder='Senha'></span>
            </div>

            <div className='container-login-form-btn'>
              <button className='login-form-btn'>Login</button>
            </div>
            <RegisterButton/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
