import React, { useState } from 'react';
import { Button, Collapse, Card } from 'react-bootstrap';

function renderSwitch(param) {
  switch (param) {
    case "Backend":
      return "Java || Python || Spring Boot || Hibernate || JPA || JDBC || Postgres || MySQL";
    case "Frontend":
      return "Javascript || React || JSX || Tailwind || Bootstrap";
    case "Tools":
      return "IntelliJ || Maven || JUnit || Mockito || EC2 || Lambda || RDS || CodeBuild || OAuth2 || Git";
    default:
      return "";
  }
}

function InfoBlock({ informationType }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4">
      <p>
        <Button
          variant="dark"
          className="p-3"
          onClick={() => setOpen(!open)}
          aria-controls="collapseWidthExample"
          aria-expanded={open}
        >
          {informationType}
        </Button>
      </p>
      <div style={{ minHeight: '120px' }}>
        <Collapse in={open} dimension="width">
          <div id="collapseWidthExample">
            <Card
              body
              style={{
                width: '300px',
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                fontSize: '1rem',
                fontWeight: '500',
                color: '#333',
                lineHeight: '1.5',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                borderRadius: '8px',
                padding: '1rem',
                backgroundColor: '#fff',
              }}
            >
              {renderSwitch(informationType)}
            </Card>
          </div>
        </Collapse>
      </div>
    </div>
  );
}

export default InfoBlock;
