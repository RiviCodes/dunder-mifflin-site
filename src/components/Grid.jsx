import React from "react";

export default function Grid() {
  return (
    <div
      id="our-team"
      className="container d-flex align-items-center justify-content-center my-4"
    >
      <div className="row">
        {/* LEFT COLUMN */}
        <div className="col-12 col-lg-8">
          {/* NESTED TOP ROW */}
          <div className="row">
            <div className="col-12 col-lg-7 p-2">
              {/* Use 100% of the height in each card */}
              <div class="card h-100 ps-3 bg-indigo-400">
                {/* SINGLE CARD'S CONTENT */}
                <div class="card-body d-flex align-items-center justify-content-center">
                  <div className="d-flex align-items-center">
                    <img
                      src="images/jim.jpg"
                      alt=""
                      className="img-thumbnail rounded-circle"
                      height="auto"
                      width="100"
                    />
                    <div>
                      <p class="card-text h6 h-100 w-75 pb-1 text-light bg-indigo-400">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Vitae, unde eligendi consequatur similique
                        repudiandae neque!
                      </p>
                      <figcaption class="blockquote-footer text-light pt-2">
                        <cite title="Source Title">Jim Harper</cite>
                      </figcaption>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-5 p-2">
              <div class="card h-100 ps-3 bg-indigo-500">
                <div class="card-body d-flex align-items-center justify-content-center">
                  <div className="d-flex align-items-center">
                    <img
                      src="images/pam.jpg"
                      alt=""
                      className="img-thumbnail rounded-circle"
                      height="auto"
                      width="100"
                    />
                    <div>
                      <p class="card-text h6 h-100 w-75 pb-1 text-light bg-indigo-500">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </p>
                      <figcaption class="blockquote-footer text-light pt-2">
                        <cite title="Source Title">Pam Morgan</cite>
                      </figcaption>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* NESTED BOTTOM ROW */}
          <div className="row">
            <div className="col-12 col-lg-5 p-2">
              <div class="card h-100 ps-3 bg-light border-indigo-500">
                <div class="card-body d-flex align-items-center justify-content-center">
                  <div className="d-flex align-items-center">
                    <img
                      src="images/erin.jpg"
                      alt=""
                      className="img-thumbnail border-indigo-500 rounded-circle"
                      height="auto"
                      width="100"
                    />
                    <div>
                      <p class="card-text h6 h-100 w-75 pb-1 text-indigo-500 bg-light">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </p>
                      <figcaption class="blockquote-footer text-indigo-500 pt-2">
                        <cite title="Source Title">Erin Hannon</cite>
                      </figcaption>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-7 p-2">
              <div class="card h-100 ps-3 bg-indigo-400">
                <div class="card-body d-flex align-items-center justify-content-center">
                  <div className="d-flex align-items-center">
                    <img
                      src="images/andy.jpg"
                      alt=""
                      className="img-thumbnail rounded-circle"
                      height="auto"
                      width="100"
                    />
                    <div>
                      <p class="card-text h6 h-100 w-75 pb-1 text-light bg-indigo-400">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Vitae, unde eligendi consequatur similique
                        repudiandae neque!
                      </p>
                      <figcaption class="blockquote-footer text-light pt-2">
                        <cite title="Source Title">Andrew B. Bernard</cite>
                      </figcaption>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-12 col-lg-4 p-2">
          <div class="card h-100 ps-3 bg-indigo-600">
            <div class="card-body d-flex align-items-center justify-content-center">
              <div className="d-flex align-items-center">
                <img
                  src="images/dwight.jpg"
                  alt=""
                  className="img-thumbnail rounded-circle"
                  height="auto"
                  width="100"
                />
                <div>
                  <p class="card-text h6 h-100 w-75 pb-1 text-light bg-indigo-600">
                    FALSE! Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Veritatis eligendi incidunt sequi natus? Officia
                    distinctio a tenetur quos itaque atque.
                  </p>
                  <figcaption class="blockquote-footer text-light pt-2">
                    <cite title="Source Title">Dwight Schrute</cite>
                  </figcaption>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
