import styles from './Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Left Sidebar */}
      <div className={styles.sidebar}>
        {/* Profile Picture (Headshot) */}
        <Image
          src="/profile.jpeg" // Replace with the path to your headshot image
          alt="Your Name"
          width={200}
          height={200}
          className={styles.profilePic}
        />

        {/* Navigation Links */}
        <nav>
          <ul className={styles.nav}>
            <li><a href="about" className={styles.link}>About</a></li>
            <li><a href="blog" className={styles.link}>Blog</a></li>
            <li><a href="projects" className={styles.link}>Projects</a></li>
            <li><a href="contact" className={styles.link}>Contact</a></li>
          </ul>
        </nav>

        {/* Icons under the headshot */}
        <div className={styles.icons}>
          <a href="https://github.com/Graves451" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> {/* GitHub icon */}
          </a>
          <a href="https://www.linkedin.com/in/frank-peng-6bb643223/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> {/* LinkedIn icon */}
          </a>
        </div>
      </div>

            {/* Main Content */}
            <div className={styles.mainContent}>
{/* About Section */}
<section id="about" className={styles.about}>
  <h2>Hey - I'm Qiyuan Peng 🚀</h2>
  <p>
    I'm a software engineer and a Computer Science & Statistics student at the University of Toronto, with a deep interest in how intelligent systems can be designed to solve real-world problems. I’m especially fascinated by the blend of algorithmic precision and practical usability — building tools that not only work well under the hood but also make people’s lives tangibly better.
  </p>
  <p>
    My projects have spanned everything from music taste matching using neural embeddings, to AI-driven study tools that adapt to user needs, to gamified platforms that make learning and debating more engaging. Across all of them, one theme remains: I care deeply about crafting systems that feel thoughtful, efficient, and intuitive — systems that don’t just function, but resonate.
  </p>
  <p>
    During my recent internship at Kaboo Financial, I worked alongside experienced engineers to improve infrastructure, streamline testing workflows, and refine backend performance. I learned the value of scalable architecture and clean design in high-stakes environments, and discovered that I love contributing to teams where ideas move fast and every commit counts. Whether it's designing robust data schemas or tracking down edge-case bugs, I find a lot of satisfaction in the details.
  </p>
  <p>
    I'm particularly drawn to work at the intersection of machine learning, personalization, and human–computer interaction — places where algorithms meet behavior, and where code can shape experiences in subtle, powerful ways. I thrive in roles where there's space to think deeply, collaborate openly, and build things that challenge the status quo.
  </p>
  <p>
    When I’m not coding, I’m usually breaking down how AI could change strategy games, reading up on game theory, or experimenting with new datasets for fun. I see tech not just as a job, but as a craft — one that rewards curiosity, clarity, and relentless iteration.
  </p>
  <p>
    If you're working on something ambitious — whether it’s a product, a research idea, or an experimental concept that doesn’t quite fit the mold — I’d love to connect.
  </p>
</section>

        {/* Contact Section */}
        <section id="contact" className={styles.section}>
          <h2>Contact</h2>
          <p>You can reach me at <a href="mailto:qiyuan.peng@mail.utoronto.ca" className={styles.link}>qiyuan.peng@mail.utoronto.ca</a>.</p>
        </section>
      </div>
    </div>
  );
}