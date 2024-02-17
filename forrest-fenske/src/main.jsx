import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sculptures from './pages/Sculptures.jsx'
import Drawing from './pages/Drawing.jsx'
import './pages/styles/App.css'
import Dragons from "./pages/Dragons.jsx";
import Lanterns from "./pages/Lanterns.jsx";
import More from "./pages/More.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/forrest-fenske/" element={<App/>}/>
        <Route path="/forrest-fenske/sculptures/" element={<Sculptures/>}/>
          <Route path="/forrest-fenske/sculptures/dragons/" element={<Dragons/>}/>
          <Route path="/forrest-fenske/sculptures/lanterns/" element={<Lanterns/>}/>
          <Route path="/forrest-fenske/sculptures/more/" element={<More/>}/>
          <Route path="/forrest-fenske/drawing/" element={<Drawing/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
