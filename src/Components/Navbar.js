import React from "react";
// import {Scrollbars} from 'react-custom-scrollbars';
// import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Electica Energy
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {" "}
                </a>
              </li>

              <li className="nav-item active">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/About"
                >
                  About
                </a>
              </li>
              
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Service and Product
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item " href="/">
                      Swapping
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="/">
                      Partner benefits
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="/">
                      Technology
                    </a>
                    <a className="dropdown-item " href="/">
                      Mobile Technology
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/Technology"
                >
                  Technology
                </a>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/Contact Us"
                >
                  Contact Us
                </a>
              </li>

              
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}


