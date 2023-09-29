import { FiArrowUpRight } from "react-icons/fi";

const SingleCategory = ({ category }) => {
  const { title, border } = category;
  return (
    <div
      className={`w-full flex justify-between gap-4 pb-2 ${
        border ? "border-b border-dashed border-[#ffffff1a]" : ""
      }`}
    >
      <div className="text-white flex justify-start items-center gap-3">
        <FiArrowUpRight size={20} className="text-[#c59d5f]" />
        <h4 className="text-[16px] font-[600] mb-[5px] hover:text-[#c59d5f] cursor-pointer duration-300">
          {title}
        </h4>
      </div>
    </div>
  );
};

export default SingleCategory;
