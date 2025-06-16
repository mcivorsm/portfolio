import React from 'react';
import Project from '../Project';

function Projects() {
  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ minHeight: '100vh', backgroundColor: '#f9fafb', padding: '40px 20px' }}
    >
      <h1 style={{ marginBottom: '40px', fontWeight: 'bold', color: '#343a40' }}>My Projects</h1>

      <Project
        nameOfProject="Ipsum Game Reviews-Full Stack Web App"
        techUsed="React, Spring Boot, MySQL, AWS"
        linkToGithub="https://github.com/mcivorsm/Capstone-Lorem-Ipsum"
        description="Lead a team of three devlopers in the devlopement of a full stack web application. It is a lightweight 
        game review service hosted using several AWS services.
          I personally implemented our security system via Spring Security as well as handled all cloud configurations. 
        I also implemented the Navbar component and GameReview component on the frontend side."
      />

      <Project
        nameOfProject="DevTrack"
        techUsed="Node.js, Express, MongoDB"
        linkToGithub="https://github.com/example/devtrack"
        description="A developer-focused task management system with tagging, status tracking, and notifications."
      />

      <Project
        nameOfProject="Portfolio Site"
        techUsed="React, Bootstrap, EmailJS"
        linkToGithub="https://github.com/example/portfolio"
        description="My personal portfolio site showcasing my projects, skills, and contact information."
      />
    </div>
  );
}

export default Projects;
