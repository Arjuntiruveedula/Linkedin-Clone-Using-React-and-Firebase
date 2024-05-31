import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
import { app, auth } from "./firebaseConfig";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-quill/dist/quill.snow.css";
import "./index.scss";


ReactDOM.render(
  <React.StrictMode>
   <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root')
)