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
      className="min-h-screen flex items-start px-8 lg:pl-[340px] pt-20 pb-20"
    >
      <div className="max-w-[700px] w-full">
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-[#ccd6f6] hover:text-[#64ffda] transition-colors">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8892b0] hover:text-[#64ffda] transition-colors ml-4"
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
              <p className="text-[#8892b0] mb-4 leading-relaxed">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-3 text-sm font-mono text-[#8892b0]">
                {project.technologies.map((tech, techIndex) => (
                  <li key={techIndex}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
