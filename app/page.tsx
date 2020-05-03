import LeftSidebar from '@/components/LeftSidebar';
import Intro from '@/components/Intro';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <LeftSidebar />
      <div className="lg:ml-[300px]">
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
