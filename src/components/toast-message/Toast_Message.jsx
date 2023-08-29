import React from "react";

export default function Toast_Message() {
  return (
    <>
      <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 11 }}>
        <div id="liveToast" className="toast ">
          <div className="toast-header">
            <img
              height={30}
              src="https://vinpearlbooking.com.vn/wp-content/uploads/2021/10/icon-thanh-cong-300x300.png"
              className="rounded me-2"
            />
            <strong className="me-auto">Thông báo</strong>
            <small>just now.</small>
            <button type="button" className="btn-close" />
          </div>
          <div className="toast-body">Xóa công việc thành công.</div>
        </div>
      </div>
    </>
  );
}
