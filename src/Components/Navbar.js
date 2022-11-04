import React from "react";
// import {Scrollbars} from 'react-custom-scrollbars';
// import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
      <div>
      <nav id="navbarId" className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Electica Energy</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#scrollspyHeading1">About</a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown active"
                  href="#scrollspyHeading2"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Service and Product
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item " href="#scrollspyHeading2-1">
                      Swapping
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="#scrollspyHeading2-2">
                      Partner Benefits
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="#scrollspyHeading2-4">
                      Mobile Technology
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#scrollspyHeading3"
                >
                  Technology
                </a>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#scrollspyHeading4"
                >
                  Contact Us
                </a>
              </li> 
            </ul>
          </div>
        </div>
      </nav>

      <div data-bs-spy="scroll" data-bs-target="#navbarId" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-light p-3 rounded-2" tabindex="0">
      <h4 id="scrollspyHeading1">About</h4>
      <p>...</p>
      <h4 id="scrollspyHeading2">Service and Product</h4>
      <p>...</p>
      <h4 id="scrollspyHeading2-1">Swapping</h4>
      <p>...</p>
      <h4 id="scrollspyHeading2-2">Partner Benefits</h4>
      <p>...</p>
      <h4 id="scrollspyHeading2-3">Technology</h4>
      <p>...</p>
      <h4 id="scrollspyHeading2-4">Mobile Technology</h4>
      <p>...</p>
      <h4 id="scrollspyHeading3">Technology</h4>
      <p>...</p>
      <h4 id="scrollspyHeading4">Contact Us</h4>
      <p>...</p>

      </div>
    </div>
    );
}
