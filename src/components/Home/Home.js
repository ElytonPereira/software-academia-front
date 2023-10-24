import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const logoff = () => {
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("NOME");
    navigate("/login");
  };

  const treinos = [
    {
      id: 1,
      nome: "Treino A",
      tipo: "Pull - Peito e triceps",
      series: "3",
      repeticoes: "8-12",
      exercicios: [
        "Supino reto com barra",
        "Supino inclinado com halteres",
        "Crucifixo na polia",
        "Desenvolvimento com halteres",
        "Elevação lateral na polia",
        "Triceps corda, Rosca francesa",
      ],
    },
    {
      id: 2,
      nome: "Treino B",
      tipo: "Push - Costas e biceps",
      series: "3",
      repeticoes: "8-12",
      exercicios: [
        "Barra fixa",
        "Remada curvada",
        "Pull down",
        "Encolhimento com barra",
        "Crucifixo invertido na polia",
        "Rosca direta",
        "Rosca inversa",
      ],
    },
    {
      id: 3,
      nome: "Treino C",
      tipo: "Legs",
      series: "3",
      repeticoes: "8-12",
      exercicios: [
        "Agachamento livre",
        "Leg press",
        "Stiff",
        "Passada",
        "Mesa flexora",
        "Cadeira extensora",
        "Panturrilhas em pé",
        "Panturrilhas",
        "sentado",
      ],
    },
    // Adicione mais treinos conforme necessário
  ];

  const [treinoSelecionado, setTreinoSelecionado] = useState(null);

  const filtrarTreinosPorNome = () => {
    if (!treinoSelecionado) {
      return treinos; // Retorna todos os treinos se nenhum estiver selecionado.
    }
    return treinos.filter((treino) => treino.nome === treinoSelecionado);
  };

  return (
    <main>
      <form onSubmit={(e) => e.preventDefault()}>
        <div class="header">
          <text className="txt-treinos">TREINOS</text>

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
            onClick={() => setTreinoSelecionado("Treino A")}
          >
            <text className="txt-button-treinoA">Treino A</text>
          </button>
          <button
            className="button-treinoB"
            onClick={() => setTreinoSelecionado("Treino B")}
          >
            <text className="txt-button-treinoB">Treino B</text>
          </button>
          <button
            className="button-treinoC"
            onClick={() => setTreinoSelecionado("Treino C")}
          >
            <text className="txt-button-treinoC">Treino C</text>
          </button>
        </div>

        <div className="exercicios">
          
          <button className="start-button-treino">
            <text className="txt-start-button-treino">Iniciar Treino</text>
          </button>
          {filtrarTreinosPorNome().map((treino) => (
              <div key={treino.id} className="exercicios-list">                
                <p>Tipo: {treino.tipo}</p>
                <p>Series: {treino.repeticoes}</p>
                <h4>Exercícios:</h4>
                <ul>
                  {treino.exercicios.map((exercicio, index) => (
                    <li key={index}>{exercicio}</li>
                  ))}
                </ul>
              </div>
            ))}
          <div>
            
            
          </div>
        </div>
      </form>
    </main>
  );
}

export default Home;


