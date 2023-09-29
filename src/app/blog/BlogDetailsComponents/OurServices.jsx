import Link from "next/link";

const ourservices = [
  {
    link: "/fastdelivery",
    text: "Fast Delivery",
  },
  {
    link: "/vegancuisine ",
    text: "Vegan Cuisine",
  },
  {
    link: "/freshproducts",
    text: "Fresh Products",
  },
  {
    link: "/skilledchefs",
    text: "Skilled Chefs",
  },
  {
    link: "/greatcoffee",
    text: "Great Coffee",
  },
];

const OurServices = () => {
  return (
    <section>
      <div className="relative">
        <h1 className="font-Themify text-[24px] font-semibold text-white">
          Our Services
        </h1>
        <div className="bottom before:w-[70px] before:border-[1.5px] before:top-3"></div>
      </div>
      <div className="mt-10">
        <div className="flex flex-col gap-4">
          {ourservices.map((item) => (
            <>
              <Link href={item.link} className="footer-menu">
                {item.text}
              </Link>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};
export default OurServices;
