import React from "react";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-md bg-light shadow-sm fixed-top">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1 fs-3 text-indigo-500">
          <i class="bi bi-building"></i> Dunder Mifflin{" "}
          <i class="bi bi-box2-heart-fill"></i>
        </span>
        {/* Toggler Button */}
        <button
          class="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#features">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#our-team">
                Our Team
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
