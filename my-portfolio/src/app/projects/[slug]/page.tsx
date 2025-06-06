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
      title_image: "/Home1.png",
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
          content: "/matchify-suggestion.png",
        },
        {
          type: "paragraph",
          content: `My main focus on the project was designing and implementing the backend logic for Matchify’s recommendation system. At the heart of this system is the idea of representing each user's musical taste as a high-dimensional embedding — a vector that captures the nuances of their top tracks, artists, and genres. Initially, we explored training our own neural network to learn these embeddings, aiming to replicate the kind of semantic richness found in Spotify’s own recommendation engine. However, this quickly proved to be unfeasible. Training was computationally expensive, and despite experimenting with different architectures and loss functions, we struggled to get accuracy above 70%. We believe this was largely due to limited training data, underpowered infrastructure, and potentially noisy input labels. Given these challenges, we made the decision to use Spotify’s precomputed audio feature embeddings instead, which gave us reliable, high-quality vectors without the overhead of training from scratch.`,
        },
        {
          type: "paragraph",
          content: `With user embeddings in place, our initial implementation used a straightforward cosine similarity approach to generate match recommendations. For each user, we calculated the similarity score between their embedding vector and every other user’s in the system. While this method was effective in capturing nuance and musical alignment, it had an inherent scalability issue: the matching process was O(n) with respect to the user base size. As the number of users grew, the system quickly became too slow for real-time performance, especially under concurrent load.`,
        },
        {
          type: "paragraph",
          content: `Recognizing this bottleneck, I redesigned the recommendation pipeline to introduce a clustering-based optimization layer. Instead of comparing every user to the entire population, I used K-Means clustering to pre-segment the user base into coherent groups based on their musical embedding vectors. These clusters were then persisted in the database alongside each user’s record, allowing us to efficiently constrain the similarity search to only users within the same cluster.`,
        },
        {
          type: "paragraph",
          content: `This change dramatically reduced computational overhead and response times. In fact, match quality often improved as well — because limiting comparisons to users within the same cluster helped filter out irrelevant matches from the start. By narrowing the search space to musically similar peers, we reduced noise and surfaced more meaningful connections. This optimization transformed our recommendation engine from a brute-force prototype into a system capable of delivering fast, high-quality results at scale, and played a critical role in making Matchify production-ready.`,
        },
        {
          type: "paragraph",
          content: `Looking back on my time working on Matchify, one of the biggest takeaways was the importance of balancing algorithmic accuracy with real-world performance constraints. It’s one thing to build something that works in theory — it’s another to build something that works fast, reliably, and at scale. Optimizing the matching algorithm forced me to deeply consider tradeoffs between brute-force approaches and smarter approximations. In particular, moving from global vector similarity to cluster-based comparisons taught me how architectural decisions can radically impact the usability of a product.`,
        },
        {
          type: "paragraph",
          content: `Just as valuable as the technical learning was the experience of collaborating on a fast-moving product with real users in mind. Building with a team, iterating quickly, and constantly communicating helped me grow as an engineer and as a teammate. Whether it was debugging a broken OAuth flow or tuning our database indexes to speed up match queries, every challenge we faced required both autonomy and coordination — the exact kind of environment I thrive in.`,
        },
        {
          type: "paragraph",
          content: `Now that my role on the project has wrapped up, I’m really excited to see where the rest of the team takes Matchify — especially as new frontend features and social tools come to life. On my end, this project sparked a deeper interest in recommendation systems, user embeddings, and scalable ML infrastructure. I’m now diving into topics like approximate nearest neighbor search (ANN), vector databases like Pinecone and Faiss, and more advanced user modeling techniques. I’m especially interested in how these systems can be applied beyond music — in gaming, learning, and community-building platforms where smart, meaningful connection is everything.`,
        },
        {
          type: "paragraph",
          content: `Matchify reminded me that great technology doesn’t have to be complex — it just has to be thoughtful, well-built, and rooted in something people care about. Music gave us the perfect lens for that, and I’m proud of the impact we made.`,
        },

      ],
    },
    {
      slug: "food-type-prediction",
      title: "🍕 End-to-End Food Type Prediction Using Pure Python",
      title_image: "/Home1.png",
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
          content: "/matchify-suggestion.png",
        },
        {
          type: "paragraph",
          content: `My main focus on the project was designing and implementing the backend logic for Matchify’s recommendation system. At the heart of this system is the idea of representing each user's musical taste as a high-dimensional embedding — a vector that captures the nuances of their top tracks, artists, and genres. Initially, we explored training our own neural network to learn these embeddings, aiming to replicate the kind of semantic richness found in Spotify’s own recommendation engine. However, this quickly proved to be unfeasible. Training was computationally expensive, and despite experimenting with different architectures and loss functions, we struggled to get accuracy above 70%. We believe this was largely due to limited training data, underpowered infrastructure, and potentially noisy input labels. Given these challenges, we made the decision to use Spotify’s precomputed audio feature embeddings instead, which gave us reliable, high-quality vectors without the overhead of training from scratch.`,
        },
        {
          type: "paragraph",
          content: `With user embeddings in place, our initial implementation used a straightforward cosine similarity approach to generate match recommendations. For each user, we calculated the similarity score between their embedding vector and every other user’s in the system. While this method was effective in capturing nuance and musical alignment, it had an inherent scalability issue: the matching process was O(n) with respect to the user base size. As the number of users grew, the system quickly became too slow for real-time performance, especially under concurrent load.`,
        },
        {
          type: "paragraph",
          content: `Recognizing this bottleneck, I redesigned the recommendation pipeline to introduce a clustering-based optimization layer. Instead of comparing every user to the entire population, I used K-Means clustering to pre-segment the user base into coherent groups based on their musical embedding vectors. These clusters were then persisted in the database alongside each user’s record, allowing us to efficiently constrain the similarity search to only users within the same cluster.`,
        },
        {
          type: "paragraph",
          content: `This change dramatically reduced computational overhead and response times. In fact, match quality often improved as well — because limiting comparisons to users within the same cluster helped filter out irrelevant matches from the start. By narrowing the search space to musically similar peers, we reduced noise and surfaced more meaningful connections. This optimization transformed our recommendation engine from a brute-force prototype into a system capable of delivering fast, high-quality results at scale, and played a critical role in making Matchify production-ready.`,
        },
        {
          type: "paragraph",
          content: `Looking back on my time working on Matchify, one of the biggest takeaways was the importance of balancing algorithmic accuracy with real-world performance constraints. It’s one thing to build something that works in theory — it’s another to build something that works fast, reliably, and at scale. Optimizing the matching algorithm forced me to deeply consider tradeoffs between brute-force approaches and smarter approximations. In particular, moving from global vector similarity to cluster-based comparisons taught me how architectural decisions can radically impact the usability of a product.`,
        },
        {
          type: "paragraph",
          content: `Just as valuable as the technical learning was the experience of collaborating on a fast-moving product with real users in mind. Building with a team, iterating quickly, and constantly communicating helped me grow as an engineer and as a teammate. Whether it was debugging a broken OAuth flow or tuning our database indexes to speed up match queries, every challenge we faced required both autonomy and coordination — the exact kind of environment I thrive in.`,
        },
        {
          type: "paragraph",
          content: `Now that my role on the project has wrapped up, I’m really excited to see where the rest of the team takes Matchify — especially as new frontend features and social tools come to life. On my end, this project sparked a deeper interest in recommendation systems, user embeddings, and scalable ML infrastructure. I’m now diving into topics like approximate nearest neighbor search (ANN), vector databases like Pinecone and Faiss, and more advanced user modeling techniques. I’m especially interested in how these systems can be applied beyond music — in gaming, learning, and community-building platforms where smart, meaningful connection is everything.`,
        },
        {
          type: "paragraph",
          content: `Matchify reminded me that great technology doesn’t have to be complex — it just has to be thoughtful, well-built, and rooted in something people care about. Music gave us the perfect lens for that, and I’m proud of the impact we made.`,
        },

      ],
    }
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