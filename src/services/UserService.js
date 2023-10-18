
export default class UserServices {
   
    usuarioAutenticado () {      
      console.log(localStorage.getItem("TOKEN"))
      const validarToken = localStorage.getItem("TOKEN").length >20
      return validarToken ? true : false
      // return typeof localStorage.getItem("token")
    }
  
    
    
  }