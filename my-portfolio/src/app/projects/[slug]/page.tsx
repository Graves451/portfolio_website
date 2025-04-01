import { notFound } from 'next/navigation';

interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
}

// Example project data (replace with dynamic fetching later)
const projects: Project[] = [
  {
    slug: "project-1",
    title: "Project 1",
    description: "This is a detailed description of Project 1. It’s about...",
    image: "/image1.png",
  },
  {
    slug: "project-2",
    title: "Project 2",
    description: "This is a detailed description of Project 2. It’s about...",
    image: "/image2.png",
  },
  {
    slug: "project-3",
    title: "Project 3",
    description: "This is a detailed description of Project 3. It’s about...",
    image: "/image3.png",
  },
];

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mainContent">
      <h1>{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        style={{ width: '100%', borderRadius: '12px', marginBottom: '20px' }}
      />
      <p>{project.description}</p>
    </div>
  );
}