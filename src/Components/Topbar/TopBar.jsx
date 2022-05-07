import React from 'react'
import { Link } from 'react-router-dom';
import './TopBar.css'

const TopBar = (props) => {
    console.log(props);
    return (
        // NavBar
        <nav
            className="container navbar navbar-expand-lg navbar-light static-top"
            style={{padding: "10px 0px"}}>
            <div
                className="container-fluid">
                <Link
                    className="navbar-brand h1 text-primary fontSize-40"
                    to="/SyllabusWeb">
                    {props.heading}
                </Link>
    
                <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span
                            className="navbar-toggler-icon">
                        </span>
                </button>
    
                <div 
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent">
                    <ul
                        className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li
                            className="nav-item">
                            <Link
                                className="nav-link text-primary active"
                                aria-current="page"
                                to="/SyllabusWeb">
                                Home
                            </Link>
                        </li>
                        <li
                            className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="/"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                              Courses
                            </Link>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown">
                                <li><Link
                                        className="dropdown-item"
                                        to="/programmes/ug">
                                        UG
                                    </Link>
                                </li>
                                <li><Link
                                        className="dropdown-item"
                                        to="/programmes/pg">
                                        PG
                                    </Link>
                                </li>
                                <li><Link
                                        className="dropdown-item"
                                        to="/programmes/phd">
                                        PhD
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><Link
                                        className="dropdown-item"
                                        to="/programmes/certificate">
                                        Certificate
                                    </Link>
                                </li>
                                <li><Link
                                        className="dropdown-item"
                                        to="/programmes/diploma">
                                        Diploma
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li
                            className="nav-item">
                            <Link
                                className="nav-link"
                                to="/">
                                Contribute
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default TopBar;