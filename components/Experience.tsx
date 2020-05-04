'use client';

import { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'Hyly.AI',
      position: 'Senior Full Stack Engineer',
      period: '07/2024 - 11/2025',
      responsibilities: [
        'Developed drag and drop customer Email marketing playground platform using React.js and Material UI.',
        'Fixed issues on the marketing platform and services.',
        'Cooperated with PM and other teammates to enhance service and products.',
      ],
      technologies: ['React.js', 'Material UI', 'JavaScript'],
    },
    {
      company: 'Space ID',
      position: 'Senior Web3 Full Stack Blockchain Engineer',
      period: '10/2022 - 07/2024',
      responsibilities: [
        'Fixed and maintained galaxy website using web3 and ethers.js,',
        'Developed from scratch space id domain website so that user can register domain on bnb network,',
        'Integrate with blockchain system using web3.',
        'Developed smart contract code and test it in testnet and publish it to mainnet.',
      ],
      technologies: ['Web3', 'Ethers.js', 'Smart Contract', 'BNB Network'],
    },
    {
      company: 'Hi',
      position: 'Web3 & Frontend Engineer',
      period: 'Nov 2021 - Oct 2022',
      responsibilities: [
        'Developed main website using next.js and optimized website,',
        "Took part in web user website development for user's wallet,",
        'Fix issues and maintained staking website.',
      ],
      technologies: ['Next.js', 'Web3', 'React'],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center px-8 lg:pl-[340px] py-20"
    >
      <div className="max-w-[1000px] w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ccd6f6] mb-12">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l border-[#233554]">
              <div className="absolute left-[-6px] top-0 w-3 h-3 rounded-full bg-[#64ffda]"></div>
              <div className="mb-2">
                <span className="text-xs text-[#8892b0] font-mono">
                  {exp.period}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[#ccd6f6] mb-1">
                {exp.position}
                <span className="text-[#64ffda]"> · {exp.company}</span>
              </h3>
              <ul className="mt-4 space-y-2">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className="flex items-start text-[#8892b0] text-sm">
                    <span className="text-[#64ffda] mr-3 mt-1">▹</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs font-mono text-[#8892b0] border border-[#233554] rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
