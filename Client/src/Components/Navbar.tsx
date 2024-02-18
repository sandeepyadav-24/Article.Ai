import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };
  if (token) {
    return (
      <div className="bg-black text-white font-semibold text-2xl px-20 py-10 flex justify-between">
        <div className="flex flex-row">
          <img src="ws_ss4.png" alt="" className="h-15 w-14" />
          <span className="mx-3 my-2">
            <Link to="/">Article.Ai</Link>
          </span>
        </div>
        <div className="flex flex-row">
          <span className="mx-3 my-2">
            <Link to="/search">Search</Link>
          </span>
          <span className="mx-3 my-2">
            <Link to="/bookmark">BookMark</Link>
          </span>
          <span
            className="mx-3  py-1 my-1 px-3 rounded-lg bg-[#8F66FE]"
            onClick={logout}
          >
            LogOut
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-black text-white font-semibold text-2xl px-20 py-10 flex justify-between">
        <div className="flex flex-row">
          <img src="ws_ss4.png" alt="" className="h-15 w-14" />
          <span className="mx-3 my-2">
            <Link to="/">Article.Ai</Link>
          </span>
        </div>
        <div className="flex flex-row">
          <span className="mx-3 my-2">Feature</span>

          <span className="mx-3 my-2">
            <Link to="/login">Log in</Link>
          </span>
          <span className="mx-3  py-1 my-1 px-3 rounded-lg bg-[#8F66FE]">
            <Link to="/signup">Sign up</Link>
          </span>
        </div>
      </div>
    );
  }
};
export default Navbar;
