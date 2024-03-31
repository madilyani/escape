import React from "react";

export default function EditSearch() {
  return (
    <div className="editSearch">
      <div className="editSearch__inner">
        <div className="editSearch__head">
          <h5>modifica ricerca</h5>
          <div className="editSearch__close"></div>
        </div>
        <div className="editSearch__content">
          <div className="editSearch__row">
            <div className="editSearch__date">
              <h6>check in</h6>
              <input type="text" placeholder="Seleziona Data" />
            </div>
            <hr />
            <div className="editSearch__date">
              <h6>check in</h6>
              <input type="text" placeholder="Seleziona Data" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
