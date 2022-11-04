import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer  textAlign-center">
      <div className="container textAlign-center">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Electica Energy Pvt Ltd</h4>
            <ui className="list-unstyled">
              <li>342-420-6969</li>
              <li>South Campus IIT Mandi,</li>
              <li>Himahcal Pradesh, India</li>
            </ui>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Product & Services</h4>
            <ui className="list-unstyled">
              <li>Chargers </li>
              <li>Battries</li>
              <li>Charging Station</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>About Us</h4>
            <ui className="list-unstyled">
              <li>Company</li>
              <li>Tech Support</li>
              <li>FAQ</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row ">
          <p className="col-sm ">
            &copy;{new Date().getFullYear()} Electica Energy Pvt Ltd | All
            rights reserved | Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
