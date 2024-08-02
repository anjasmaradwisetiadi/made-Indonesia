import React, { useEffect, useState } from 'react';
import { dataStore } from '../../utilizes/DataStore';
import { 
    runningTimeReducer,
    savedResponseReducer,
    setStatusSubmitReducer,
    setStepReducer
 } from '../../stores/ReviewTest/ReviewTest';
 import { useDispatch, useSelector } from 'react-redux';
 import { utilize } from '../../utilizes';
 import { useNavigate } from "react-router-dom";

const Dashbooard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getRuningTime = useSelector((state)=> state.reviewTest.runningTime);
    const getStatusSubmit = useSelector((state)=> state.reviewTest.statusSubmit);
    const getSavedFormResponse = useSelector((state)=> state.reviewTest.savedFormResponse)
    const getSetState = useSelector((state)=> state.reviewTest.setStep)
    const [timer, setTimer] = useState( getRuningTime || 180);

    useEffect(()=>{
        const interval = setInterval(() => {
            if (timer >= 0) {
               setTimer(timer - 1);
               dispatch(runningTimeReducer(timer))
            } 
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    },[dispatch, getRuningTime, timer])

    const handleNext = () => {
        if (getSetState < dataStore.length) {
            dispatch(setStepReducer(getSetState+1))
        } else {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        dispatch(setStatusSubmitReducer(true));
        setTimer(0);
    };

    useEffect(() => {

        if(getStatusSubmit && !getRuningTime){
            handleSubmit()
        } else if(getSavedFormResponse && getSetState && getRuningTime){
            localStorage.setItem("formData", JSON.stringify(getSavedFormResponse));
            localStorage.setItem("step", getSetState.toString());
            localStorage.setItem("timer", getRuningTime);
            localStorage.setItem("isSubmit", getStatusSubmit)
        } 
    }, [getRuningTime, getStatusSubmit, getSavedFormResponse, getSetState]);

    const handleFormChange = (e) => {
        const name = e.target.name
        const value =  e.target.value
        const payload = {
            [name]: value
        }
        dispatch(savedResponseReducer(payload))
    }

    const reset = () =>{
        setTimer(180);
        dispatch(setStepReducer(1))
        dispatch(setStatusSubmitReducer(false));
        dispatch(savedResponseReducer(null));
    }

    const handleLookResponse = () =>{
        navigate('/review-test')
        window.location.reload()
    }

    return (
        <main className="h-screen flex justify-center items-center p-2 bg-gradient-to-r from-red-primary to-red-secondary font-jakarta">
            <div className="p-6 bg-white/25 backdrop-blur-md rounded-md relative max-w-lg container">
                {!getStatusSubmit && (
                    <>
                        <div className="flex justify-between absolute -top-5 left-0 right-0 gap-2">
                            {Array.from({ length: dataStore.length }, (_, i) => i + 1).map(
                                (item) => (
                                    <div
                                        className={`w-full h-2 rounded-full ${getSetState >= item ? "bg-orange-400" : "bg-white"
                                            } transition-all duration-500`}
                                        key={item}
                                    ></div>
                                )
                            )}
                        </div>

                        <div className="flex flex-col gap-3">
                            <div className="relative w-full h-80 sm:h-60 overflow-hidden">
                                {dataStore.map((question, index) => (
                                    <div
                                        key={index}
                                        className={`absolute w-full flex flex-col gap-3 transition-all duration-500 ${getSetState === index + 1
                                            ? "translate-x-0"
                                            : getSetState > index + 1
                                                ? "-translate-x-full"
                                                : "translate-x-full"
                                            }`}
                                    >
                                        <h1 className="text-xl sm:text-3xl font-bold text-primary">
                                            Question {index + 1}
                                        </h1>
                                        <p className="text-sm sm:text-lg font-medium text-primary">
                                            {question.question}
                                        </p>
                                        <div className="flex flex-col gap-3">
                                            {question.choices.map((choice, index) => (
                                                <label htmlFor={choice} className="flex items-center gap-2" key={index}>
                                                    <input
                                                        type="radio"
                                                        name={question.name}
                                                        id={choice}
                                                        className="hidden peer"
                                                        value={choice}
                                                        checked={getSavedFormResponse[question.name] === choice}
                                                        onChange={(e) => handleFormChange(e)}
                                                    />
                                                    {/* <span> getSavedFormResponse: {getSavedFormResponse[question.name]} === choice: {choice} </span> */}
                                                    <span className="w-4 h-4 flex-shrink-0 bg-white/25 border-2 border-secondary rounded-full peer-checked:bg-black peer-checked:border-transparent"></span>
                                                    <span className="text-secondary text-sm sm:text-lg font-medium">{choice}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button
                                className="px-4 py-2 text-sm sm:text-lg font-medium text-white bg-primary rounded-md bg-orange-400"
                                onClick={() => handleNext()}
                            >
                                {getSetState === dataStore.length ? "Submit" : "Next"}
                            </button>
                            <div className="flex">
                                <span className="text-sm sm:text-lg font-medium text-primary">
                                    Time Left: {utilize.handleFormatTime(getRuningTime)}
                                </span>
                            </div>
                        </div>
                    </>
                )}

                {getStatusSubmit && (
                    <div className="flex flex-col gap-3">
                        <h1 className="text-xl sm:text-3xl font-bold text-primary">Thank you!</h1>
                        <p className="text-sm sm:text-lg font-medium text-primary">
                            Your response has been recorded.
                        </p>
                        <div className='w-full flex justify-center'>
                            <button
                                className="w-full py-2 text-sm sm:text-lg font-medium text-white bg-primary rounded-md bg-green-400"
                                onClick={() => {
                                    handleLookResponse()
                                }}
                            >
                                Look response
                            </button>
                        </div>
                        <div className='w-full flex justify-center'>
                            <button
                                className="w-full py-2 text-sm sm:text-lg font-medium text-white bg-primary rounded-md bg-orange-400"
                                onClick={() => {
                                    reset()
                                }}
                            >
                                Restart
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </main>
    )
}

export default Dashbooard