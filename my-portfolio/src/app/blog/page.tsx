import styles from '../Home.module.css';
import Link from 'next/link';

export default function Projects() {
  // Example projects data (replace with dynamic data fetching later)
  const projects = [
    {
      slug: "project-1",
      title: "Project 1",
      description: "This is a description of Project 1. It’s about...",
      link: "#",
    },
    {
      slug: "project-2",
      title: "Project 2",
      description: "This is a description of Project 2. It’s about...",
      link: "#",
    },
  ];

  return (
    <div className={styles.container}>
      {/* Left Sidebar */}
      <div className={styles.sidebar}>
        {/* Profile Picture (Headshot) */}
        <img
          src="/profile.jpg" // Replace with the path to your headshot image
          alt="Your Name"
          className={styles.profilePic}
        />

        {/* Navigation Links */}
        <nav>
          <ul className={styles.nav}>
            <li><a href="/" className={styles.link}>Home</a></li>
            <li><a href="/blog" className={styles.link}>Blog</a></li>
            <li><a href="/projects" className={styles.link}>Projects</a></li>
            <li><a href="/contact" className={styles.link}>Contact</a></li>
          </ul>
        </nav>

        {/* Icons under the headshot */}
        <div className={styles.icons}>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> {/* GitHub icon */}
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> {/* LinkedIn icon */}
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> {/* Twitter icon */}
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Projects Section */}
        <section className={styles.about}>
          <h2>Projects</h2>
          {projects.map((project) => (
            <div key={project.slug} className={styles.project}>
              <h3>
                <Link href={project.link} className={styles.link}>
                  {project.title}
                </Link>
              </h3>
              <p>{project.description}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}