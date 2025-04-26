// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css'; // Optional: Import your CSS file for styling

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);