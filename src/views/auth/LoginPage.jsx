import React, { useState, useEffect, useRef, } from 'react';
import classes from './index.module.css';


import { authLogin } from '../../services/AuthService';
import { useDispatch } from 'react-redux';



const Login = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        console.log("import.meta.env.APP_URL_FAKE_API = ")
        // console.log(import.meta.env.APP_URL_FAKE_API)
    }, [])


    const handleSubmit = (event)=>{
        event.preventDefault();

        console.log("email")
        console.log(event.target.email.value)
    
        const email = event.target.email.value
        const password = event.target.password.value
    
        const payload = {
            email: email,
            password: password
        }
    
    
        dispatch(authLogin(payload))
    }

    return (
        <form className={classes['form-sign-in']} onSubmit={handleSubmit}>
            <img
                className="mb-4"
                src="https://images.ygoprodeck.com/images/cards_cropped/72270339.jpg"
                alt=""
                width={72}
                height={57}
            />
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <div className="form-floating">
                <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name='email'
                />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                name='password'
                />
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="checkbox mb-3">
                <label>
                <input type="checkbox" defaultValue="remember-me" /> Remember me
                </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign in
            </button>
            <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
        </form>

    )
}

export default Login