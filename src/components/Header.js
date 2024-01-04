import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <div>
        <Link className='links' to=''>
          Home
        </Link>
      </div>

      <nav className='navbar'>
        <ul>
          <Link className='links' to='/Destinations'>
          Destinations
          </Link>
          <Link className='links' to='/Help'>
          Help
          </Link>
          <Link  className='create-trip-link' to='/create-trip'>
          Create Your Trip 
        </Link>
        
          {/* Add the link to view the user's profile */}
          <Link className='links' to='/Profile'>
            View My Profile
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header