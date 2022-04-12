import React from 'react'
import { Link } from 'react-router-dom'

const Headers = () => {
  return (
    <div>

        <nav className="header">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
        </nav>
    </div>
  )
}

export default Headers