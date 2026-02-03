import React from "react";

function Modal({ show, onClose, title, children, footer }) {
  if (!show) return null;

  return (
    <>
      <div className="modal fade show d-block" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">

            {/* Header */}
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              />
            </div>

            {/* Body */}
            <div className="modal-body">
              {children}
            </div>

            {/* Footer (optional) */}
            {footer && (
              <div className="modal-footer">
                {footer}
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div className="modal-backdrop fade show"></div>
    </>
  );
}

export default Modal;
