import { useEffect, useState } from 'react'
import {
  Routes,
  Route,
} from "react-router-dom"
import router from './router/index.jsx';
import './App.css'

import ErrorPage from './components/ErrorPage.jsx';
import WrapAuth from './views/auth/WrapAuth/WrapAuth.jsx';


function App() {

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.name) {
        return <Route exact path={route.route} element={<WrapAuth name={route.component} /> } key={route.key} />;
      } else {
        return null;
      }
    });

  return (
        <Routes>
            {getRoutes(router)}
            <Route path="*" element={<ErrorPage />} />
        </Routes>

  )
}

export default App
