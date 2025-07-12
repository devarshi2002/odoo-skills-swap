// src/components/EditProfile.js
import React, { useState } from 'react';
import { Modal, Button, Form, Badge } from 'react-bootstrap';

const EditProfile = ({ show, onClose, profileData, onSave }) => {
  const [formData, setFormData] = useState({ ...profileData });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSkillAdd = (type) => {
    const skill = prompt(`Enter a new ${type} skill:`)?.trim();
    if (skill) {
      setFormData((prev) => ({
        ...prev,
        [type]: [...prev[type], skill],
      }));
    }
  };

  const handleSkillRemove = (type, index) => {
    setFormData((prev) => ({
      ...prev,
      [type]: prev[type].filter((_, i) => i !== index),
    }));
  };

  const handlePhotoChange = () => {
    const newUrl = prompt('Enter new profile photo URL:');
    if (newUrl) {
      setFormData((prev) => ({ ...prev, photo: newUrl }));
    }
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" value={formData.name} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control name="location" value={formData.location} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Skills Offered</Form.Label>
          <div className="mb-2">
            {formData.skillsOffered.map((skill, i) => (
              <Badge key={i} bg="primary" className="me-2">
                {skill}{' '}
                <span style={{ cursor: 'pointer' }} onClick={() => handleSkillRemove('skillsOffered', i)}>×</span>
              </Badge>
            ))}
          </div>
          <Button size="sm" onClick={() => handleSkillAdd('skillsOffered')}>Add</Button>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Skills Wanted</Form.Label>
          <div className="mb-2">
            {formData.skillsWanted.map((skill, i) => (
              <Badge key={i} bg="secondary" className="me-2">
                {skill}{' '}
                <span style={{ cursor: 'pointer' }} onClick={() => handleSkillRemove('skillsWanted', i)}>×</span>
              </Badge>
            ))}
          </div>
          <Button size="sm" onClick={() => handleSkillAdd('skillsWanted')}>Add</Button>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Availability</Form.Label>
          <Form.Control name="availability" value={formData.availability} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Profile</Form.Label>
          <Form.Select
            name="isPublic"
            value={formData.isPublic ? 'public' : 'private'}
            onChange={(e) => setFormData({ ...formData, isPublic: e.target.value === 'public' })}
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </Form.Select>
        </Form.Group>

        <div className="text-center">
          <img
            src={formData.photo}
            alt="Profile"
            className="rounded-circle mb-2"
            width="120"
            height="120"
          />
          <div>
            <Button variant="outline-secondary" size="sm" onClick={handlePhotoChange}>Change Photo</Button>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Cancel</Button>
        <Button variant="primary" onClick={handleSubmit}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditProfile;
