import "./App.css";

function App() {
  return (
    <div className="container">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Hadiya</h2>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Home */}
      <section id="home" className="section home">
        <h1>Hi, I'm Hadiya 👋</h1>
        <p>ASPIRING SOFTWARE ENGINEER</p>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a Computer Science student passionate about web development,
          React JS, and building modern web applications.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section skills">
        <h2>Skills</h2>
        <div className="skill-box">
          <span>HTML</span>
          <span>CSS</span>
          <span>C Programming</span>
          <span>C++ Programming</span>
          <span>React</span>
          <span>MySQL</span>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="projects">

          <div className="project-card">
            <h3>Pharmacy Management System</h3>
            <p>Web application to manage medicines and inventory.</p>
          </div>

          <div className="project-card">
            <h3>Scholarship Portal</h3>
            <p>Online platform for students to apply for scholarships.</p>
          </div>

          <div className="project-card">
            <h3>Dice Roll Game (Python)</h3>
            <p>A Python game that simulates rolling a dice using random numbers.</p>
          </div>

          <div className="project-card">
            <h3>Rock Paper Scissors (Python)</h3>
            <p>A command-line Python game played against the computer.</p>
          </div>

          <div className="project-card">
            <h3>Guess the Number Game (Python)</h3>
            <p>A Python game where the user guesses a randomly generated number.</p>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <h2>Contact</h2>
        <p>Email: hadiyashereef@gmail.com</p>
        <p>GitHub:https://github.com/</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Hadiya. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
