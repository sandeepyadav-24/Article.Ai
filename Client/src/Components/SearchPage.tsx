import RecentBox from "./RecentBox";
import Navbar from "./Navbar";
import InputBox from "./InputBox";
const SearchPage = () => {
  return (
    <div className=" bg-black h-screen">
      <Navbar />
      <div className="py-40 text-center">
        <h1 className="text-7xl font-bold text-[#5D0AE3] my-1 ">Article.Ai</h1>
        <h1 className="text-[#A1A1A1] mb-5 ">
          The AI search companion, optimized for Articles.
        </h1>
        <div className="w-[750px] mx-auto">
          <InputBox />
        </div>

        <h1 className="mt-8 font-bold mb-4 text-[#A1A1A1]">Recent Searches:</h1>
        <div className="w-1/3 flex items-center overflow-x-auto m-auto">
          <RecentBox value="Budget 2024" />
          <RecentBox value="Virat Kohli on Performance in IPL" />
          <RecentBox value="Arijit Singh Song" />
          <RecentBox value="Budget 2024" />
          <RecentBox value="Virat Kohli on IPL" />
          <RecentBox value="Arijit Singh Song" />
        </div>
      </div>
    </div>
  );
};
export default SearchPage;
