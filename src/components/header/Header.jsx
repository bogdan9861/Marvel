import React from 'react'
import { useLocation, Link } from 'react-router-dom'

import './Header.scss'

const Header = () => {

    const { pathname } = useLocation();

    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <h1 className="header__title">
                        <span className='header__title-span'>Marvel</span>
                        information portal</h1>
                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            <li className="header__list-item">
                                <Link
                                    to="/"
                                    className={`header__list-link ${pathname == '/' ? 'active' : null}`}>
                                    Characters
                                </Link>
                                <span className='header__list-character'>/</span>
                                <Link
                                    to="/comics"
                                    className={`header__list-link ${pathname == '/comics' ? 'active' : null}`}
                                >
                                    Comics
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header