import axios from "axios"
import Swal from "sweetalert2"

export const errorHandle = {
  errorMessage(text = 'Something wrong please contact your admin'){
    Swal.fire({
      title: "Something Wrong",
      text: text,
      icon: "error",
    })
  },

  sessionExpired(text){
    Swal.fire({
      title: "Warning",
      text: text,
      icon: "warning",
    })
  },

  logOut(){
    localStorage.removeItem('user');
    window.location.href = "/authentication/sign-in";
  }, 
}


export const responseMessage = {
  ACCESS_TOKEN_EXPIRED: "token has been expired",
  REFRESH_TOKEN_EXPIRED: "refresh token has been expired",
}
