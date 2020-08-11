import React from 'react'
import '../../css-modules/header-module.css'

//React components
import Nav from './Nav'
import Search from './Search'

const Header = () => {
    return (
        <header>
            <div className="container">
                <Nav />
                <Search />
            </div>
        </header>
    )
}

export default Header;