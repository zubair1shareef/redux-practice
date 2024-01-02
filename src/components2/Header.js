import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div>
      <div class="bg-secondary" style={{ display: 'flex' }}>
        <Link style={{ marginLeft: '10px', color: 'white' }} to='/'>home</Link>
        <Link style={{ marginLeft: '10px', color: 'white' }} to='cart'>cart</Link>
      </div>
    </div>
  )
}

export default Header