import React from "react";

export default function Grid() {
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="row">
        {/* LEFT COLUMN */}
        <div className="col-12 col-lg-9">
          {/* NESTED TOP ROW */}
          <div className="row">
            <div className="col-12 col-lg-8 bg-primary">
              <div class="card">
                {/* SINGLE CARD'S CONTENT */}
                <div class="card-body">
                  <div className="d-flex">
                    <img
                      src="https://bolavip.com/__export/1640142627460/sites/bolavip/img/2021/12/22/johnkrasinski_crop1640142301901.jpg_1159711837.jpg"
                      alt=""
                      className="img-fluid w-25 rounded-circle"
                    />
                    <div>
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text h6">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 bg-success">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos ea tempora, maiores fugiat maxime aliquam vel
              exercitationem aspernatur labore, voluptates magnam illum iusto
              ex. Optio deleniti nisi ipsum doloremque voluptatibus.
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
