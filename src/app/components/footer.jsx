import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram, FaTripadvisor } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="md:max-w-6xl py-14 md:py-24 px-5  md:px-0 w-full md:mx-auto flex md:flex-row flex-col text-white justify-between items-center">
      <div className="md:border-r-2 md:border-b-0 border-b-2 border-[#CA9C5E] md:px-20 w-full  md:h-[200px] py-10 md:py-0">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={"150"}
          height={"150"}
          className="md:h-[70] md:w-[150px] h-[60px] w-[130px]"
        />
      </div>
      <div className="footer-link uppercase white md:px-24 flex flex-col text-center gap-5 md:py-0 py-10 ">
        <a href="">our menus</a>
        <a href="">reservation</a>
        <a href="">about</a>
        <a href="">contact us</a>
      </div>
      <div className="md:border-l-2 md:border-t-0 border-t-2 w-full text-center md:text-left border-[#CA9C5E] md:px-20 md:h-[200px]">
        <div className="flex gap-5 mb-10 justify-center md:justify-normal pt-10 md:pt-0">
          <a href="">
            <FaFacebook className="text-[#CA9C5E]" size={24}></FaFacebook>
          </a>
          <a href="">
            <FaInstagram className="text-[#CA9C5E]" size={24}></FaInstagram>
          </a>
          <a href="">
            <FaTripadvisor className="text-[#CA9C5E]" size={24}></FaTripadvisor>
          </a>
        </div>
        <div className="text-xs">
          <p className="mb-3">&copy; Copyright ThemeGoods</p>
          <p className="mb-2">All Right Reserve</p>
          <p className="mb-2">Privacy policy</p>
          <p>Terms of use</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
