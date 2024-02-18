import { useState, useEffect } from "react";
import ArticleNavbar from "./ArticleNavbar";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import RealtedArticle from "../Atom/RelatedArticle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface RelatedProps {
  link: string;
}

const Summarize = () => {
  const relatedvalue: RelatedProps[] = useRecoilValue(RealtedArticle);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulating a 1-second delay
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
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

  return (
    <div className="bg-black  ">
      {isLoading ? (
        // Show loader while data is loading
        <div className="text-white">Loading...</div>
      ) : (
        // Render content once data is loaded
        <>
          <ArticleNavbar />
          <div className="p-10  flex flex-row">
            <div className="bg-white mx-5 w-1/3 p-5 h-[500px] rounded-lg">
              <div className="font-semibold">
                Jobs Market Close To A Major Recession Warning
              </div>
              <h1>Simon Moore</h1>
              <h1>2023</h1>
              <span
                className="hover:bg-[#F1F4F6] px-2 py-2 rounded-md"
                onClick={save}
              >
                Save
              </span>
              |
              <span className="hover:bg-[#F1F4F6] px-2 py-2 rounded-md">
                Share
              </span>
              <ToastContainer />
              <hr className="mb-5" />
              <h1
                className="font-semibold
          "
              >
                Related Article
              </h1>
              <div className="flex flex-col">
                {relatedvalue.map((e) => {
                  return (
                    <input
                      type="text"
                      value={e.link}
                      className="bg-[#F1F4F6] my-3"
                    />
                  );
                })}
              </div>
            </div>
            <div className="bg-white   w-2/3 rounded-lg p-5 h-[700px] overflow-y-auto    ">
              <h1 className="text-[#889BAA] font-bold my-2">Summary</h1>
              The current economic landscape is showing signs of significant
              challenges across various sectors. Let's delve into a
              comprehensive summary of the key observations and concerns
              highlighted in the provided text: 1. Employment Trends: Recent
              Weakness: October marked a noticeable decline in employment, with
              negative revisions in the Establishment Survey and a significant
              drop in the Household Survey, reflecting a net loss of jobs.
              Unemployment Rate: The U3 Unemployment Rate increased to 3.9%, and
              a historical pattern suggests that a rise of 0.5 percentage points
              in U3 typically precedes a recession. 2. Consumer Challenges:
              Post-"Free Money" Adjustments: Consumers, a substantial driver of
              GDP, are adjusting after a spending spree fueled by government
              stimulus in 2021 and 2022. Record Credit Card Balances: Credit
              card balances have surged to record levels, with rising
              delinquencies and interest rates in the mid-20% range. Housing
              Affordability Concerns: Housing affordability is at a 35-year low
              due to high prices and soaring mortgage rates, reaching 8%. 3.
              Inflation and Economic Indicators: Inflationary Pressures Easing:
              While inflation has been a concern, there are signs of it
              subsiding, as indicated by falling inflation rates, including
              negative year-over-year changes in the Manheim used vehicle price
              index. Global Supply Chain Challenges: The NY Fed's Global Supply
              Chain Pressure Index reflects significant alleviation of supply
              chain pressures, reaching a record low. Deflation Risks: China's
              economic situation, marked by falling producer prices and export
              prices, suggests the exportation of deflation, and the Money
              Supply (M2) growth has turned negative for the first time in
              history, raising concerns of potential deflation. 4. Business and
              Banking Sector Challenges: Earnings Expectations Decline: Earnings
              expectations are falling across various sectors, with health care
              costs leading the decline, and challenges in the business sector
              may impact the overall economy. Banking Sector Contraction: The
              banking sector is contracting, with reduced lending, rising
              delinquencies, and tightened lending standards, posing challenges
              to economic vitality. Housing Industry Decline: The housing
              industry is sliding as mortgage rates approach 8%, impacting
              affordability and resulting in slowing sales. 5. Global Economic
              Considerations: China in Recession: China is already in a
              recession, with falling producer prices and export prices,
              contributing to the global exportation of deflation. Global
              Indicators: Global indicators such as the Baltic Dry Index and
              world food prices exhibit significant declines, potentially
              signaling broader economic challenges. 6. Final Thoughts:
              Recession Concerns: The overall assessment suggests a looming
              recession, with weak employment data, declining consumer
              resilience post-stimulus, and challenges across various sectors
              contributing to economic headwinds. Deflationary Risks: The
              negative growth in the Money Supply (M2) raises concerns of
              deflation, and the Fed's internal views indicate a rapid decline
              in inflation. In summary, the economic landscape is marked by
              employment weakness, challenges in consumer behavior and
              affordability, easing inflationary pressures, contraction in the
              business and banking sectors, and global economic considerations
              that collectively point toward a complex and potentially
              challenging economic environment, including the risk of deflation.
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Summarize;
