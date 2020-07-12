import React from 'react';
import "./Nav.css";

function Nav(){
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <header className="navbar-brand" >Personal Library</header>
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button> */}
        <div className=" navbar-expand-sm" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                <a className="nav-link " href="/">Search</a>
                </li>
                <li className="nav-item active">
                <a className="nav-link" href="#">Saved</a>
                </li>
            </ul>
        </div>
        </nav>
        <div className="jumbotron text-center">
            <h1>Personal Library</h1>
            <p>Search and save books of interest.</p>
        </div>
        </div>
    )
};

export default Nav;