import React from 'react'
import Header from './Header'

const Footer = () => {
  return (
    <>
    <Header/>
    <footer className='footer'>
      <ul>
        <li>
          <button>Home</button>
        </li>
        <li>
          <button>Suggestion Box</button>
        </li>
      </ul>

      <ul>
        <li>
          <button>Privacy Policy</button>
        </li>
        <li>
          <button>Giveaway</button>
        </li>
      </ul>
    </footer>
    </>
  )
}

export default Footer