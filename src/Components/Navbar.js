
import React from "react";
// import {Scrollbars} from 'react-custom-scrollbars';
// import { NavLink } from "react-router-dom";

export default function Navbar() {


 
    return (
      <div>
     
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Electron Mobility</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">            </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">            </a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Service and Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Technology</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
              </li>
              
              <li className="nav-item dropdown">
                
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              
            </ul>
            
          </div>
        </div>
      </nav>
      
      
      </div>
    );
}

  
