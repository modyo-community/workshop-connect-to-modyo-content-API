import React from 'react'

const Header = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            Mi sitio web
                        </a>
                        <div
                            className="collapse navbar-collapse justify-content-end"
                            id="navbarNav"
                        >
                            <ul className="navbar-nav ">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">
                                        Home
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        About
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header