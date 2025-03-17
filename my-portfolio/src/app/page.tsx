import styles from './Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Left Sidebar */}
      <div className={styles.sidebar}>
        {/* Profile Picture (Headshot) */}
        <Image
          src="/profile.jpg" // Replace with the path to your headshot image
          alt="Your Name"
          width={150}
          height={150}
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
          <h2>About Me</h2>
          <p>
            Hello! I'm Your Name, a [your profession or role]. I specialize in [your skills or expertise]. 
            This is my personal website where I share my thoughts, projects, and more. I have over 10 years 
            of experience working in [your industry or field], and I’m passionate about solving complex 
            problems using technology and data.
          </p>
          <p>
            My journey began with a degree in [your degree] from [your university]. Since then, I’ve worked 
            with a variety of companies, helping them leverage data and machine learning to drive business 
            outcomes. I’ve worked in domains such as banking, cybersecurity, environmental science, and 
            weather forecasting, and I enjoy the challenge of applying data science to real-world problems.
          </p>
          <p>
            In my current role at [your company], I focus on building scalable machine learning platforms 
            that enable data scientists to iterate quickly and deliver value. I believe that the key to 
            successful machine learning projects lies in shortening feedback loops and empowering teams to 
            focus on their core problems, rather than getting bogged down by infrastructure.
          </p>
          <p>
            Outside of work, I’m passionate about [your hobbies or interests]. Whether it’s [hobby 1], 
            [hobby 2], or [hobby 3], I’m always looking for ways to learn and grow. I also enjoy writing 
            about my experiences and sharing insights on topics like [topic 1], [topic 2], and [topic 3].
          </p>
          <p>
            If you’d like to connect or collaborate, feel free to reach out! You can find me on 
            <a href="https://www.linkedin.com/in/frank-peng-6bb643223/" className={styles.link}> LinkedIn</a>, 
            <a href="https://github.com/Graves451" className={styles.link}> GitHub</a>, or 
            <a href="https://twitter.com/yourusername" className={styles.link}> Twitter</a>. 
            I’m always open to interesting conversations and new opportunities.
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