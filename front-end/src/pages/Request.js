// src/Pages/Request.js
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from "react-bootstrap";

const RequestModal = ({ show, onClose, user }) => {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Send a Swap Request</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Choose one of your offered skills</Form.Label>
            <Form.Select>
              <option>JavaScript</option>
              <option>Photoshop</option>
              <option>Python</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Choose one of their wanted skills</Form.Label>
            <Form.Select>
              {user?.wanted.map((skill, idx) => (
                <option key={idx}>{skill}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Write a message..." />
          </Form.Group>
          <div className="text-center">
            <Button variant="primary" onClick={onClose}>
              Submit Request
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default RequestModal;
