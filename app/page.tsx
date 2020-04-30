import Nav from '@/components/Nav';
import Sidebar from '@/components/Sidebar';
import EmailSidebar from '@/components/EmailSidebar';
import Intro from '@/components/Intro';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Sidebar />
      <EmailSidebar />
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
