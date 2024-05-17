import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route } from "react-router-dom";
import App from './components/App/App.jsx'
//import Nomatch from "./components/Nomatch/Nomatch.jsx";
import { BrowserRouter } from "react-router-dom";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<App />}/>
        {/*<Route path="/politica-de-qualidade" element={<Qualitypolicy />} />
        <Route path="/our-solutions" element={<ServicesPage />} />
        <Route path="/carreiras" element={<JobPage />} />
        <Route path="/*" element={<Nomatch />} />*/}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
