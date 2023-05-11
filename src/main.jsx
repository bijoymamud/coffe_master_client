import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import AddCoffe from './components/addCoffe';
import UpdateCoffee from './components/UpdateCoffee';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "addCoffe",
    element: <AddCoffe></AddCoffe>
  },
  {
    path: "updateCoffe",
    element: <UpdateCoffee></UpdateCoffee>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
