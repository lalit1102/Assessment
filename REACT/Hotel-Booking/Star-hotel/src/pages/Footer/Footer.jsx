import React from "react";
import { hotelsvg, logo } from "../../assets/assets";




const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-5">
      <div className="container">

        {/* Top Section */}
        <div className="row gy-4">

          {/* Brand */}
          <div className="col-lg-3 col-md-6">
            <img
              src={logo.images[0]}
              alt="logo"
              className="mb-3"
              style={{ height: "36px" }}
            />
            <p className="small text-muted">
              Discover the world's most extraordinary places to stay,
              from boutique hotels to luxury villas and private islands.
            </p>

            <div className="d-flex gap-3 mt-3">
              <img src={hotelsvg.instagramicon} alt="instagram" width="24" />
              <img src={hotelsvg.facebookicon} alt="facebook" width="24" />
              <img src={hotelsvg.twittericon} alt="twitter" width="24" />
              <img src={hotelsvg.linkendinicon} alt="linkedin" width="24" />
            </div>
          </div>

          {/* Company */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold">COMPANY</h6>
            <ul className="list-unstyled mt-3 small">
              <li className="mb-2"><a href="#" className="text-decoration-none text-dark">About</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Careers</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Press</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Blog</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Partners</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold">SUPPORT</h6>
            <ul className="list-unstyled mt-3 small">
              <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Help Center</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Safety Information</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Cancellation Options</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Contact Us</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Accessibility</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold">STAY UPDATED</h6>
            <p className="small text-muted mt-3">
              Subscribe to our newsletter for inspiration and special offers.
            </p>

            <div className="input-group mt-3">
              <input
                type="email"
                className="form-control"
                placeholder="Your email"
              />
              <button className="btn btn-dark">
                <img
                  src={hotelsvg.arrowicon}
                  alt="arrow"
                  width="14"
                  className="invert"
                />
              </button>
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="my-4" />

        {/* Bottom Section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 pb-4">
          <p className="mb-0 small text-muted">
            © {new Date().getFullYear()} Lalit Baldaniya. All rights reserved.
          </p>

          <ul className="list-unstyled d-flex gap-4 mb-0 small">
            <li><a href="#" className="text-decoration-none text-dark">Privacy</a></li>
            <li><a href="#" className="text-decoration-none text-dark">Terms</a></li>
            <li><a href="#" className="text-decoration-none text-dark">Sitemap</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
