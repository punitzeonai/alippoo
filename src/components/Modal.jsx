import React from "react";
import "./Modal.css";

export const Modal = ({ onSubmit, OnXclose, onBtnCancel, children }) => {
  return (
    <div className="modal-container" onClick={e =>  {
      if (e.target.className === "modal-container")
      {
        OnXclose("Modal was Closed");
      }
    }
    }>
      <div className="modal">
        <div className="modal-header">
          <p className="close" onClick={() => OnXclose("model was closed")}>
            &times;
          </p>
        </div>
        <div className="modal-content">{children}</div>
        <div className="modal-footer">
          <button
            className="btn btn-cancel"
            type="submit"
            onClick={() => onBtnCancel("cancel button was clicked")}
          >
            Cancel
          </button>
          <button
            className="btn btn-save"
            type="submit"
            onClick={() => onSubmit("save button was clicked")}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
