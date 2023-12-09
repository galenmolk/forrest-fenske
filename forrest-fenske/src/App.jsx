import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from '../public/logo.png'
import portrait from '../public/portrait.jpg'
import './App.css'
import header from './assets/header.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <img src={header} alt='header' className='header-image'/>
        <h1 className='main-header'>WORM TOMB</h1>
        <div className='card'>
            <a href="https://fineartamerica.com/profiles/forrest-fenske" target='_blank'>
                <img src={logo} className='logo' alt='Logo' />
            </a>
        </div>
        <h2 className='main-header'>Recycled Art & Tool</h2>
        <img src={portrait} className='portrait' alt='portrait'></img>
        {/*
          <button>hello</button>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
           */}
    </>
  )
}

export default App
