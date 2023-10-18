import React, { useContext } from "react";
import './RegisterButton.css'
import AppContext from "../../../context/AppContext";

function RegisterButton(){

    const {isRegisterVisible, setIsRegisterVisible} = useContext(AppContext)

    return(
        <div className='text-center'>
            <span className='txt1'>Não possui conta?</span>
            <button 
                className="registerButton"
                onClick={() => setIsRegisterVisible(!isRegisterVisible)}
            >Registre-se
            </button>    
        </div>
    );
}

export default RegisterButton;