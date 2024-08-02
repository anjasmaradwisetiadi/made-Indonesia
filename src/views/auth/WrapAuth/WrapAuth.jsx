import React, { useEffect, useMemo, useState } from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";
import Dashbooard from '../../dashboard/Dashboard';
import ReviewTest from '../../ReviewTest/ReviewTest';
import Navbar from '../../../components/navbar/Navbar';

const WrapAuth = (props) => {
    const {name} = props;
    let navigate = useNavigate()

    const [displayPage, setDisplayPage] = useState(null);

    useEffect(()=>{
        if(name === 'dashboard'){
            setDisplayPage(<Dashbooard></Dashbooard>)
        } else if(name === 'review-test'){
            setDisplayPage(<ReviewTest></ReviewTest>)
        } else {
            navigate('/')
        }
}, [])
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <div className='container'>
                {displayPage}
            </div>
        </div>
    )
}

export default WrapAuth