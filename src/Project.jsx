import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Project({ nameOfProject, techUsed, linkToGithub, description }) {
  return (
    <Card style={{ width: '100%', maxWidth: '500px', margin: '20px auto', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <Card.Body>
        <Card.Title className="text-primary" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
          {nameOfProject}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontStyle: 'italic' }}>
          {techUsed}
        </Card.Subtitle>
        <Card.Text style={{ marginTop: '10px' }}>
          {description}
        </Card.Text>
        <Button
          variant="dark"
          href={linkToGithub}
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: '15px' }}
        >
          View on GitHub
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Project;
