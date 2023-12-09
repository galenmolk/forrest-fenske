import { useState } from 'react'
import logo from './assets/logo.png'
import portrait from './assets/portrait.jpg'
import './App.css'
import header from './assets/header.png'
import headerText from './assets/worm-tomb-header-text.png'
import tradeText from './assets/trade-text.png'
import tradeTextBanner from './assets/trade-text-banner.png'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <div className='image-container'>
              <img src={header} alt='Skull with Worm Tomb Logo' className='header-image'/>
              <img src={headerText} alt='WORM TOMB' className='header-text'/>
          </div>
          <div className='image-container'>
              <img src={tradeTextBanner} alt='Medieval Banner' className='trade-text-banner'/>
                <img src={tradeText} alt='Recycled Art and Tool' className='trade-text'/>
          </div>

          <div className='card'>
              <a href="https://fineartamerica.com/profiles/forrest-fenske" target='_blank'>
                  <img src={logo} className='logo' alt='Logo'/>
              </a>
          </div>
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
