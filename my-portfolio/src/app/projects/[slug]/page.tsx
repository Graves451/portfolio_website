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
          content: `Over the past few months, I've been working with a team on a full-stack web application called Matchify — a social platform that connects users based on their Spotify listening habits. The idea behind Matchify is simple: music brings people together, and we wanted to build a space where that connection is at the core.`,
        },
        {
          type: "paragraph",
          content: `The spark for Matchify came from a simple question: "What if we could use people's music to find like-minded friends?" We know music says a lot about who we are — it reflects our moods, memories, and identity. So we decided to build a platform that taps into Spotify's rich API and uses that data to match people in meaningful ways.`,
        },
        {
          type: "image",
          content: "/matchify-suggestion.png",
        },
        {
          type: "paragraph",
          content: `My main focus on the project was designing and implementing the backend logic for Matchify's recommendation system. At the heart of this system is the idea of representing each user's musical taste as a high-dimensional embedding — a vector that captures the nuances of their top tracks, artists, and genres. Initially, we explored training our own neural network to learn these embeddings, aiming to replicate the kind of semantic richness found in Spotify's own recommendation engine. However, this quickly proved to be unfeasible. Training was computationally expensive, and despite experimenting with different architectures and loss functions, we struggled to get accuracy above 70%. We believe this was largely due to limited training data, underpowered infrastructure, and potentially noisy input labels. Given these challenges, we made the decision to use Spotify's precomputed audio feature embeddings instead, which gave us reliable, high-quality vectors without the overhead of training from scratch.`,
        },
        {
          type: "paragraph",
          content: `With user embeddings in place, our initial implementation used a straightforward cosine similarity approach to generate match recommendations. For each user, we calculated the similarity score between their embedding vector and every other user's in the system. While this method was effective in capturing nuance and musical alignment, it had an inherent scalability issue: the matching process was O(n) with respect to the user base size. As the number of users grew, the system quickly became too slow for real-time performance, especially under concurrent load.`,
        },
        {
          type: "paragraph",
          content: `Recognizing this bottleneck, I redesigned the recommendation pipeline to introduce a clustering-based optimization layer. Instead of comparing every user to the entire population, I used K-Means clustering to pre-segment the user base into coherent groups based on their musical embedding vectors. These clusters were then persisted in the database alongside each user's record, allowing us to efficiently constrain the similarity search to only users within the same cluster.`,
        },
        {
          type: "paragraph",
          content: `This change dramatically reduced computational overhead and response times. In fact, match quality often improved as well — because limiting comparisons to users within the same cluster helped filter out irrelevant matches from the start. By narrowing the search space to musically similar peers, we reduced noise and surfaced more meaningful connections. This optimization transformed our recommendation engine from a brute-force prototype into a system capable of delivering fast, high-quality results at scale, and played a critical role in making Matchify production-ready.`,
        },
        {
          type: "paragraph",
          content: `Looking back on my time working on Matchify, one of the biggest takeaways was the importance of balancing algorithmic accuracy with real-world performance constraints. It's one thing to build something that works in theory — it's another to build something that works fast, reliably, and at scale. Optimizing the matching algorithm forced me to deeply consider tradeoffs between brute-force approaches and smarter approximations. In particular, moving from global vector similarity to cluster-based comparisons taught me how architectural decisions can radically impact the usability of a product.`,
        },
        {
          type: "paragraph",
          content: `Just as valuable as the technical learning was the experience of collaborating on a fast-moving product with real users in mind. Building with a team, iterating quickly, and constantly communicating helped me grow as an engineer and as a teammate. Whether it was debugging a broken OAuth flow or tuning our database indexes to speed up match queries, every challenge we faced required both autonomy and coordination — the exact kind of environment I thrive in.`,
        },
        {
          type: "paragraph",
          content: `Now that my role on the project has wrapped up, I'm really excited to see where the rest of the team takes Matchify — especially as new frontend features and social tools come to life. On my end, this project sparked a deeper interest in recommendation systems, user embeddings, and scalable ML infrastructure. I'm now diving into topics like approximate nearest neighbor search (ANN), vector databases like Pinecone and Faiss, and more advanced user modeling techniques. I'm especially interested in how these systems can be applied beyond music — in gaming, learning, and community-building platforms where smart, meaningful connection is everything.`,
        },
        {
          type: "paragraph",
          content: `Matchify reminded me that great technology doesn't have to be complex — it just has to be thoughtful, well-built, and rooted in something people care about. Music gave us the perfect lens for that, and I'm proud of the impact we made.`,
        },

      ],
    },
    {
      slug: "classmate",
      title: "📚 Classmate: AI-Powered Study Assistant for Smarter Learning",
      title_image: "/ryko_home.png",
      description: [
        {
          type: "paragraph",
          content: `Classmate is an AI-driven study assistant I helped develop to support students in identifying and addressing knowledge gaps. The vision was to create a platform that didn't just review material but actively guided learners through personalized feedback and recommendations — almost like having a 24/7 tutor powered by neural networks.`,
        },
        {
          type: "image",
          content: "/ryko_ER_diagram.png",
        },
        {
          type: "paragraph",
          content: `I designed the underlying database schema for Classmate to support a scalable learning and discussion platform. As shown in the ER diagram, we modeled entities such as users, courses, threads, and facts, each with clearly defined relationships. This schema allowed us to efficiently track user progress, manage course content, and power collaborative study features like discussion threads and direct messages. The polymorphic thread design (Document, Forum, DMs, Announcements) provided the flexibility to handle diverse types of user interactions within a unified system.`,
        },
        {
          type: "paragraph",
          content: `This ER structure also enabled features like fact-based quizzes linked to courses, personalized user settings, and file uploads per course. We ensured that thread permissions and friendships could be managed cleanly, allowing the system to evolve with additional roles or constraints. Overall, the schema helped lay a strong foundation for integrating intelligent feedback and user engagement features at scale.`,
        },
        {
          type: "paragraph",
          content: `I worked on designing the backend infrastructure for Classmate, which included building robust data pipelines to streamline communication between the frontend, AI services, and storage layers. Using PostgreSQL and JavaScript (Node.js), I engineered APIs that handled everything from file uploads to model outputs, ensuring that learning data flowed efficiently across the system.`,
        },
        {
          type: "paragraph",
          content: `One of the biggest technical challenges was creating a scalable architecture that could process uploaded files (such as lecture notes, PDFs, and textbook scans) and feed them into our neural network-based pipeline. To solve this, I integrated AWS S3 for storage and AWS Lambda for on-demand preprocessing. This serverless setup allowed us to parallelize file parsing, extract content asynchronously, and return insights to the user with minimal latency.`,
        },
        {
          type: "paragraph",
          content: `The core of our intelligence layer was a neural network trained to identify conceptual gaps by analyzing a student's input (questions, notes, answers) and comparing it against a knowledge graph derived from academic sources. I collaborated closely with our ML lead to tune the data ingestion format and ensure the inference system could scale without breaking under load.`,
        },
        {
          type: "paragraph",
          content: `One optimization I implemented was a content caching layer that reduced redundant recomputation for returning users. By hashing each file and tracking which segments had already been processed, we cut down backend costs by 40% while speeding up the user experience significantly.`,
        },
        {
          type: "paragraph",
          content: `Working on Classmate gave me a much deeper appreciation for production ML systems and the nuances of designing for real-world usage. From managing asynchronous job queues to optimizing database indexes for complex joins, every decision impacted performance and usability.`,
        },
        {
          type: "paragraph",
          content: `This project also sparked my interest in educational technology and how intelligent systems can be used to support personalized learning at scale. I'm now exploring ways to make adaptive feedback systems even more responsive and generalizable, especially for underserved academic communities.`,
        },
      ],
    },
    {
      slug: "ml-food-classifier",
      title: "🍕 ML Food Classifier: Building a Model Without External Libraries",
      title_image: "/ryko_ER_diagram.png",
      description: [
        {
          type: "paragraph",
          content: `This project was developed as part of a semester-long machine learning competition in CSC311. The goal was to classify different types of food using a structured dataset that included metadata like cost, ingredient count, preparation time, and serving context — but with a twist: our final model had to be implemented **without any external ML libraries**.`,
        },
        {
          type: "paragraph",
          content: `We started by exploring the dataset with basic EDA to understand distributions, correlations, and outliers. A mix of categorical and continuous features required thoughtful preprocessing — including one-hot encoding, normalization, and feature selection. We also created composite features like 'ingredient density' and 'cost-efficiency' that captured deeper relationships in the data.`,
        },
        {
          type: "paragraph",
          content: `After experimentation, we found that an ensemble approach combining logistic regression and a custom decision rule system performed the best. During training, we used scikit-learn to iterate quickly, but for the final submission, I rewrote the inference pipeline from scratch in pure Python — including the sigmoid function, dot product for weights, and all preprocessing logic.`,
        },
        {
          type: "paragraph",
          content: `One of the biggest challenges was **recreating the model without relying on any libraries**. I implemented the final predictor using only native Python, ensuring every step — from one-hot encoding to classification thresholds — worked as expected. This helped sharpen my understanding of how inference works under the hood.`,
        },
        {
          type: "paragraph",
          content: `To serialize the trained weights and transformations, we exported everything into CSV files. This allowed our \`pred.py\` script to load coefficients and apply predictions deterministically, which was critical for competition grading. The final script was small, fast, and fully self-contained.`,
        },
        {
          type: "paragraph",
          content: "Here's what the final submission included: a `pred.py` script for inference, a `final_model.csv` storing learned parameters, and a technical report outlining our approach and performance.",
        },
        {
          type: "paragraph",
          content: `This project taught me that model performance isn't just about deep networks or fancy libraries — it's about how well you understand your data, engineer your features, and apply the right tools. Stripping everything down to pure logic was a refreshing way to connect theory to practice.`,
        },
        {
          type: "paragraph",
          content: `Moving forward, I'm excited to take the core lessons from this competition — especially around constraint-based model building — and apply them to real-world problems where simplicity, speed, and transparency matter more than raw complexity.`,
        },
      ]
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