import Link from "next/link";

const quickLinks = [
  {
    link: "/aboutus",
    text: "About us",
  },
  {
    link: "/testimoials ",
    text: "Testimonials",
  },
  {
    link: "/ourteam",
    text: "Our Team",
  },
  {
    link: "/blogs",
    text: "Blogs",
  },
  {
    link: "/contactus",
    text: "Contact Us",
  },
];

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
          <div className="flex flex-col gap-4">
            {quickLinks.map((item) => (
              <>
                <Link href={item.link} className="footer-menu">
                  {item.text}
                </Link>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
