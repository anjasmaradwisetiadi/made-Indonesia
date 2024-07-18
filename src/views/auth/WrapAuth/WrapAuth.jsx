import React, { useEffect, useMemo, useState } from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";
import { getTokenLoader } from '../../../utilizes/AuthCheck';
import Dashbooard from '../../dashboard/Dashboard';
import Navbar from '../../../components/navbar/Navbar';

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
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <div className='container'>
                {displayPage}
            </div>
        </div>
    )
}

export default WrapAuth