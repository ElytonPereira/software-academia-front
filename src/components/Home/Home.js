import React, { useContext} from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import AppContext from "../../context/AppContext";
import Exercícios from "../Exercicios/Exercicios";

function Home() {
  const navigate = useNavigate();

  const logoff = () => {
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("NOME");
    navigate("/login");
  };

  

  const {setTreinoSelecionado} = useContext(AppContext);
  const {isExerciciosVisible, setExerciciosVisible} = useContext(AppContext);

  

  return (
    <main>
      <form onSubmit={(e) => e.preventDefault()}>
        <div class="header">
          <text className="txt-treinos">TREMBOTREINO</text>

          <button onClick={logoff} type="submit" className="button-sair">
            <text className="txt-button-sair">SAIR</text>
          </button>
          <div className="nome-usuario">
            <text className="txt-nome">
              Nome: {localStorage.getItem("NOME")}
            </text>
          </div>
        </div>

        <div className="treinos">
          <button
            className="button-treinoA"
            onClick={() => setTreinoSelecionado("Treino A") + setExerciciosVisible(!isExerciciosVisible)}
          >
            <text className="txt-button-treinoA">Treino A</text>
          </button>
          <button
            className="button-treinoB"
            onClick={() => setTreinoSelecionado("Treino B") + setExerciciosVisible(!isExerciciosVisible)}            
          >
            <text className="txt-button-treinoB">Treino B</text>
          </button>
          <button
            className="button-treinoC"
            onClick={() => setTreinoSelecionado("Treino C") + setExerciciosVisible(!isExerciciosVisible)}
          >
            <text className="txt-button-treinoC">Treino C</text>
          </button>
        </div>
        
        <div className="exercicios">
        <Exercícios/>
        
   
        </div>
      </form>
    </main>
  );
}

export default Home;


