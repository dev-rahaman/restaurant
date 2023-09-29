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
          <a href="#" className="footer-menu">
            Fast Delivery
          </a>
          <a href="#" className="footer-menu">
            Vegan Cuisine
          </a>
          <a href="#" className="footer-menu">
            Fresh Products
          </a>
          <a href="#" className="footer-menu">
            Skilled Chefs
          </a>
          <a href="#" className="footer-menu">
            Great Coffee
          </a>
        </div>
      </div>
    </section>
  );
};
export default OurServices;
