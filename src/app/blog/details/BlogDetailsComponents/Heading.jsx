import { BsFolder2 } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";

const Heading = () => {
  return (
    <section className="text-white">
      <h1 className="text-[50px] leading-[59px] font-bold font-Themify mb-4">
        Things to Know When Choosing Foods
      </h1>
      <div className="flex justify-start items-center gap-5 border-b border-[#a0abb446] pb-10">
        <div className="flex justify-start items-center gap-3">
          <img
            src={"/man.png"}
            alt="man"
            className="w-5 h-5 object-cover object-center rounded-full"
          />
          <a href="#" className="menu-link text-muted text-[15px]">
            Restont
          </a>
        </div>
        <div className="flex justify-start items-center gap-3">
          <CiClock2 size={20} className="text-[#c59d5f]" />
          <a href="#" className="menu-link text-muted text-[15px]">
            April 19, 2022
          </a>
        </div>
        <div className="flex justify-start items-center gap-3">
          <BsFolder2 size={20} className="text-[#c59d5f]" />
          <a href="#" className="menu-link text-muted text-[15px]">
            Daily Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Heading;
