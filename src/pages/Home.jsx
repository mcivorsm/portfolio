// src/pages/Home.jsx
import React from 'react';
import InfoBlock from '../InfoBlock';
import myPhoto from '../assets/headshot.jpg';

function Home() {
  return (
    <div
      className="d-flex flex-column align-items-center min-vh-100"
      style={{ backgroundColor: '#f0f2f5', paddingTop: '40px', paddingBottom: '40px' }}
    >
      <img
        src={myPhoto}
        style={{ width: '300px', borderRadius: '8px', marginBottom: '40px' }}
      />

      {/* About Section */}
      <section
        style={{
          maxWidth: '700px',
          background: 'linear-gradient(135deg, #6b8dd6, #b9c6f2)',
          borderRadius: '16px',
          padding: '25px 30px',
          color: 'white',
          fontFamily: "'Georgia', serif",
          fontSize: '1.1rem',
          fontStyle: 'italic',
          boxShadow: '0 8px 20px rgba(107, 141, 214, 0.4)',
          marginBottom: '50px',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <h2
          style={{
            fontWeight: '700',
            marginBottom: '15px',
            position: 'relative',
            display: 'inline-block',
          }}
        >
          About Me
          <span
            style={{
              position: 'absolute',
              height: '3px',
              width: '50%',
              backgroundColor: '#ffdd57',
              bottom: '-6px',
              left: '25%',
              borderRadius: '2px',
            }}
          ></span>
        </h2>
        <p>
          I’m a passionate developer currently based in the Washington D.C. area and skilled in full-stack web technologies.
         I am always eager to learn new technigques and about building scalable applications. This site showcases
          my expertise and tools I use. I specialize in java backend development and have spent much of the last 6 months learning Spring/Spring Boot. 
            Outside of programming I spend alot of my time watching or playing soccer with friends. I also enjoy going out to new restaurants and trying different foods. 
            If you would like to connect I am currently open to new opportunities. Thanks for visiting!
        </p>
      </section>

      <div className="d-flex justify-content-around flex-wrap" style={{ gap: '20px', width: '100%', maxWidth: '960px' }}>
        <InfoBlock informationType="Backend" />
        <InfoBlock informationType="Frontend" />
        <InfoBlock informationType="Tools" />
      </div>
    </div>
  );
}

export default Home;
