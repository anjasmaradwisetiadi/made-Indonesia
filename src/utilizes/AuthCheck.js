import { redirect } from "react-router-dom";

export function getTokenLoader() {
    const dataStorage  = true;
    return dataStorage
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