import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <div className="logo">
            <Link to="/">
                <h1>SH<span>O</span>P</h1>
            </Link>
        </div>
        <nav className='menu'>
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="product">
                        Product
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar