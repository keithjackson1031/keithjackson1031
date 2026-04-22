'use client';

const Experience = () => {
  const experiences = [
    {
      company: 'PrimeiTek',
      position: 'Senior Full Stack Engineer',
      period: '02/2020 — Present',
      responsibilities: [
        'Developed a drag-and-drop email marketing platform for customers using React.js and Material UI, enabling users to design campaigns with a visual interface.',
        'Diagnosed and fixed platform bugs across marketing services, ensuring improved stability, performance, and user experience.',
        'Collaborated closely with Product Managers and team members to enhance product features and deliver seamless service updates.',
        'Contributed to the design and development of scalable full stack solutions that supported business growth and improved operational efficiency.'
      ],
      technologies: ['React.js', 'Material UI', 'Vue.js', 'JavaScript', 'Node.js', 'Express.js', 'MySQL', 'MongoDB', 'Git', 'Docker'],
      url: 'https://primeitek.com/'
    },
    {
      company: 'SpaceID',
      position: 'Full Stack Engineer',
      period: '04/2016 — 02/2020',
      responsibilities: [
        'Maintained and resolved issues on the Galaxy website utilizing Web3.js and ethers.js, ensuring blockchain interactions remained reliable.',
        'Designed and developed the Space ID domain registration website from scratch, allowing users to register domains on the BNB Smart Chain network.',
        'Integrated front-end with blockchain systems using Web3, including smart contract development, testing on testnets, and deployment to mainnet.',
        'Built and optimized the main company website using Next.js, improving performance, SEO, and responsiveness across devices.',
        'Contributed to web interfaces for user wallet management, improving functionality and user experience.',
        'Fixed issues and maintained the staking website, ensuring secure and uninterrupted staking operations for users.'
      ],
      technologies: ['Web3.js', 'ethers.js', 'Next.js', 'JavaScript', 'Node.js', 'Git', 'Docker', 'BNB Smart Chain'],
      url: '#'
    },
  ];

  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 px-8 lg:pl-[100px] pt-1 pb-20"
    >
      <div className="max-w-[700px] w-full">
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                <header className="z-10 mb-2 font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  <span className="text-sm text-[#8892b0] font-mono uppercase">
                    {exp.period}
                  </span>
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-xl" href={`${exp.url}`} target="_blank" rel="noreferrer noopener" aria-label="Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)">
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>{exp.position} · <span className="inline-block">{exp.company}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                          <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd">
                          </path>
                        </svg>
                      </span>
                      </span>
                      </a>
                    </div>
                  </h3>
                  <ul className="mt-3 mb-4 space-y-2 list-none">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="text-[#8892b0] text-[17px] leading-[1.7]">
                        {resp}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
