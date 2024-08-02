import React, { useEffect, useState } from 'react';
import { dataStore } from '../../utilizes/DataStore';
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { 
    getResponseRecorderReducer
 } from '../../stores/ReviewTest/ReviewTest';

const ReviewSubmit = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();

    const getSavedFormResponse = useSelector((state)=> state.reviewTest.savedFormResponse)
    const recordReviewTest = useSelector((state)=> state.reviewTest.recordReviewTest)

    useEffect(()=>{
        const payload = {
            dataSaveLocal: getSavedFormResponse,
            dataStore: dataStore 
        }
        dispatch(getResponseRecorderReducer(payload))
    }, [dispatch])

    const handleBack = () =>{
        navigate('/dashboard')
        window.location.reload()
    }

    return (
        <main className="h-screen flex justify-center items-center p-2 bg-gradient-to-r from-red-primary to-red-secondary font-jakarta">
            <div className='p-6 bg-white/25 backdrop-blur-md rounded-md relative max-w-lg container'>
            <>  
                <div className='w-full text-lg font-semibold z-10 pb-4 border-b mb-2'>
                    Your response has been recorded: 
                </div>
                <div className="flex flex-col gap-3 relative h-80 sm:h-80 overflow-y-auto">
                    {
                        recordReviewTest.length>0 && recordReviewTest.map((value, index)=>{
                           return ( 
                           <div className='flex flex-col px-3 justify-start relative z-0' key={index+1}>
                                <div className='flex justify-start'>
                                    {index+1} {value.question}
                                </div>
                                <div className='px-3 font-semibold'>
                                    -  {value.choices}
                                </div>
                            </div>
                            )
                        })
                    }
                    { !recordReviewTest.length && 
                        <div className='flex flex-col gap-3 relative h-80 sm:h-80 justify-center items-center text-xl font-semibold'>
                            Not Record Response
                        </div>
                    }
                </div>
                <div className='w-full flex justify-center mt-4'>
                    <button
                        className="w-full py-2 text-sm sm:text-lg font-medium text-white bg-primary rounded-md bg-green-400"
                        onClick={() => {
                            handleBack()
                        }}
                    >
                        Go to Dashboard
                    </button>
                </div>
            </>
            </div>
        </main>
    )
}

export default ReviewSubmit