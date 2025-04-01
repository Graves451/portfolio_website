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