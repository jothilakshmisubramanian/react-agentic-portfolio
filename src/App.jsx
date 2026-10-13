import React from "react";

function App() {
  const projects = [
    {
      title: "Image Gallery",
      description:
        "An interactive image gallery with image previews and previous and next navigation.",
      tech: "HTML, CSS, JavaScript",
    },
    {
      title: "Movie List App",
      description:
        "A React application to display movie details with features to add movies to a watchlist and remove them.",
      tech: "React.js, JavaScript, CSS",
    },
    {
      title: "Todo List App",
      description:
        "A React task management application to add, view, and delete daily tasks.",
      tech: "React.js, JavaScript, CSS",
    },
    {
      title: "ShopNest",
      description:
        "An e-commerce website with product browsing, search, and cart features.",
      tech: "HTML, CSS, JavaScript",
    },
    {
      title: "Notes App",
      description:
        "A note-taking application to add, search, edit, and delete notes.",
      tech: "React.js, CSS",
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Python",
    "FastAPI",
    "Git",
    "GitHub",
  ];

  return (
    <div className="portfolio">
      {/* Navigation Bar */}
      <nav className="navbar">
        <h2 className="logo">My Portfolio</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero section */}
      <section className="hero" id="about">
        <div className="hero-content">
          <h1>
            {" "}
            Hi i'm <span>Akshaya S</span>
          </h1>
          <p>
            {" "}
            Aspiring Full Stack Developer passionate about creating beautiful,
            responsive, and user-friendly web applications.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Projects
            </a>
            <a
              href="/resume.pdf"
              download="Akshaya_S_Resume.pdf"
              className="btn btn-secondary"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* project section */}
      <section className="extra-section" id="projects">
        <h2>My Projects</h2>
        <p>Here are the projects i have developed</p>

        <div className="project-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>
                <strong>Technologies:</strong>
                {project.tech}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="extra-section">
        <h2>My Skills</h2>

        <div className="skills-container">
          {skills.map((skills, index) => (
            <span className="skill-card" key={index}>
              {skills}
            </span>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <h2>Contact Me</h2>

        <p>
          I'm an aspiring Full Stack Developer. Feel free to connect with me!
        </p>

        <div className="contact-links">
          <a
            href="mailto:jothilakshmisubramanian@gmail.com"
            className="contact-btn"
          >
            📧 Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/akshaya-subramanian-419944128"
            target="_blank"
            rel="noreferrer"
            className="contact-btn"
          >
            💼 LinkedIn
          </a>

          <a
            href="https://github.com/jothilakshmisubramanian"
            target="_blank"
            rel="noreferrer"
            className="contact-btn"
          >
            💻 GitHub
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2026 Akshaya S. All Rights Reserved.</p>
        <a href="#about" className="back-to-top">
          ↑ Back to Top
        </a>
      </footer>
    </div>
  );
}

export default App;
