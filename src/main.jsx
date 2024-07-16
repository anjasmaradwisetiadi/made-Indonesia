import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './stores/index.js';
import {
    RouterProvider,
  } from "react-router-dom";
import router from './router/index.jsx';
import Dashbooard from './views/dashboard/Dashboard.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
        {/* <Dashbooard></Dashbooard> */}
    </React.StrictMode>
)
