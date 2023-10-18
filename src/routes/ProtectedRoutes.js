import React from "react";
import UserServices from "../services/UserService";
import Routering from "./routes";


const userServices = new UserServices();

const ProtectedRoutes = ({children}) => {

    const usuarioAutenticado = userServices.usuarioAutenticado();
    console.log('usuarioAutenticado : ', usuarioAutenticado)
    return usuarioAutenticado ? children : <Routering/>
}

export default ProtectedRoutes;