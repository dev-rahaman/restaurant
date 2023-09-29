const QuickLinks = () => {
  return (
    <section>
      <div className="relative">
        <h1 className="font-Themify text-[24px] font-semibold text-white">
          Quick Links
        </h1>
        <div className="bottom before:w-[70px] before:border-[1.5px] before:top-3"></div>
      </div>
      <div className="mt-10">
        <div className="flex flex-col gap-4">
          <a href="#" className="footer-menu">
            About Us
          </a>
          <a href="#" className="footer-menu">
            Testimonials
          </a>
          <a href="#" className="footer-menu">
            Our Team
          </a>
          <a href="#" className="footer-menu">
            Blog
          </a>
          <a href="#" className="footer-menu">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
