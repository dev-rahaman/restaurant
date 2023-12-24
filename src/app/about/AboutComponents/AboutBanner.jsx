import AboutBannerDetails from "./AboutBannerDetails";

const AboutBanner = () => {
  return (
    <>
      <AboutBannerDetails
        title={"MORE FLAVOR FOR LESS"}
        heading={"About"}
        para={
          "When the going gets tough, the tough get grilling. Bringing heat to your meat. No one can compete with our meat"
        }
        leftCornerImage={"/contact-left-covert.png"}
        rightCornerImage={"/contact-right-cover.png"}
      />
    </>
  );
};

export default AboutBanner;
