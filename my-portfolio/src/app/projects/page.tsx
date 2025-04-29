import Link from 'next/link';

export default function Projects() {
  // Example projects data (replace with dynamic data fetching later)
  const projects = [
    {
      slug: "matchify",
      title: "🎧 Building Matchify: Connecting People Through Music",
      description: "This is a description of Project 1. It’s about...",
      link: "/projects/matchify",
      image: "/matchify.png",
    },
    {
      slug: "project-2",
      title: "Project 2",
      description: "This is a description of Project 2. It’s about...",
      link: "/projects/project-2",
      image: "/image.png",
    },
    {
      slug: "project-3",
      title: "Project 3",
      description: "This is a description of Project 3. It’s about...",
      link: "/projects/project-3",
      image: "/image.png",
    },
  ];

  return (
    <div className="container">
      {/* Main Content */}
      <div className="mainContent">
        {/* Projects Section */}
        <section className="projectsContainer">
          {projects.map((project) => (
            <div key={project.slug} className="projectBubble">
              <img
                src={project.image}
                alt={project.title}
                className="projectImage"
              />
              <div className="projectContent">
                <h3>
                  <Link href={project.link} className="link">
                    {project.title}
                  </Link>
                </h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}