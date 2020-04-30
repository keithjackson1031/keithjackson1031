const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-[600px] w-full text-center">
        <span className="text-[#64ffda] font-mono text-lg">04. What&apos;s Next?</span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mt-4 mb-6">
          Get In Touch
        </h2>
        <p className="text-[#8892b0] text-lg mb-12">
          I&apos;m currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I&apos;ll try my best
          to get back to you!
        </p>
        <a
          href="mailto:jakecass769@gmail.com"
          className="text-[#64ffda] border border-[#64ffda] px-8 py-4 rounded font-mono text-sm hover:bg-[#64ffda]/10 transition-all inline-block"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
