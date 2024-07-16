import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {
  Outlet,
  RouterProvider,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom"
import router from './router/index.jsx';
import './App.css'

import ErrorPage from './components/ErrorPage.jsx';
import Dashbooard from './views/dashboard/Dashboard.jsx';
import WrapAuth from './views/auth/WrapAuth/WrapAuth.jsx';
import WrapNoAuth from './views/auth/WrapNoAuth/WrapNoAuth.jsx';


function App() {
  const [count, setCount] = useState(0);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.name !== 'login') {
        return <Route exact path={route.route} element={<WrapAuth name={route.component} /> } key={route.key} />;
      }  else if (route.name === 'login'){
        return <Route exact path={route.route} element={<WrapNoAuth name={route.component} /> } key={route.key} />;
      } else {
        return null;
      }
      
    });

  useEffect(()=>{
    console.log("react effect = ")
    console.log(router)

  }, [])

  return (
        <Routes>
            {getRoutes(router)}
            <Route path="*" element={<ErrorPage />} />
        </Routes>

  )
}

export default App
