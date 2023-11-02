import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const bgColor = window?.config?.backgroundColor ? window?.config?.backgroundColor : 'rgba(255, 255, 255, 1)';

document.body.style = `background: ${bgColor};`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
