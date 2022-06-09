import React from "react";

export default function Footer() {
  return (
    <footer className="bg-light">
      <hr />
      <div className="container pb-3">
        <div className="row d-flex align-items-center">
          {/* BRAND LOGO */}
          <div className="col-3 col-md-3 d-flex justify-content-center">
            <a href="" className="h2">
              {/* <i class="bi bi-bootstrap-fill text-indigo-700"></i> */}
              <img
                src="https://blog.getbootstrap.com/assets/brand/bootstrap-logo-shadow.png"
                alt=""
                className="img-fluid"
                width="50"
              />
            </a>
          </div>
          {/* COMPANY */}
          <div className="col-5 col-md-6">
            <p className="h6 align-items-center text-nowrap text-muted bg-light">
              © 2022 Scranton, Inc
            </p>
          </div>
          {/* SOCIAL MEDIA */}
          <div className="col-4 col-md-3 d-flex justify-content-evenly">
            <a href="" className="h3">
              <i class="bi bi-twitter text-indigo-500"></i>
            </a>
            <a href="" className="h3">
              <i class="bi bi-instagram text-indigo-500"></i>
            </a>
            <a href="" className="h3">
              <i class="bi bi-facebook text-indigo-500"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
