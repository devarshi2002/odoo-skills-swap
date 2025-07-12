import React, { useState } from "react";
import { Link } from "react-router-dom";
import { dummyRequests } from "../dummyData";
import "../theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SwapRequest = () => {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const requestsPerPage = 10;

  const filteredRequests = dummyRequests.filter((req) => {
    return (
      (filter === "all" || req.status === filter) &&
      req.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  const totalPages = Math.ceil(filteredRequests.length / requestsPerPage);
  const paginatedRequests = filteredRequests.slice(
    (currentPage - 1) * requestsPerPage,
    currentPage * requestsPerPage
  );

  return (
    <div className="container py-4" style={{ fontFamily: "Roboto, sans-serif" }}>
      <div className="mb-4">
        <h2 className="text-primary" style={{ fontFamily: "Inter, sans-serif" }}>Swap Requests</h2>
      </div>

      {/* Filter and Search */}
      <div className="row mb-4">
        <div className="col-md-3">
          <select
            className="form-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="accepted">Accepted</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
        <div className="col-md-9">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Request Cards */}
      <div className="row">
        {paginatedRequests.map((req) => (
          <div className="col-md-12 mb-3" key={req.id}>
            <div className="card shadow-sm p-3" style={{ backgroundColor: "#FFFFFF" }}>
              <div className="row align-items-center">
                {/* Profile Image */}
                <div className="col-md-2 text-center">
                  <Link to={`/profile/${req.id}`}>
                    <img
                      src={req.profilePhoto}
                      alt="Profile"
                      className="rounded-circle mb-2"
                      width="80"
                      height="80"
                      style={{ cursor: "pointer" }}
                    />
                  </Link>
                  <div className="text-secondary">{req.rating}/5</div>
                </div>

                {/* Name and Skills */}
                <div className="col-md-7">
                  <Link to={`/profile/${req.id}`} className="text-decoration-none">
                    <h5 className="text-dark mb-1" style={{ cursor: "pointer" }}>
                      {req.name}
                    </h5>
                  </Link>
                  <p className="mb-1">
                    <strong>Offered:</strong>{" "}
                    {req.offered.map((skill) => (
                      <span className="badge bg-primary me-1" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </p>
                  <p>
                    <strong>Wanted:</strong>{" "}
                    {req.wanted.map((skill) => (
                      <span className="badge bg-secondary me-1" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </p>
                </div>

                {/* Status and Action */}
                <div className="col-md-3 text-md-end text-start mt-3 mt-md-0">
                  <p>
                    <strong>Status:</strong>{" "}
                    <span
                      className={`badge ${
                        req.status === "pending"
                          ? "bg-warning text-dark"
                          : req.status === "accepted"
                          ? "bg-success"
                          : "bg-danger"
                      }`}
                    >
                      {req.status.charAt(0).toUpperCase() + req.status.slice(1)}
                    </span>
                  </p>
                  {req.status === "pending" && (
                    <>
                      <button className="btn btn-success btn-sm me-2">Accept</button>
                      <button className="btn btn-outline-danger btn-sm">Reject</button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-4">
          <nav>
            <ul className="pagination">
              {[...Array(totalPages).keys()].map((num) => (
                <li
                  key={num}
                  className={`page-item ${currentPage === num + 1 ? "active" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(num + 1)}
                  >
                    {num + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default SwapRequest;
