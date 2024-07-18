// ********** make example service when it can example code used
import { instanceAxios } from "../utilizes/initializeAxios";
import { deleteTokenLoader, getTokenLoader } from "../utilizes/AuthCheck";

export const authLogin = async (payload) =>{
        return await instanceAxios.post('login',
            payload
        )
        .then((response)=>{
            localStorage.setItem('user', JSON.stringify(response.data.data))
            return response.data.data
        })
        .catch((error)=>{
            console.log("error message = ");
            console.log(error);
        })
}

export const authLogout = async (payload) =>{

    return await instanceAxios.post('logout', 
            payload
        )
        .then((response)=>{
            return response.data.status
        })
        .catch((error)=>{
            console.log("error message = ");
            console.log(error)
        })
}

