import React from 'react'
import { Link } from 'react-router-dom';
import './TopBar.css'

const TopBar = (props) => {
    console.log(props);
    return (
        // NavBar
        <nav
            class="container navbar navbar-expand-lg navbar-light static-top"
            style={{padding: "10px 0px"}}>
            <div
                class="container-fluid">
                <Link
                    class="navbar-brand h1 text-primary fontSize-40"
                    to="/">
                    {props.heading}
                </Link>
    
                <button class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span
                            class="navbar-toggler-icon">
                        </span>
                </button>
    
                <div 
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent">
                    <ul
                        class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li
                            class="nav-item">
                            <Link
                                class="nav-link text-primary active"
                                aria-current="page"
                                to="/">
                                Home
                            </Link>
                        </li>
                        <li
                            class="nav-item dropdown">
                            <Link
                                class="nav-link dropdown-toggle"
                                to="/"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                              Courses
                            </Link>
                            <ul
                                class="dropdown-menu"
                                aria-labelledby="navbarDropdown">
                                <li><Link
                                        class="dropdown-item"
                                        to="/ug">
                                        UG
                                    </Link>
                                </li>
                                <li><Link
                                        class="dropdown-item"
                                        to="/pg">
                                        PG
                                    </Link>
                                </li>
                                <li><Link
                                        class="dropdown-item"
                                        to="/">
                                        PhD
                                    </Link>
                                </li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li><Link
                                        class="dropdown-item"
                                        to="/">
                                        Certificate
                                    </Link>
                                </li>
                                <li><Link
                                        class="dropdown-item"
                                        to="/">
                                        Diploma
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li
                            class="nav-item">
                            <Link
                                class="nav-link"
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

export default TopBar