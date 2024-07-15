// ********** make example service when it can example code used
import instanceAxios from "utilize/instanceAxios";

export const authLogin = (payload) =>{
    return async (dispatch) =>{
        await instanceAxios.post('login',
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

