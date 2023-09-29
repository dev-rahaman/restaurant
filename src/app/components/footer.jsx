import About from "../blog/details/BlogDetailsComponents/About";
import Container from "../blog/details/BlogDetailsComponents/Container";
import LatestPosts from "../blog/details/BlogDetailsComponents/LatestPosts";
import OurServices from "../blog/details/BlogDetailsComponents/OurServices";
import QuickLinks from "../blog/details/BlogDetailsComponents/QuickLinks";

const Footer = () => {
  return (
    <>
      <section className="bg-lightBg ">
        <Container>
          <section className="bg-cover w-full py-20 footer">
            {/* Footer Top Section */}
            <section className="bg-darkBg w-full footer-top lg:w-[836px] mx-auto">
              <section className="py-[30px] px-12">
                <section className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-3">
                  <div className="md:border-r border-[#ffffff1a] w-full md:w-1/3">
                    <h4 className="text-[20px] font-[700] text-white text-center mb-1 md:mb-3">
                      Call Us On :
                    </h4>
                    <h5 className="text-[18px] font-[700] text-[#c59d5f] text-center">
                      +(528) 456-7592
                    </h5>
                  </div>
                  <div className="md:border-r border-[#ffffff1a] w-full md:w-1/3">
                    <h4 className="text-[20px] font-[700] text-white text-center mb-1 md:mb-3">
                      Open Hours :
                    </h4>
                    <h5 className="text-[18px] font-[700] text-[#c59d5f] text-center">
                      7.00 AM - 11.15 PM
                    </h5>
                  </div>
                  <div className="w-full md:w-1/3">
                    <h4 className="text-[20px] font-[700] text-white text-center mb-1 md:mb-3">
                      Mail Us :
                    </h4>
                    <h5 className="text-[18px] font-[700] text-[#c59d5f] text-center">
                      info@example.com
                    </h5>
                  </div>
                </section>
              </section>
            </section>
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
