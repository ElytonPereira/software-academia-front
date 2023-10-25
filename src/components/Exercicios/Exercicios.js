import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import "./Exercicios.css"

function Exercícios(){
    
    const {treinoSelecionado} = useContext(AppContext);
    const {isExerciciosVisible} = useContext(AppContext);

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

      const filtrarTreinosPorNome = () => {
        if (!treinoSelecionado) {
          return treinos; // Retorna todos os treinos se nenhum estiver selecionado.
        }
        return treinos.filter((treino) => treino.nome === treinoSelecionado);
      };
    
return( 

    <form onSubmit={(e) => e.preventDefault()}>
        <section className={`exercicios ${isExerciciosVisible ? 'exercicios--active' : ''}`}>
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

        </section>


    </form>


) 


}

export default Exercícios;