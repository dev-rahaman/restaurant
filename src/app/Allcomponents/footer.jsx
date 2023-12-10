import About from "../blog/BlogDetailsComponents/About";
import Container from "../blog/BlogDetailsComponents/Container";
import FooterTop from "../blog/BlogDetailsComponents/FooterTop";
import LatestPosts from "../blog/BlogDetailsComponents/LatestPosts";
import OurServices from "../blog/BlogDetailsComponents/OurServices";
import QuickLinks from "../blog/BlogDetailsComponents/QuickLinks";

const Footer = () => {
  return (
    <>
      <section className="bg-lightBg ">
        <Container>
          <section className="bg-cover w-full py-20 footer">
            {/* Footer Top section */}
            <FooterTop />
            {/* Footer main section */}
            <section className="mt-16">
              <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[3fr_2fr_2fr_3fr] gap-5 md:gap-10">
                <About />
                <OurServices />
                <QuickLinks />
                <LatestPosts />
              </section>
            </section>
          </section>
        </Container>
      </section>
      {/* copy right section  */}
      <section className="bg-[#0e1317] py-[26px]">
        <p className="text-center text-[16px] leading-[30px] text-muted">
          Copyrights © 2023 <span className="text-[#c59d5f]">Restaurt</span>.
          Designed by <span className="text-[#c59d5f]">Zozothemes</span>
        </p>
      </section>
    </>
  );
};

export default Footer;
