import { Articles as ArticlesAtom } from "../Atom/Articles";
import { useRecoilValue } from "recoil";
import ArticleNavbar from "./ArticleNavbar";
import ArticleFormat from "./ArticleFormat";

const Articles = () => {
  const articlesValue = useRecoilValue(ArticlesAtom);
  return (
    <div className="bg-black  flex flex-col">
      <div
        className="my-5
      "
      >
        <ArticleNavbar />
      </div>

      <div className="w-[900px]  mx-auto my-20">
        <div className="text-white ">
          {articlesValue.map((e) => {
            return (
              <ArticleFormat
                title={e.title}
                link={e.link}
                description={e.description}
                year={e.year}
                author={e.author}
              />
            );
          })}
        </div>
        <div className="text-center my-5">
          <span
            className="bg-white px-5 rounded-lg py-2 my-10 "
            onClick={() => {
              alert("Loading");
            }}
          >
            Load more
          </span>
        </div>
      </div>
      <div> First Sec</div>
    </div>
  );
};
export default Articles;
