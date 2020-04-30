const Projects = () => {
  const projects = [
    {
      title: 'AutoNinjas',
      description:
        'I built a scalable full-stack application that centralizes task management, using a modular API and responsive UI to enable real-time updates and reduce workflow friction.',
      technologies: [
        'Next.js',
        'React.js',
        'AWS Lambda',
        'AWS S3',
        'AWS EC2',
        'AWS DynamoDB',
        'TypeScript',
      ],
      link: '#',
      featured: true,
    },
    {
      title: 'BlockTr',
      description:
        'I designed and implemented the system architecture, integrated Web3 functionality, and built secure data models and authentication flows.',
      technologies: ['Vue.js', 'Vuex', 'Smart Contract', 'TailwindCSS'],
      link: '#',
      featured: true,
    },
    {
      title: 'Build Hi Website',
      description:
        'Designed and developed the official website and application for the Hi Marketplace, implemented smart contracts, and built secure data models and authentication systems.',
      technologies: ['React', 'Next.js', 'TailwindCSS', 'Web3', 'Smart Contract'],
      link: '#',
      featured: true,
    },
    {
      title: 'Build Bnb Domain Marketplace',
      description:
        'Designed and developed a BNB domain marketplace, implemented smart contracts, and integrated Web3 to enable secure on-chain transactions.',
      technologies: ['React', 'Next.js', 'TailwindCSS', 'Web3', 'Smart Contract'],
      link: '#',
      featured: true,
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-[1000px] w-full">
        <div className="flex items-center mb-12">
          <span className="text-[#64ffda] font-mono text-xl mr-4">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#ccd6f6] whitespace-nowrap">
            Some Things I&apos;ve Built
          </h2>
          <div className="ml-6 h-[1px] bg-[#233554] flex-1"></div>
        </div>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-[1fr_1fr] gap-6 group ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div
                className={`${
                  index % 2 === 0 ? 'md:order-2' : 'md:order-1'
                } relative`}
              >
                <div className="absolute inset-0 bg-[#64ffda]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-[#112240] rounded-lg p-6 h-full border border-[#233554] hover:border-[#64ffda]/50 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[#64ffda] text-sm font-mono">
                      Featured Project
                    </span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
                      aria-label="External Link"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                  <h3 className="text-2xl font-bold text-[#ccd6f6] mb-4 hover:text-[#64ffda] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#8892b0] mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-4 text-sm font-mono text-[#8892b0]">
                    {project.technologies.map((tech, techIndex) => (
                      <li key={techIndex}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className={`${
                  index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                } relative`}
              >
                <div className="relative w-full h-full min-h-[300px] bg-[#112240] rounded-lg border border-[#233554] overflow-hidden group-hover:border-[#64ffda]/50 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#64ffda]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
