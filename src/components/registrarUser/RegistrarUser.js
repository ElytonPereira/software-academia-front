import React, { useContext, useState } from "react";
import './RegistrarUser.css'
import AppContext from "../../context/AppContext";
import {BiExit} from "react-icons/bi"
import {GiStrongMan} from "react-icons/gi"
function RegistrarUser(){

    const API = "http://localhost:9090"

    const {isRegisterVisible, setIsRegisterVisible} =useContext(AppContext);
    const [login, setLogin] = useState("")
    const [senha, setSenha] = useState("")
    const [nome, setNome] =useState("")

    const handleSubmit = async (e) =>{
      e.preventDefault()
      
      const data = {
        senha,
        nome,
        login,
        
      }
  
      await fetch(API + "/criarconta", {
        method: "POST",
        body: JSON.stringify(data),
        headers:{
          "Content-Type": "application/json"
        }
      }
      )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na solicitação: ' + response.json);
        }
        return  console.log('Usuario criado' + response.text());
      })
      .then((data) => {
        // Sucesso: faça algo com os dados
      })
      .catch((error) => {
        console.error('Erro na solicitação:', error);
      })
      
    }

    return(
      <form onSubmit={(e) => e.preventDefault()}>
        
        <section className={`register ${isRegisterVisible ? 'register--active' : ''}`}>
            <button 
              className="buttonExitRegister"
              onClick={() => setIsRegisterVisible(!isRegisterVisible)}>
                <BiExit/>
                </button>            
            <span className="register-title">Registre-se</span>
            <span className="iconStrong"><GiStrongMan/></span>
            <div className='wrap-input'>
              <input 
              className ={login !== "" ? 'has-val input' : 'input'} 
              type='login'
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              />
              <span 
                className='focus-input' 
                data-placeholder='Login'
                value={login}
                ></span>
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

            <div className='wrap-input'>
              <input 
              className={nome !== "" ? 'has-val input' : 'input'} 
              type='nome'
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              />
              <span className='focus-input' data-placeholder='Nome'></span>
            </div>

            <div className='container-login-form-btn'>
              <button className='login-form-btn' type="submit" onClick={handleSubmit}>Registrar</button>
            </div>

        </section>
      </form>
    )

}

export default RegistrarUser;