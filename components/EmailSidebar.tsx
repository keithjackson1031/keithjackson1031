'use client';

const EmailSidebar = () => {
  return (
    <div className="fixed right-0 bottom-0 z-50 hidden md:block">
      <div className="flex flex-col items-center space-y-6 px-6">
        <a
          href="mailto:jakecass769@gmail.com"
          className="text-[#8892b0] hover:text-[#64ffda] transition-all writing-vertical-rl text-sm font-mono hover:-translate-y-1"
          style={{ writingMode: 'vertical-rl' }}
        >
          jakecass769@gmail.com
        </a>
        <div className="w-[1px] h-24 bg-[#8892b0]"></div>
      </div>
    </div>
  );
};

export default EmailSidebar;
