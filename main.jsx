import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Utama from './component/Utama.jsx'
import IndukAyam from './Pages/Induk-ayam.jsx'
import Belajar from './Belajar.jsx'
import Navbar from './component/Navbar.jsx'
import Sidebar from './component/Sidebar.jsx'
import Layout from './component/Layout.jsx'
import Home from './Pages/Home.jsx'
import Button from './component/Button.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Utama/> */}
    {/* <Belajar/> */}
    {/* <IndukAyam/> */}
    {/* <Navbar/> */}
    {/* <Sidebar/> */}
    {/* <Layout/> */}
    {/* <Home/> */}
    {/* <Button/> */}

    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
)
