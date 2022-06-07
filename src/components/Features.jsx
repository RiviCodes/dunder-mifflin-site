import React from "react";

export default function Features() {
  return (
    <div className="containter mx-3 mt-4">
      <div className="row">
        {/* Card #1 */}
        <div className="col-6 col-md-3 mb-5">
          <div className="col d-flex flex-column align-items-center">
            <i class="bi bi-bootstrap-fill display-4 text-indigo-400"></i>
            <p className="d-flex justify-content-center h3 fw-bolder h-auto my-3">
              Featured title
            </p>
            <p className="h5 fw-light h-auto w-75">
              Paragraph of text beneath the heading to explain the heading.
            </p>
          </div>
        </div>

        {/* Card #2 */}
        <div className="col-6 col-md-3 mb-5">
          <div className="col d-flex flex-column align-items-center">
            <i class="bi bi-cpu-fill display-4 text-indigo-400"></i>
            <p className="d-flex justify-content-center h3 fw-bolder h-auto my-3">
              Featured title
            </p>
            <p className="h5 fw-light h-auto w-75">
              Paragraph of text beneath the heading to explain the heading.
            </p>
          </div>
        </div>

        {/* Card #3 */}
        <div className="col-6 col-md-3 mb-5">
          <div className="col d-flex flex-column align-items-center">
            <i class="bi bi-calendar3 display-4 text-indigo-400"></i>
            <p className="d-flex justify-content-center h3 fw-bolder h-auto my-3">
              Featured title
            </p>
            <p className="h5 fw-light h-auto w-75">
              Paragraph of text beneath the heading to explain the heading.
            </p>
          </div>
        </div>

        {/* Card #4 */}
        <div className="col-6 col-md-3 mb-5">
          <div className="col d-flex flex-column align-items-center">
            <i class="bi bi-house-door display-4 text-indigo-400"></i>
            <p className="d-flex justify-content-center h3 fw-bolder h-auto my-3">
              Featured title
            </p>
            <p className="h5 fw-light h-auto w-75">
              Paragraph of text beneath the heading to explain the heading.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
