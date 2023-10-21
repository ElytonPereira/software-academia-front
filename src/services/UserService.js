
export default class UserServices {
   
    usuarioAutenticado () {      
      console.log(localStorage.getItem("TOKEN"))
      
      return localStorage.getItem("TOKEN") !== undefined ? true :false
      // return typeof localStorage.getItem("token")
    }
  
    
    
  }