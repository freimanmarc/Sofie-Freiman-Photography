import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-mdl/extra/material.js';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
// Deleted -- import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
