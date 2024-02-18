import { useState } from "react";
import { useNavigate } from "react-router-dom";
const InputBox = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const buttonHandler = () => {
    ////////////////////////////////////////////////////////////
    // Write python flask function and to send request and get response in json
    // aafter save all these data in Atom Articles so that it i sused b ArticlesPages
    alert(search);
    navigate("/articles");
  };
  return (
    <div>
      <form className="border-[#718FF2] border-2 w-[740px]  rounded-xl shadow-cyan-700 shadow-lg">
        <input
          type="text"
          placeholder="Ask anything"
          className="  rounded-3xl py-2 px-5  my-3 mx-3 bg-black text-white w-[550px]"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="px-5 py-2 bg-[#7B0EFF] text-white text-xl font-semibold rounded-lg"
          onClick={buttonHandler}
        >
          Generate
        </button>
      </form>
    </div>
  );
};
export default InputBox;
