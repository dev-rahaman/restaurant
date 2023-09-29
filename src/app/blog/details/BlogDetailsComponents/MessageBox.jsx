const MessageBox = () => {
  return (
    <section className="mt-10">
      <section className="px-10 pt-[30px] pb-12 bg-darkBg">
        <section className="">
          <h1 className="text-[32px] text-white font-Themify mb-3">
            Leave a Reply
          </h1>
          <p id="bottom" className="text-muted mb-5">
            Your email address will not be published. Required fields are
            marked*
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10">
            <div className="relative w-full md:w-1/2">
              <input
                className="w-full py-3 bg-transparent text-muted border-0 border-b border-[#2e3033] outline-0 relative input"
                placeholder="Name *"
              />
              <div className="bottom"></div>
            </div>
            <div className="relative w-full md:w-1/2">
              <input
                className="w-full py-3 bg-transparent text-muted border-0 border-b border-[#2e3033] outline-0 relative input"
                placeholder="Email *"
              />
              <div className="bottom"></div>
            </div>
          </div>
          <div className="mt-8 relative w-full">
            <textarea
              rows="7"
              cols="20"
              className="w-full bg-transparent text-muted border-0 border-b border-[#2e3033] outline-0 relative input"
              placeholder="Comment"
            ></textarea>
            <div className="textareaBottom"></div>
          </div>
          <div className="mt-8 w-full">
            <button className="py-3 px-[35px] bg-btnBg text-[15px] tracking-[0.5px] font-semibold uppercase hover:bg-lightBg duration-300">
              Post
            </button>
          </div>
        </section>
      </section>
    </section>
  );
};

export default MessageBox;
