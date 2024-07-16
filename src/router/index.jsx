import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Dashboard from "../views/dashboard/Dashboard.jsx";
import Login from "../views/auth/LoginPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Dashboard></Dashboard>),
  },
  {
    path: "/dashboard",
    element: (<Dashboard></Dashboard>),
  },
  {
    path: "/login",
    element: (<Login></Login>),
  },
]);

export default router;