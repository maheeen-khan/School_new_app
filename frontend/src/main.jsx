import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // includes JS for toggles, dropdowns, etc.
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <ToastContainer position="top-right" autoClose={3000} /> 
       <App />
    </BrowserRouter>
  </StrictMode>,
)
