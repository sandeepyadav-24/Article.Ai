import { Link, useNavigate } from "react-router-dom";
import InputBox from "./InputBox";
const ArticleNavbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };
  return (
    <div className="flex flex-row mx-7 ">
      <div className=" mt-2 flex flex-row ml-2 mr-20">
        <img src="ws_ss4.png" alt="Logo" className="h-15 w-14" />
        <span className="text-white mx-5 mt-2 mb-5 text-xl">
          <Link to={"/"}>Article.Ai</Link>
        </span>
      </div>

      <div className="w-[900px] px-auto">
        <InputBox />
      </div>
      <span className="text-white mx-3 text-xl my-3">
        <Link to={"/bookmark"}>Bookmark</Link>
      </span>
      <div className="text-white mx-3 text-xl my-3" onClick={logout}>
        Log Out
      </div>
    </div>
  );
};
export default ArticleNavbar;
