import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const ErrorPage = () =>{
    const navigate = useNavigate();
    const handleBack = () =>{
        navigate('/')
    }
    return(
        <main className="h-screen flex justify-center items-center p-2 bg-gradient-to-r from-red-primary to-red-secondary font-jakarta">
            <div className="p-6 bg-white/25 backdrop-blur-md rounded-md relative max-w-lg container">
                <div className="flex justify-center text-2xl font-bold">
                    Error Page
                </div>
                <div className="mt-6 flex w-full justify-center items-center">
                    <button
                        className="px-4 py-2 text-sm sm:text-lg font-medium text-white bg-primary rounded-md bg-blue-600"
                        onClick={() => handleBack()}
                    >
                        Back
                    </button>
                </div>
            </div>
        </main>
    )
}

export default ErrorPage