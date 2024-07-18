import React, { useEffect, useState } from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";
import { getTokenLoader } from '../../../utilizes/AuthCheck';
import Login from '../LoginPage';
const WrapNoAuth = (props) => {
    const {name} = props;
    let navigate = useNavigate()
    const [displayPage, setDisplayPage] = useState(null);

    useEffect(()=>{
        if(getTokenLoader()){
            return navigate("/dashboard")
        } else {
            return setDisplayPage(<Login></Login>)
        }
    },[])

    return (
        <div>
            {displayPage}
        </div>
    )
}

export default WrapNoAuth