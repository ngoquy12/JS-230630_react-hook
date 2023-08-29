import React, { useEffect, useRef, useState } from "react";
import Modal from "../modal/Modal";
import Toast_Message from "../toast-message/Toast_Message";

export default function () {
  const [jobs, setJobs] = useState(() => {
    const jobLocal = JSON.parse(localStorage.getItem("jobs")) || [];
    return jobLocal;
  });
  const [job, setJob] = useState("");
  const inputRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [option, setOption] = useState("");

  console.log(option);

  // Thêm mới công việc
  const handleAddJob = () => {
    const updateJob = [...jobs, job];
    setJobs(updateJob);
    localStorage.setItem("jobs", JSON.stringify(updateJob));
    inputRef.current.focus();
    setJob("");
  };

  const handleDelete = () => {
    const updatedJobs = jobs.filter((_, i) => i !== index);
    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
    setShowModal(false);
    setTimeout(() => {
      setShowToast(true);
    }, 1000);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowToast(false);
    }, 6000);
  }, [showModal]);

  const handleShowModal = (index) => {
    setIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* Show modal */}
      {showModal && (
        <Modal handleCloseModal={handleCloseModal} ok={handleDelete} />
      )}
      {/* Show toast */}
      {showToast && <Toast_Message />}
      <div className="d-flex gap-2 mb-4">
        <input
          ref={inputRef}
          type="text"
          className="form-control"
          placeholder="Nhập công việc..."
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <button onClick={handleAddJob} className="btn btn-primary">
          Thêm
        </button>
      </div>
      <ul className="list-item w-100">
        {jobs.map((j, index) => (
          <li className="" key={index}>
            <div className="mb-3 d-flex align-items-center justify-content-between">
              <span>{j}</span>
              <span>
                <button
                  className="btn btn-danger"
                  onClick={() => handleShowModal(index)}
                >
                  Xóa
                </button>
              </span>
            </div>
          </li>
        ))}
      </ul>
      <select onChange={(e) => setOption(e.target.value)} value={option}>
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
        <option value="4">D</option>
        <option value="5">E</option>
      </select>
    </>
  );
}
