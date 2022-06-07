import React from "react";

export default function Features() {
  return (
    <div className="containter mx-4">
      <div className="row">
        {/* Card */}
        <div className="col-6 d-flex">
          {/* Card's LEFT side */}
          <div className="col d-none d-md-block">
            <i class="bi bi-bootstrap-fill"></i>
          </div>

          {/* Card's RIGHT side */}
          <div className="col flex-column">
            <i class="bi bi-bootstrap-fill display-4 text-indigo-400"></i>
            <p className="h2 fw-bolder h-auto my-3">Featured title</p>
            <p className="h4 fw-light h-auto text-start">
              Paragraph of text beneath the heading to explain the heading.
            </p>
          </div>
        </div>

        {/* Card */}
        <div className="col-6 d-flex">
          {/* Card's LEFT side */}
          <div className="col d-none d-md-block">
            <i class="bi bi-bootstrap-fill"></i>
          </div>

          {/* Card's RIGHT side */}
          <div className="col flex-column">
            <i class="bi bi-bootstrap-fill display-4 text-indigo-400"></i>
            <p className="h2 fw-bolder h-auto my-3">Featured title</p>
            <p className="h4 fw-light h-auto text-start">
              Paragraph of text beneath the heading to explain the heading.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
