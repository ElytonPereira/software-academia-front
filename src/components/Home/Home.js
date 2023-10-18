import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css'

function Home () {
  
  const navigate = useNavigate();

  const logoff  =() =>{
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("NOME");
  }

  return (
    <form>
      <div class="header">
    <h1>TREINOS</h1>
    <button className="buttonExit" Text="Sair" onClick={() => [logoff, navigate("/")]}>
              Sair
            </button>
  </div>
  
  <div class="separator"></div>
  
  <div class="bottom-section">
    
            <div>{localStorage.getItem("TOKEN")};</div>
  </div>
    </form>
  );
};

export default Home;