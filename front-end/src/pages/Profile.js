// src/Pages/Profile.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { dummyRequests } from "../dummyData";
import RequestModal from "./Request";
import "../theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = () => {
  const { id } = useParams();
  const user = dummyRequests.find((u) => u.id === parseInt(id));
  const [showModal, setShowModal] = useState(false);

  if (!user) return <div>User not found</div>;

  return (
    <div className="container py-4" style={{ fontFamily: "Roboto, sans-serif" }}>
      <h2 className="text-primary mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
        {user.name}'s Profile
      </h2>

      <div className="row">
        {/* Left Column */}
        <div className="col-md-6">
          <button className="btn btn-primary mb-3" onClick={() => setShowModal(true)}>
            Request
          </button>
          <h4>{user.name}</h4>
          <p>
            <strong>Skills Offered:</strong>{" "}
            {user.offered.map((skill, idx) => (
              <span className="badge bg-primary me-1" key={idx}>
                {skill}
              </span>
            ))}
          </p>
          <p>
            <strong>Skills Wanted:</strong>{" "}
            {user.wanted.map((skill, idx) => (
              <span className="badge bg-secondary me-1" key={idx}>
                {skill}
              </span>
            ))}
          </p>
        </div>

        {/* Right Column */}
        <div className="col-md-6 text-center">
          <img
            src={user.profilePhoto}
            alt="Profile"
            className="rounded-circle mb-3"
            width="150"
            height="150"
          />
          <h5 className="text-muted">Rating & Feedback</h5>
          <p>{user.rating}/5</p>
        </div>
      </div>

      {/* Modal */}
      <RequestModal show={showModal} onClose={() => setShowModal(false)} user={user} />
    </div>
  );
};

export default Profile;
