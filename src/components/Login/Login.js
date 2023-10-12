import { useState } from 'react';
import jpImg from '../../assets/jp.svg'
import './Login.css'
import RegisterButton from '../RegisterButton/RegisterButton';

function Login() {

  const [login, setLogin] = useState("")
  const [senha, setSenha] = useState("")
  const [respostaApi, setRespostaApi] = useState("")

  const API = "http://localhost:9090"

  const handleSubmit = async (e) =>{
    e.preventDefault()
    
    const data = {
      senha,
      login
      
    }

    await fetch(API + "/auth", {
      method: "POST",
      body: JSON.stringify(data),
      headers:{
        "Content-Type": "application/json"
      }
    }
    )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro na solicitação: '  + console.log(response.text()));
      }
          
      return response.text();    

    })
    .then((respostaText) => {      
      const repostaConvertida = JSON.parse(respostaText); //CONVERTENDO A RESPOSTA PARA EM JSON
      setRespostaApi(repostaConvertida); //MANDANDO O JSON PARA A VARIAVEL
      console.log('Autentição realizada');      
      
    })
    .catch((error) => {
      console.error('Erro na solicitação:', error);
    })
    
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
              type='senha'
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              />
              <span className='focus-input' data-placeholder='Senha'></span>
            </div>
             <div>{respostaApi.token}</div> 
            <div className='container-login-form-btn'>
              <button className='login-form-btn' onClick={handleSubmit}>Login</button>
            </div>
            <RegisterButton/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
