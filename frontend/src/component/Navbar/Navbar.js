import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {



    return (
        <div className="mb-5 main">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand xa">KISHAN SUCHNA</Link>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <Link to="/" className="nav-item nav-link active xa" >HOME</Link>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle active" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    INFORMATION
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/seeds">Seeds</Link></li>
                                    <li><Link className="dropdown-item" to="/instrument">Instrument</Link></li>
                                    <li><Link className="dropdown-item" to="/Seasonablecrops">Seasonable Cropser</Link></li>
                                </ul>
                            </li>
                            <Link to="/contactus" className="nav-item nav-link active xa" >CONTACT US</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
