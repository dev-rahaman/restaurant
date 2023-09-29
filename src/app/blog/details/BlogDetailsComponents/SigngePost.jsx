import { CiClock2 } from "react-icons/ci";

const SinglePost = ({ post }) => {
  const { title, img, date, border } = post;
  return (
    <div
      className={`flex justify-between gap-4 pb-3 ${
        border ? "border-b border-[#ffffff1a]" : ""
      }`}
    >
      <img
        src={img}
        alt="firstPost"
        className="h-20 w-20 object-cover object-center"
      />
      <div className="text-white">
        <h4 className="text-[16px] font-[600] mb-[5px] hover:text-[#c59d5f] cursor-pointer duration-300">
          {title}
        </h4>
        <div className="flex justify-start items-center gap-3">
          <CiClock2 size={18} className="text-[#c59d5f]" />
          <p className="text-[14px] text-muted text-[15px]">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
