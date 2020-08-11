import React from 'react'

const Nav = () => {
    return (
        <nav>
            <div className="branding">
                <h1>urban</h1>
                <p>DICTIONARY</p>
            </div>
            <div className="menu">
                <div className="pages">
                    <ul>
                        <li className="pages"><a href="#">Browse</a></li>
                        <li className="pages"><a href="#">Categories</a></li>
                        <li className="pages"><a href="#">Vote</a></li>
                        <li className="pages"><a href="#">Store</a></li>
                        <li className="pages"><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div className="cart-container">
                    <a href="#" className="cart">Cart</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav;