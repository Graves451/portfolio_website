import Link from 'next/link';

export default function Projects() {
  // Example projects data (replace with dynamic data fetching later)
  const projects = [
    {
      slug: "matchify",
      title: "🎧 Building Matchify: Connecting People Through Music",
      description: "This is a description of Project 1. It’s about...",
      link: "/projects/matchify",
      image: "/Home1.png",
    },
    {
      slug: "classmate",
      title: "classmate",
      description: "This is a description of Project 3. It’s about...",
      link: "/projects/classmate",
      image: "/ryko_home.png",
    },
    {
      slug: "ml-food-classifier",
      title: "🍕 End-to-End Food Type Prediction Using Pure Python",
      description: "This is a description of Project 2. It’s about...",
      link: "/projects/ml-food-classifier",
      image: "/food-classifer.png",
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