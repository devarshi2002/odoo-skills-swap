import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { dummyRequests } from "../dummyData";

const Browse = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAvailability, setSelectedAvailability] = useState('');

  const handleRequest = (name) => {
    if (!user) {
      alert('Please log in to request a swap.');
      navigate('/login');
    } else {
      alert(`Swap request sent to ${name}`);
    }
  };

  // 🔍 Filter logic (availability currently mocked for future use)
  const filteredUsers = dummyRequests.filter((u) => {
    const matchesSkill = u.offered
      .concat(u.wanted)
      .join(' ')
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // availability not present in data, so just allow all for now
    const matchesAvailability =
      selectedAvailability === '' || u.availability === selectedAvailability;

    return matchesSkill && matchesAvailability;
  });

  return (
    <Container className="py-4">
      {/* Filters */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
        <Form.Select
          style={{ maxWidth: '200px' }}
          value={selectedAvailability}
          onChange={(e) => setSelectedAvailability(e.target.value)}
        >
          <option value="">All Availability</option>
          <option value="Weekends">Weekends</option>
          <option value="Evenings">Evenings</option>
        </Form.Select>

        <Form.Control
          type="text"
          placeholder="Search skill..."
          style={{ maxWidth: '300px' }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Cards */}
      <Row>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((userCard) => (
            <Col key={userCard.id} md={12}>
              <Card className="mb-3 shadow-sm" style={{ backgroundColor: 'var(--surface)' }}>
                <Card.Body className="d-flex align-items-center">
                  <Link to={`/profile/${userCard.id}`}>
                    <img
                      src={userCard.profilePhoto}
                      alt={userCard.name}
                      className="rounded-circle me-3"
                      style={{ width: '70px', height: '70px', objectFit: 'cover', cursor: 'pointer' }}
                    />
                  </Link>

                  <div className="flex-grow-1">
                    <Link
                      to={`/profile/${userCard.id}`}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <h5 className="mb-1" style={{ cursor: 'pointer' }}>{userCard.name}</h5>
                    </Link>

                    <div>
                      <strong style={{ color: 'var(--primary)' }}>Skills Offered ➔</strong>{' '}
                      {userCard.offered.map((skill, i) => (
                        <span key={i} className="badge bg-primary text-white me-2">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="mt-1">
                      <strong style={{ color: 'var(--secondary)' }}>Skills Wanted ➔</strong>{' '}
                      {userCard.wanted.map((skill, i) => (
                        <span key={i} className="badge bg-secondary text-white me-2">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Optional: status badge */}
                    {/* <div className="mt-2">
                      <span
                        className={`badge ${
                          userCard.status === 'accepted'
                            ? 'bg-success'
                            : userCard.status === 'rejected'
                            ? 'bg-danger'
                            : 'bg-warning text-dark'
                        }`}
                      >
                        {userCard.status}
                      </span>
                    </div> */}
                  </div>

                  {/* Right side */}
                  <div className="text-end ms-3">
                    <p className="mb-1" style={{ color: 'var(--text-secondary)' }}>
                      Rating: {userCard.rating}/5
                    </p>
                    <Button
                      variant="outline-primary"
                      onClick={() => handleRequest(userCard.name)}
                    >
                      Request
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col>
            <p className="text-center text-muted">No matches found.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Browse;
