import React from "react";

export default function Hero() {
  return (
    <div id="home" className="container">
      <div className="row">
        {/* LEFT COLUMN */}
        <div className="col-12 col-md-6 mt-5 pt-4">
          {/* Display image ONLY when breakpoint is UNDER MD */}
          <div className="col-12 col-md-6 d-md-none mb-5">
            <img
              src="images/dunder-mifflin.jpg"
              alt=""
              className="img-fluid img-thumbnail border border-2 border-indigo-500 h-auto rounded-5 shadow-lg mb-1"
            />
          </div>

          {/* Primary paragraph */}
          <div className="col mt-5 mb-4">
            <p className="h1 text-start h-auto w-75">
              <strong>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </strong>
            </p>
          </div>

          {/* Secondary paragraph */}
          <div className="col">
            <p className="h4 text-start h-auto w-75 text-muted fw-light">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
              adipisci perferendis ad explicabo, nisi id sunt nam.
            </p>
          </div>

          {/* Button */}
          <div className="col-12 my-5">
            <a href="">
              <button className="btn btn-lg bg-indigo-500 text-white">
                <strong>ORDER TODAY!</strong>
              </button>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN, display ONLY when breakpoint is OVER MD */}
        <div className="col-md-6 d-none d-md-block mt-5 pt-4 align-self-center">
          <div className="col">
            <img
              src="https://wallpapers.com/images/high/the-office-dunder-mifflin-boss-87ucljukpbj1p3iw.jpg"
              alt=""
              className="img-fluid img-thumbnail border border-3 border-indigo-500 h-auto rounded-5 shadow-lg"
            />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
