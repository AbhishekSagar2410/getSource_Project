import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
    <>
    <BrowserRouter>
        <App></App>
    </BrowserRouter>
    </>
    ,document.getElementById('root')
)