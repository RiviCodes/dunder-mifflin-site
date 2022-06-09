import React from "react";

export default function Quote() {
  return (
    <div className="container-fluid d-flex justify-content-center py-4 bg-indigo-100">
      <div className="row">
        <div className="col-6 d-flex align-items-center justify-content-center">
          <img
            src="images/michael.jpg"
            alt=""
            className="img-thumbnail w-75 border-5 border-indigo-500 rounded-circle"
          />
        </div>
        <div className="col-6 d-flex align-items-center justify-content-center">
          <figure>
            <blockquote class="blockquote mt-4 pb-2">
              <p className="h5 fw-semibold h-auto bg-indigo-100">
                “You miss 100% of the shots you don’t take. - Wayne Gretzky”
              </p>
            </blockquote>
            <figcaption class="blockquote-footer text-dark">
              <cite title="Source Title">Michael Scott</cite>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
