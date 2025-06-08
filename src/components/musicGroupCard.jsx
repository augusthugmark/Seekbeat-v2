import React from 'react';
import { Card, Button } from 'react-bootstrap';

const MusicGroupCard = ({ group, onDetailsClick }) => {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body className="d-flex justify-content-between align-items-center">
        <Card.Title className="mb-0">{group.name}</Card.Title>
        <Button variant="primary" size="sm" onClick={onDetailsClick}>
          Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MusicGroupCard;