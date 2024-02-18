import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ArticleFormatProps {
  title: string;
  link: string;
  description: String;
  year: String;
  author: String;
}
const ArticleFormat = (props: ArticleFormatProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Simulate loading data
    const fetchData = async () => {
      // Simulate loading for 2 seconds
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsLoading(false);
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once

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
    toast.success("Saved", {
      position: "top-right", // Set the position of the toast
      autoClose: 1000, // Set the duration for auto-closing the toast (in milliseconds)
      hideProgressBar: false, // Show/hide the progress bar
      closeOnClick: true, // Close the toast on click
      pauseOnHover: true, // Pause auto-close on hover
      draggable: true, // Allow dragging to close the toast
    });
  };
  const copyToClipboard = () => {
    toast.success("Copy To Clipboard", {
      position: "top-right", // Set the position of the toast
      autoClose: 1000, // Set the duration for auto-closing the toast (in milliseconds)
      hideProgressBar: false, // Show/hide the progress bar
      closeOnClick: true, // Close the toast on click
      pauseOnHover: true, // Pause auto-close on hover
      draggable: true, // Allow dragging to close the toast
    });
  };
  return (
    <div className=" bg-[#18181B] my-7 p-7 rounded-2xl text-[#C8C8C8]">
      {isLoading ? (
        // Show loader while data is loading
        <div className="text-white">Loading...</div>
      ) : (
        // Render content once data is loaded
        <>
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
              <ToastContainer />
            </div>
          </div>
          {isModalOpen && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 ">
              <div className="bg-white p-5 rounded-md w-[450px] h-36  text-black">
                <p className="my-3">
                  <h1 className="font-bold">Article Link:</h1>
                  <input
                    value={props.link}
                    className="w-full bg-[#F1F4F6] py-2 px-3 rounded-md"
                  ></input>
                </p>
                <button onClick={copyToClipboard} className="mr-3">
                  Copy
                </button>
                <button onClick={closeModal}>Close</button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default ArticleFormat;
