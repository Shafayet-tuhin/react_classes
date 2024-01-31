import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <header className='header'>
            <div className='container'>
                <nav className='header__navbar'>
                    <ul>
                        <li>
                            <Link to="/">
                                <button>Home</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/cart">
                                <button>Cart</button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}

export default Nav