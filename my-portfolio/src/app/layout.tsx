import { Inter } from 'next/font/google';
import './globals.css';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Your Name - Personal Website',
  description: 'Welcome to my personal website!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Add Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body className={inter.className}>
        <div className="container">
          {/* Sidebar */}
          <div className="sidebar">
            <Image
              src="/profile.jpeg"
              alt="Your Name"
              width={200}
              height={200}
              className="profilePic"
            />
            <nav>
              <ul className="nav">
                <li><a href="/about" className="link">About</a></li>
                <li><a href="/blog" className="link">Blog</a></li>
                <li><a href="/projects" className="link">Projects</a></li>
                <li><a href="/contact" className="link">Contact</a></li>
              </ul>
            </nav>
            <div className="icons">
              <a href="https://github.com/Graves451" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/frank-peng-6bb643223/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Main Content */}
          <div className="mainContent">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}