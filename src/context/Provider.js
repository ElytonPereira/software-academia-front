import React, { useState } from "react";
import AppContext from "./AppContext";
import propTypes from "prop-types";

function Provider({children}){
    const [isRegisterVisible, setIsRegisterVisible] = useState(false)
    const [isExerciciosVisible, setExerciciosVisible] = useState(false);
    const [treinoSelecionado, setTreinoSelecionado] = useState(null);

    const value ={
        isRegisterVisible,
        setIsRegisterVisible,
        treinoSelecionado,
        setTreinoSelecionado,
        isExerciciosVisible,
        setExerciciosVisible
    }

    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );

}

export default Provider;

Provider.propTypes = {
  children:  propTypes.any
}.isRequired;
