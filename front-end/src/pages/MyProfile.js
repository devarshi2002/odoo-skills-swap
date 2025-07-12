// src/pages/MyProfile.js
import React, { useState } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import EditProfile from '../pages/EditProfile'; 
import { Pencil } from 'react-bootstrap-icons';

const MyProfile = () => {
  const { user } = useAuth();

  const [profile, setProfile] = useState({
    name: user?.name || '',
    location: user?.location || '',
    photo: user?.profilePhoto || '',
    skillsOffered: user?.offered || [],
    skillsWanted: user?.wanted || [],
    availability: user?.availability || '',
    isPublic: user?.isPublic ?? true,
  });

  const [showModal, setShowModal] = useState(false);

  return (
    <Container className="py-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>My Profile</h4>
        <Button variant="outline-dark" onClick={() => setShowModal(true)}>
          <Pencil /> Edit
        </Button>
      </div>

      {/* Profile Details */}
      <Row>
        <Col md={6}>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Location:</strong> {profile.location}</p>
          <p>
            <strong>Skills Offered:</strong>{' '}
            {profile.skillsOffered.map((s, i) => (
              <Badge key={i} bg="primary" className="me-1">{s}</Badge>
            ))}
          </p>
          <p><strong>Availability:</strong> {profile.availability}</p>
          <p><strong>Profile:</strong> {profile.isPublic ? 'Public' : 'Private'}</p>
        </Col>

        <Col md={6} className="text-center">
          <img
            src={profile.photo}
            alt="Profile"
            className="rounded-circle"
            width="150"
            height="150"
          />
          <p className="mt-3"><strong>Skills Wanted:</strong></p>
          {profile.skillsWanted.map((s, i) => (
            <Badge key={i} bg="secondary" className="me-1">{s}</Badge>
          ))}
        </Col>
      </Row>

      {/* Modal for Editing */}
      <EditProfile
        show={showModal}
        onClose={() => setShowModal(false)}
        profileData={profile}
        onSave={(updatedProfile) => setProfile(updatedProfile)}
      />
    </Container>
  );
};

export default MyProfile;
