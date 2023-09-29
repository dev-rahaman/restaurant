import Container from "./Container";

const Banner = () => {
  return (
    <section
      className="bg-cover bg-center w-full"
      style={{ backgroundImage: `url(/banner.jpg)` }}
    >
      <section className="h-[150px] md:h-[284px] md:pt-[174px] md:pb-20 flex justify-start items-center w-full bg-[#000000ad]">
        <Container className="text-white flex justify-start items-center gap-[5px]">
          <a href="#" className="menu-link">
            Home
          </a>
          <a href="#" className="menu-link">
            Daily Menu
          </a>
          <p className="font-base whitespace-pre-wrap">
            Things to Know When Choosing Foods
          </p>
        </Container>
      </section>
    </section>
  );
};

export default Banner;
