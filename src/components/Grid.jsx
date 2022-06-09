import React from "react";

export default function Grid() {
  return (
    <div className="container">
      <div className="row">
        {/* LEFT COLUMN */}
        <div className="col-12 col-lg-9">
          {/* NESTED TOP ROW */}
          <div className="row">
            <div className="col-12 col-lg-8 bg-primary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos ea tempora, maiores fugiat maxime aliquam vel
              exercitationem aspernatur labore, voluptates magnam illum iusto
              ex. Optio deleniti nisi ipsum doloremque voluptatibus.
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
