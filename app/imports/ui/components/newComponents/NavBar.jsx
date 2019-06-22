import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-custom">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="container">
                    <Link className="navbar-brand" to="/">
                       {/* <img src="../images/logo.jpg" width="30" height="30" alt=""/> */}
                       wstore
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Sign up <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Log in</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Category
                            </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Foods</a>
                                    <a className="dropdown-item" href="#">Books</a>
                                    <a className="dropdown-item" href="#">Clothing</a>
                                    <a className="dropdown-item" href="#">Electronic</a>
                                    <a className="dropdown-item" href="#">Handmade</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">More...</a>
                                </div>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link disabled" href="#">Disabled</a>
                            </li> */}
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"></input>
                            <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;