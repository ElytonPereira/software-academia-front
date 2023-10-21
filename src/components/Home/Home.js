import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css'

function Home () {
  
  const navigate = useNavigate();

  const logoff  =() =>{
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("NOME");
    navigate('/login')
  }

  return (
    <form>
      <div class="header">

        <text className="txt-treinos">TREINOS</text>
        
        <button onClick={logoff} 
        type="submit" 
        className="button-sair">
          <text className="txt-button-sair">SAIR</text>
        </button>
        <div className="nome-usuario"
        >
          <text className="txt-nome">Nome: {localStorage.getItem('NOME')}</text>                      
        </div>
        
      </div>
      <div className="treinos">
        <button className="button-treinoA"><text className="txt-button-treinoA">Treino A</text></button>
        <button className="button-treinoB"><text className="txt-button-treinoB">Treino B</text></button>
        <button className="button-treinoC"><text className="txt-button-treinoC">Treino C</text></button>
        <button className="button-treinoD"><text className="txt-button-treinoD">Treino D</text></button>
      </div>
      <div className="start-exercicios">
        <text className="txt-exercicios">Exercícios</text>
        <button className="start-button-treino"><text className="txt-start-button-treino">Iniciar Treino</text></button>
      </div>
      <div className="exercicios">
        
      </div>
    </form>
  );
};

export default Home;