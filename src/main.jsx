import { StrictMode } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Examenfinal_REACT/">
    <App />
    </BrowserRouter>
  </StrictMode>,
);
