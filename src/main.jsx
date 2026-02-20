import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux';
import { store } from './app/store.js';
import {ToastContainer} from 'react-toastify';
import axios from 'axios'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Provider store={store}>
    <App />
    <ToastContainer/>
    </Provider>
  // </StrictMode>,
)

// Use deployed backend in production; keep relative paths in development to allow Vite proxy
if (import.meta.env.PROD && import.meta.env.VITE_BACKEND_URL) {
  axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL
}