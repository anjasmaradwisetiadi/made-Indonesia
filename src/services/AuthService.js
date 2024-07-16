// ********** make example service when it can example code used
import { instanceAxios } from "../utilizes/initializeAxios";

export const authLogin = (payload) =>{
    return async (dispatch) =>{
        await instanceAxios.post('login',
            payload
        )
        .then((response)=>{
            console.log("response login = ");
            console.log(response)
        })
        .catch((error)=>{
            console.log("error message = ");
            console.log(error)
        })
    }
}

export const authLogout = (payload) =>{
    return async (dispatch) =>{
        await instanceAxios.post('logout', 
            payload
        )
        .then((response)=>{
            console.log("response = ");
            console.log(response)
        })
        .catch((error)=>{
            console.log("error message = ");
            console.log(error)
        })
    }
}

