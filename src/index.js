import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Business from './components/Business';
import Commercial from './components/Commercial';
import Personal from './components/Personal';
import Checking from './components/Checking';
import Alogin from './components/Alogin';
import { BrowserRouter, Router,Routes, Link, NavLink, Route, Switch,Navigate } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/business" element={<Business />}/>
        <Route path="/commercial" element={<Commercial />}/>
        <Route path="/personal" element={<Personal />}/>
        <Route path="/checking" element={<Checking />}/>
        <Route path="/alogin" element={<Alogin />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
