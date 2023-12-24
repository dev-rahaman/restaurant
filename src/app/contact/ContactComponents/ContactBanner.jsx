import Banner from "@/app/about/AboutComponents/AboutBannerDetails";

const ContactBanner = () => {
  return (
    <>
      <Banner
        title={"MORE FLAVOR FOR LESS"}
        heading={"Contact"}
        para={
          "When the going gets tough, the tough get grilling. Bringing heat to your meat. No one can compete with our meat"
        }
        leftCornerImage={"/contact-left-covert.png"}
        rightCornerImage={"/contact-right-cover.png"}
      />
    </>
  );
};

export default ContactBanner;
