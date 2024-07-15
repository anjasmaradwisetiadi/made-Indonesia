// ********** make example service when it can example code used
import instanceAxiosFake from "utilize/instanceAxios";

export const getAllProduct = () =>{
    return async (dispatch) =>{
        await instanceAxiosFake.get('https://fakestoreapi.com/products')
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