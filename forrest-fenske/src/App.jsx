import './App.css'
import header from './assets/img/header.png'
import portrait from './assets/img/forrest-dragon-portrait.png'
import Spacer from "./Spacer.jsx";

function App() {
  return (
      <>
          <img src={header} alt='Womb Tomb – Recycled Art & Tool' className='header'/>
          <div className='about-artist'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              <img src={portrait} className='portrait' alt='Forrest Fenske, Artist. Metal Dragon Sculpture.'></img>
              </p>
          </div>
          <Spacer space={'2rem'}/>
      </>
  )
}

export default App
