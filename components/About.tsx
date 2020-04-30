const About = () => {
  const technologies = [
    'JavaScript (ES6+)',
    'React Native',
    'Node.js, Express.js',
    'PHP, Laravel',
    'DevOps, AWS, Firebase',
    'Web3, Ethers',
    'React, Next.js',
    'Vue, Vuex, Nuxt.js',
    'GraphQL, Apollo',
    'MySQL, MongoDB',
    'Git, Docker',
    'Smart Contract',
    'Machine Learning',
    'Deep Learning',
    'Python',
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-[1000px] w-full">
        <div className="flex items-center mb-8">
          <span className="text-[#64ffda] font-mono text-xl mr-4">01.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#ccd6f6] whitespace-nowrap">
            About Me
          </h2>
          <div className="ml-6 h-[1px] bg-[#233554] flex-1"></div>
        </div>
        <div className="grid md:grid-cols-[3fr_2fr] gap-12">
          <div className="space-y-4 text-[#8892b0]">
            <p>
              Hello! My name is Romeo and I enjoy creating things that live on
              the internet. My interest in web development started back in 2019
              when I decided to try editing custom Tumblr themes — turns out
              hacking together a custom reblog button taught me a lot about HTML
              & CSS!
            </p>
            <p>
              Fast-forward to today, and I&apos;ve had the privilege of working at
              an AI agency, a start-up, a huge corporation. My main focus these
              days is building accessible, inclusive AI products for the new
              opportunity.
            </p>
            <p>Here are a few technologies I&apos;ve been working with recently:</p>
            <ul className="grid grid-cols-2 gap-2 mt-4">
              {technologies.map((tech, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-[#64ffda] mr-2">▹</span>
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="relative z-10 w-full max-w-[300px] mx-auto">
              <div className="aspect-square rounded-lg border-2 border-[#64ffda] p-2 hover:translate-x-[-10px] hover:translate-y-[-10px] transition-transform">
                <div className="w-full h-full rounded-lg bg-[#112240] flex items-center justify-center">
                  <span className="text-[#64ffda] text-4xl font-bold">RH</span>
                </div>
              </div>
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-lg border-2 border-[#64ffda] -z-10 opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
