import React from "react";

const ContactForm = () => {
  return (
    <div className="p-10 bg-black text-white">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="mr-28 px-12 py-5">
          <h1 className="text-5xl font-semibold">Get in touch</h1>
          <p className="text-xl pt-5">
            If you have questions or comments, please get a hold of us in
            whichever way is most convenient. Ask away. There is no reasonable
            question that our team can not answer. <br /> <br />
            Craft beer elit seitan exercitation, photo booth et 8-bit kale chips
            proident chillwave doop vlaborum.
          </p>
        </div>
        <div className="col-span-2 px-10 py-5">
          <form>
            <div className="pb-4">
              <label className="text-2xl font-semibold" htmlFor="name">
                Your name
              </label>
              <input
                type="text"
                name="name"
                className="form-input px-5 py-4 w-full rounded-lg border-2 border-white bg-transparent"
              />
            </div>
            <div className="mb-4">
              <label className="text-2xl font-semibold" htmlFor="email">
                Your email
              </label>
              <input
                type="email"
                name="email"
                className="form-input px-5 py-4 w-full rounded-lg border-2 border-white bg-transparent"
              />
            </div>
            <div className="pb-3">
              <label className="text-2xl font-semibold" htmlFor="message">
                Your message (optional)
              </label>
              <textarea
                cols="5"
                rows="3"
                name="message"
                className="form-input px-5 py-4 w-full rounded-lg border-2 border-white  bg-transparent"
              />
            </div>
            <button className="btn bg-amber-500 hover:text-amber-500 px-8 text-white">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
