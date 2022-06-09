import React from "react";

export default function Grid() {
  return (
    <div className="container d-flex align-items-center justify-content-center my-4">
      <div className="row">
        {/* LEFT COLUMN */}
        <div className="col-12 col-lg-9">
          {/* NESTED TOP ROW */}
          <div className="row">
            <div className="col-12 col-lg-8 p-2">
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
            <div className="col-12 col-lg-4 p-2">
              <div class="card h-100">
                <div class="card-body">
                  <div className="d-flex align-items-center justify-content-around">
                    <img src="" alt="" className="rounded-circle" />
                    <div>
                      <p class="card-text h6 h-100 w-75 pb-1">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Vitae, unde eligendi consequatur similique
                        repudiandae neque!
                      </p>
                      <figcaption class="blockquote-footer text-dark pt-2">
                        <cite title="Source Title">Jim Harper</cite>
                      </figcaption>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* NESTED BOTTOM ROW */}
          <div className="row">
            <div className="col-12 col-lg-4 bg-warning">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos ea tempora, maiores fugiat maxime aliquam vel
              exercitationem aspernatur labore, voluptates magnam illum iusto
              ex. Optio deleniti nisi ipsum doloremque voluptatibus.
            </div>
            <div className="col-12 col-lg-8 bg-danger">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos ea tempora, maiores fugiat maxime aliquam vel
              exercitationem aspernatur labore, voluptates magnam illum iusto
              ex. Optio deleniti nisi ipsum doloremque voluptatibus.
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-12 col-lg-3 bg-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolorem
          velit tempora architecto amet qui hic suscipit necessitatibus placeat
          ex laudantium sed, consequuntur molestias asperiores ipsam aliquam.
          Praesentium, velit sint.
        </div>
      </div>
    </div>
  );
}
