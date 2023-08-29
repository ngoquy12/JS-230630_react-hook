import React from "react";

export default function Modal({ handleCloseModal, ok }) {
  // Tắt modal
  const closeModal = () => {
    handleCloseModal(false);
  };

  const handleOk = () => {
    ok();
  };
  return (
    <>
      <div className="modal ">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Xác nhận</h5>
              <button
                type="button"
                className="btn-close"
                onClick={closeModal}
              />
            </div>
            <div className="modal-body">
              <p>Bạn có chắc chắn muốn xóa công việc không?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={closeModal}
              >
                Hủy
              </button>
              <button
                onClick={handleOk}
                type="button"
                className="btn btn-danger"
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
