import { notFound } from 'next/navigation';

interface ProjectContent {
    type: "paragraph" | "image";
    content: string;
  }
  
  interface Project {
    slug: string;
    title: string;
    title_image: string;
    description: ProjectContent[];
  }

  const projects: Project[] = [
    {
      slug: "matchify",
      title: "🎧 Building Matchify: Connecting People Through Music",
      title_image: "/image.png",
      description: [
        {
          type: "paragraph",
          content: `Over the past few months, I’ve been working with a team on a full-stack web application called Matchify — a social platform that connects users based on their Spotify listening habits. The idea behind Matchify is simple: music brings people together, and we wanted to build a space where that connection is at the core.`,
        },
        {
          type: "paragraph",
          content: `The spark for Matchify came from a simple question: "What if we could use people’s music to find like-minded friends?" We know music says a lot about who we are — it reflects our moods, memories, and identity. So we decided to build a platform that taps into Spotify’s rich API and uses that data to match people in meaningful ways.`,
        },
        {
          type: "image",
          content: "/image1.png",
        },
        {
          type: "paragraph",
          content: `Matchify is a social networking app that connects users through shared music preferences. After logging in and linking a Spotify account, Matchify begins analyzing your listening data — everything from top tracks and favorite genres to your most played artists.`,
        },
        {
          type: "image",
          content: "/image2.png",
        },
        {
          type: "paragraph",
          content: `Using this information, the platform recommends compatible friends whose musical tastes align with yours, helping you build connections through something as personal as your playlist. It also suggests local music events that fit your interests, and offers an in-app chat to share songs, discuss artists, and create a music-rooted social circle.`,
        },
        {
          type: "image",
          content: "/image3.png",
        },
      ],
    },
  ];


export default async function ProjectPage({ params }: { params: { slug: string } }) {
    // Explicitly await the params object
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    
    const project = projects.find((p) => p.slug === slug);
    
    if (!project) {
      notFound();
    }
    
    return (
        <div className="mainContent">
          <div className="about">
            <div
              className="projectBackgroundContainer"
              style={{ backgroundImage: `url(${project.title_image})` }}
            ></div>
            <div className="aboutContent">
              <h2>{project.title}</h2>
              {project.description.map((item, index) => {
                if (item.type === "paragraph") {
                  return <p key={index}>{item.content}</p>;
                } else if (item.type === "image") {
                  return (
                    <img
                      key={index}
                      src={item.content}
                      alt={`${project.title} - Image ${index + 1}`}
                      style={{ width: "100%", borderRadius: "12px", marginBottom: "20px" }}
                    />
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      );
}