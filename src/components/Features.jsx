import React from "react";

export default function Features() {
  return (
    <div className="containter mx-2 my-2">
      <div className="row">
        {/* Card */}
        <div className="col-6">
          <div className="col d-flex flex-column align-items-center">
            <i class="bi bi-bootstrap-fill display-4 text-indigo-400"></i>
            <p className="d-flex justify-content-center h2 fw-bolder h-auto my-3">
              Featured title
            </p>
            <p className="d-flex justify-content-center h4 fw-light h-auto">
              Paragraph of text beneath the heading to explain the heading.
            </p>
          </div>
        </div>

        {/* Card */}
        <div className="col-6">
          <div className="col d-flex flex-column align-items-center">
            <i class="bi bi-cpu-fill display-4 text-indigo-400"></i>
            <p className="d-flex justify-content-center h2 fw-bolder h-auto my-3">
              Featured title
            </p>
            <p className="h4 fw-light h-auto">
              Paragraph of text beneath the heading to explain the heading.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
