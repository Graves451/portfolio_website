import styles from "../Home.module.css";
import Link from "next/link";
import Image from "next/image";

interface Project {
  slug: string;
  title: string;
  description: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    slug: "project-1",
    title: "Project 1",
    description: "This is a description of Project 1. It’s about...",
    link: "#",
    image: "/image.png",
  },
  {
    slug: "project-2",
    title: "Project 2",
    description: "This is a description of Project 2. It’s about...",
    link: "#",
    image: "/image.png",
  },
  {
    slug: "project-3",
    title: "Project 3",
    description: "This is a description of Project 3. It’s about...",
    link: "#",
    image: "/image.png",
  },
  {
    slug: "project-4",
    title: "Project 4",
    description: "This is a description of Project 4. It’s about...",
    link: "#",
    image: "/image.png",
  },
];

export default function Projects() {
  return (
    <div className={styles.container}>
      {/* Left Sidebar */}
      <div className={styles.sidebar}>
        {/* Profile Picture */}
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

        {/* Social Icons */}
        <div className={styles.icons}>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <h2>Projects</h2>
        <div className={styles.projectsContainer}>
          {projects.map((project) => (
            <div key={project.slug} className={styles.projectBubble}>
              {/* Project Image */}
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={180}
                className={styles.projectImage}
              />

              {/* Project Content */}
              <div className={styles.projectContent}>
                <h3>
                  <Link href={project.link} className={styles.link}>
                    {project.title}
                  </Link>
                </h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
