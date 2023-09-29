import React from "react";
import Banner from "../BlogDetailsComponents/Banner";
import Introduction from "../BlogDetailsComponents/Introduction";
import RightPart from "../BlogDetailsComponents/RightPart";
import Container from "../BlogDetailsComponents/Container";

const BlogsDetails = () => {
  return (
    <>
      <Banner />
      <section className="py-[100px] w-full">
        <Container>
          <section className="w-full h-full flex flex-col lg:flex-row justify-between items-start gap-12">
            <section className="w-full lg:w-[67%]">
              <Introduction />
            </section>
            <section className="w-full lg:w-[33%]">
              <RightPart />
            </section>
          </section>
        </Container>
      </section>
    </>
  );
};

export default BlogsDetails;
