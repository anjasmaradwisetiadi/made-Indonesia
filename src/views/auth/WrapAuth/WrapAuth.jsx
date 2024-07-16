import React, { useEffect, useState } from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";
import { getTokenLoader } from '../../../utilizes/AuthCheck';
import Dashbooard from '../../dashboard/Dashboard';

const WrapAuth = (props) => {
    const {name} = props;
    let navigate = useNavigate()

    const [displayPage, setDisplayPage] = useState(null);

    useEffect(()=>{

        if(getTokenLoader()){
            if(name === 'dashboard'){
                setDisplayPage(<Dashbooard></Dashbooard>)
            } else {
                navigate('/login')
            }
        } else {
            navigate('/login')
        }
    },[name])
    return (
        <div>
            {displayPage}
        </div>
    )
}

export default WrapAuth