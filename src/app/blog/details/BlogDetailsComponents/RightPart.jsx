import Categories from "./Categories";
import LatestPosts from "./LatestPosts";
import SearchBox from "./SearchBox";
import Tags from "./Tags";

const RightPart = () => {
  return (
    <section className="w-full">
      <SearchBox />
      <LatestPosts />
      <Categories />
      <Tags />
    </section>
  );
};

export default RightPart;
