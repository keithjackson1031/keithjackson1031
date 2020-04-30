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
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-[1000px] w-full">
        <div className="flex items-center mb-12">
          <span className="text-[#64ffda] font-mono text-xl mr-4">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#ccd6f6] whitespace-nowrap">
            Where I&apos;ve Worked
          </h2>
          <div className="ml-6 h-[1px] bg-[#233554] flex-1"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-[#233554]">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 md:py-4 text-left font-mono text-sm whitespace-nowrap border-b-2 md:border-b-0 md:border-l-2 transition-colors ${
                  activeTab === index
                    ? 'text-[#64ffda] border-[#64ffda] bg-[#64ffda]/10'
                    : 'text-[#8892b0] border-transparent hover:text-[#64ffda] hover:bg-[#64ffda]/5'
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>
          <div className="flex-1">
            <div>
              <h3 className="text-xl font-semibold text-[#ccd6f6] mb-1">
                {experiences[activeTab].position}
                <span className="text-[#64ffda]"> @ {experiences[activeTab].company}</span>
              </h3>
              <p className="text-sm text-[#8892b0] font-mono mb-6">
                {experiences[activeTab].period}
              </p>
              <ul className="space-y-3">
                {experiences[activeTab].responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start text-[#8892b0]">
                    <span className="text-[#64ffda] mr-4 mt-2">▹</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
