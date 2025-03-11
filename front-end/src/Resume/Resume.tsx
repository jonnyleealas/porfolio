


const Resume: React.FC = () => {
  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1>John Doe</h1>
        <p>Software Engineer</p>
        <div className="contact-info">
          <p>Email: john.doe@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Location: San Francisco, CA</p>
          <p>Website: www.johndoe.com</p>
        </div>
      </header>

      <section className="education">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Bachelor of Science in Computer Science</h3>
          <p>University of Example, 2018 - 2022</p>
          <p>GPA: 3.8/4.0</p>
        </div>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Software Engineer - XYZ Corp</h3>
          <p>June 2022 - Present</p>
          <ul>
            <li>Developed and maintained web applications using React and Node.js.</li>
            <li>Worked in an Agile team to deliver features on time.</li>
            <li>Collaborated with cross-functional teams to design and implement APIs.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Intern - ABC Tech</h3>
          <p>Summer 2021</p>
          <ul>
            <li>Assisted in building front-end components with HTML, CSS, and JavaScript.</li>
            <li>Worked on a small team to improve user experience on the company's web app.</li>
          </ul>
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
          <li>Git/GitHub</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-item">
          <h3>Personal Portfolio</h3>
          <p>A personal website built with React showcasing my work and skills.</p>
        </div>
        <div className="project-item">
          <h3>Task Manager App</h3>
          <p>A full-stack task manager application using React and Node.js with a MongoDB database.</p>
        </div>
      </section>
    </div>
  );
};

export default Resume;
