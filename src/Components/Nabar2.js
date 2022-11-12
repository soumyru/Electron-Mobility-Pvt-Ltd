import React from "react";
import About from "./About.js";
import ServiceNProduct from "./ServiceNProduct.js";
import Technology from "./Technology.js";
import Contact from "./Contact.js";
import Swapping from "./Swapping.js";
import PartnerBenefits from "./PartnerBenefits.js";
import Mobileplatform from "./Mobileplatform.js";
// import {Scrollbars} from 'react-custom-scrollbars';
// import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div>
        {
          <nav
            id="navbarId"
            className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark"
          >
            <div className="container-fluid aboutnav">
              <a className="navbar-brand" href="/">
                Electica Energy
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item aboutnav">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#scrollspyHeading1"
                    >
                      About
                    </a>
                  </li>

                  {/* <li className="nav-item aboutnav">
                  <a
                    className="nav-link dropdown"
                    href="#scrollspyHeading2"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Service and Product
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#scrollspyHeading2-1">
                        Swapping
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#scrollspyHeading2-2">
                        Partner Benefits
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#scrollspyHeading2-3">
                        Mobile Platform
                      </a>
                    </li>
                  </ul>
                </li> */}
                  <li className="nav-item aboutnav">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#scrollspyHeading1"
                    >
                      Service and Product
                    </a>
                  </li>
                  <li className="nav-item aboutnav">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#scrollspyHeading3"
                    >
                      Technology
                    </a>
                  </li>
                  <li className="nav-item aboutnav">
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
        }

         <div
          data-bs-spy="scroll"
          data-bs-target="#navbarId"
          data-bs-root-margin="0px 0px -40%"
          data-bs-smooth-scroll="true"
          class="scrollspy-example p-3 rounded-2"
          tabindex="0"
        > 
         <div className="container-fluid " style={{ marginTop: "3%" }}>
            <h1 className="text-center" id="scrollspyHeading1">
              About Us
            </h1>
            <About />
            <hr />
          </div>
          <div className="container-fluid ">
            <h1 className="text-center" id="scrollspyHeading2">
              Service and Product
            </h1>
            <ServiceNProduct />
            <hr />
          </div>
          <div className="container col-md-12">
            <h1 className="text-center" id="scrollspyHeading2-1">
              Swapping
            </h1>
            <Swapping />
            <hr />
          </div>
          <div className="container-fluid bg-white">
            <h1 className="text-center" id="scrollspyHeading2-2">
              Partner Benefits
            </h1>
            <PartnerBenefits />
            <hr />
          </div>
          <div className="container col-md-12">
            <h1 className="text-center" id="scrollspyHeading2-3">
              Mobile Platform
            </h1>
            <Mobileplatform />
            <hr />
          </div>
          <div className="container-fluid">
            <h1 className="text-center" id="scrollspyHeading3">
              Technology
            </h1>
            <Technology />
            <hr />
          </div>
          <div className="container-fluid">
            <h1 className="text-center" id="scrollspyHeading4">
              Contact Us
            </h1>
            <Contact />
          </div>
        </div> 
      </div>
    </>
  );
}
