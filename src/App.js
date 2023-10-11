import React from "react";
import Login from "./components/Login/Login";
import Provider from "./context/Provider";
import RegistrarUser from "./components/registrarUser/RegistrarUser";



function App(){
    return(
        <div>
            <Provider>
             <Login/>
             <RegistrarUser/>
            </Provider>
            
        </div>
    );
}

export default App;