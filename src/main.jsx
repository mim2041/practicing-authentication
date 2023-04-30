import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './assets/components/Layout/Main';
import Home from './assets/components/Home/Home';
import Login from './assets/components/Login/Login';
import Login1 from './assets/components/Login/Login1';
import Register from './assets/components/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/login1',
        element: <Login1></Login1>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
