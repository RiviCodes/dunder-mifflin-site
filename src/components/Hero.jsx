import React from "react";

export default function Hero() {
  return (
    <div className="container py-5">
      <div className="row">
        {/* LEFT COLUMN */}
        <div className="col-12 col-md-6">
          {/* Display image ONLY when breakpoint is UNDER MD */}
          <div className="col-12 col-md-6 d-md-none mb-5">
            <img
              src="https://wallpapers.com/images/high/the-office-dunder-mifflin-boss-87ucljukpbj1p3iw.jpg"
              alt=""
              className="img-fluid h-auto rounded shadow-lg mb-1"
            />
          </div>

          {/* Primary paragraph */}
          <div className="col-12 mb-4">
            <p className="h1 text-start h-auto w-75">
              <strong>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </strong>
            </p>
          </div>

          {/* Secondary paragraph */}
          <div className="col">
            <p className="h4 text-start h-auto w-75 text-muted">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
              adipisci perferendis ad explicabo, nisi id sunt nam.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN, display ONLY when breakpoint is OVER MD */}
        <div className="col-md-6 d-none d-md-block">
          <div className="col">
            <img
              src="https://wallpapers.com/images/high/the-office-dunder-mifflin-boss-87ucljukpbj1p3iw.jpg"
              alt=""
              className="img-fluid h-auto rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
