import React, { useRef, useState } from "react";

export default function TodoList() {
  // Lấy dữ liệu trên local
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const jobLocal = JSON.parse(localStorage.getItem("jobs")) || [];
    return jobLocal;
  });

  const jobRef = useRef(null);

  // Thêm mới công việc
  const handleAddJob = () => {
    // Lấy ra mảng cũ và cập nhật giá trị mới vào mảng cũ đó
    const newJob = [...jobs, job];
    // Lưu dữ liệu lên local
    localStorage.setItem("jobs", JSON.stringify(newJob));
    // Set lại state để re-render  giao diện
    setJobs(newJob);
    // clean giá trị cũ trong ô input
    setJob("");
    // focus vào ô input khi thêm hàm thành công
    jobRef.current.focus();
  };

  // Xóa công việc
  // B1: lấy được vị trí cần xóa
  // B2: Lọc công việc đó theo danh sách
  // B3: Ghi đè và gửi dữ liệu lên local
  const handleDelete = (index) => {
    // Lọc ra danh sách các công việc có index khác với index cần xóa
    const newJob = jobs.filter((value, i) => i !== index);
    // Lưu mảng mới lên local
    localStorage.setItem("jobs", JSON.stringify(newJob));
    // Set lại state để re-render  giao diện
    setJobs(newJob);
  };
  return (
    <div>
      <div className="d-flex gap-2 mb-3">
        <input
          ref={jobRef}
          value={job}
          onChange={(e) => setJob(e.target.value)}
          className="form-control"
          type="text"
        />
        <button onClick={handleAddJob} className="btn btn-primary">
          Add
        </button>
      </div>
      <ul>
        {jobs.map((job, index) => (
          <li className="d-flex align-items-center justify-content-between mb-3">
            <span>{job}</span>
            <button
              onClick={() => handleDelete(index)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
