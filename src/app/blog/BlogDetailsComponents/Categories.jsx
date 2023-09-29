import SingleCategory from "./SingleCategory";

const categories = [
  {
    title: "Daily Menu",
    border: true,
  },
  {
    title: "Food & Drinks",
    border: true,
  },
  {
    title: "Healthy Food",
    border: true,
  },
  {
    title: "Recipes",
    border: true,
  },
  {
    title: "Starters",
    border: false,
  },
];

const Categories = () => {
  return (
    <section className="mt-10 w-full p-[30px] bg-lightBg">
      <div className="relative">
        <h1 className="font-Themify text-[24px] font-semibold text-white">
          Categories
        </h1>
        <div className="bottom before:w-[70px] before:border-[1.5px] before:top-3"></div>
      </div>
      <section className="mt-10 flex flex-col justify-start items-start gap-3">
        {categories?.map((category, index) => (
          <SingleCategory key={index} category={category} />
        ))}
      </section>
    </section>
  );
};

export default Categories;
