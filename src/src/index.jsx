import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route } from "react-router-dom";
import App from './components/App/App.jsx'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx'
import { BrowserRouter } from "react-router-dom";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}/>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
)
