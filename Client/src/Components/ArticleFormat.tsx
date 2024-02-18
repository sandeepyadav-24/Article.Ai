import { Link } from "react-router-dom";
import { useState } from "react";

interface ArticleFormatProps {
  title: string;
  link: string;
  description: String;
  year: String;
  author: String;
}
const ArticleFormat = (props: ArticleFormatProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const share = () => {
    // Your share logic goes here
    openModal();
  };
  const save = () => {
    alert("Save");
  };
  return (
    <div className=" bg-[#18181B] my-7 p-7 rounded-2xl text-[#C8C8C8]">
      <Link to={props.link}>
        <div>{props.title}</div>
        <div className=" bg-[#F0F0F2]  rounded-xl my-7 p-3 text-[#354A43] ">
          {props.description}
        </div>
      </Link>
      <hr className="my-3" />
      <div className="flex flex-row justify-between my-2">
        <div>
          <span>{props.author}</span> | <span>{props.year}</span>
        </div>
        <div className="flex flex-row">
          <div
            className=" hover:bg-[#F1F4F6] hover:text-black px-3 rounded-lg"
            onClick={save}
          >
            Save
          </div>
          <div className=" hover:bg-[#F1F4F6] hover:text-black px-3 rounded-lg">
            <Link to={"/summarize"}>Summarize</Link>
          </div>
          <div
            className=" hover:bg-[#F1F4F6] hover:text-black px-3 rounded-lg"
            onClick={share}
          >
            Share
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-white p-5 rounded-md w-[450px] h-36  text-black">
            <p className="my-3">
              Article Link:{" "}
              <input
                value={props.link}
                className="w-full bg-[#F1F4F6] py-2 px-3 rounded-md"
              ></input>
            </p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default ArticleFormat;
