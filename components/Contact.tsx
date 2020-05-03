const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center px-8 lg:pl-[340px] py-20"
    >
      <div className="max-w-[700px] w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ccd6f6] mb-8">
          Get In Touch
        </h2>
        <p className="text-[#8892b0] text-base mb-8 leading-relaxed">
          I&apos;m currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I&apos;ll try my best
          to get back to you!
        </p>
        <a
          href="mailto:jakecass769@gmail.com"
          className="text-[#64ffda] border border-[#64ffda] px-6 py-3 rounded font-mono text-sm hover:bg-[#64ffda]/10 transition-all inline-block"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
