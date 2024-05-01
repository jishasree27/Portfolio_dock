
// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>

      <h1>Jisha Sree A</h1>
      <h2>Software Engineer</h2>
    </header>
  );
}

function Introduction() {
  return (
    <section id="introduction">
      <div className="container">
        <h2>Introduction</h2>
        <p>Welcome to my portfolio! I am a passionate developer with a love for creating awesome web applications.</p>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>FaceMask Disinfection Device</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Basic Crud application</p>
        </div>
        {/* Add more projects here */}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2>Skills</h2>
        <ul>
          <li>java</li>
          <li>devops</li>
          <li>JavaScript</li>
          <li>React</li>
          {/* Add more skills here */}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2>Contact</h2>
        <p>Email: jishasree2002@gmail.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 My Portfolio</p>
    </footer>
  );
}

export default App;
