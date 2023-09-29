import SinglePost from "./SigngePost";

const posts = [
  {
    title: "Things To Know When Choosing Foods",
    img: "https://elementor.zozothemes.com/restaurt/wp-content/uploads/sites/58/2022/04/blog-img-80x80.jpg",
    date: "April 19, 2022",
    border: true,
  },
  {
    title: "Colour Spicy To Spring In Your Table",
    img: "https://elementor.zozothemes.com/restaurt/wp-content/uploads/sites/58/2019/04/r-blog-10-1-1-80x80.jpg",
    date: "April 19, 2022",
    border: false,
  },
  {
    title: "Things To Know When Choosing Foods",
    img: "https://elementor.zozothemes.com/restaurt/wp-content/uploads/sites/58/2022/04/blog-img-80x80.jpg",
    date: "April 19, 2022",
    border: true,
  },
];

const LatestPosts = () => {
  return (
    <section>
      <div className="relative">
        <h1 className="font-Themify text-[24px] font-semibold text-white">
          Latest Posts
        </h1>
        <div className="bottom before:w-[70px] before:border-[1.5px] before:top-3"></div>
      </div>
      <section className="mt-10 flex flex-col justify-start items-start gap-3">
        {posts?.map((post, index) => (
          <SinglePost key={index} post={post} />
        ))}
      </section>
    </section>
  );
};

export default LatestPosts;
