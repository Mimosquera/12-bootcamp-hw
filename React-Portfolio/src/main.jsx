import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Includes Popper.js
import './styles/index.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)