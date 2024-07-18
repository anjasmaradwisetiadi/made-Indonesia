import { redirect } from "react-router-dom";

export function getTokenLoader() {
    const dataStorage  = localStorage?.getItem('user') ? JSON.parse(localStorage?.getItem('user')) : null
    return dataStorage
}

export function deleteTokenLoader() {
    localStorage.removeItem('user');
}

export const checkAuthLoader = ()=>{
    const dataStorage = getTokenLoader()
    if(!dataStorage){
        return redirect('/login')
    }
    return null
}

export const tokenLoader = () =>{
    const token  = getTokenLoader();
    return token
}