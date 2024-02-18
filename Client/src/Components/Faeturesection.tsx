import Featurecard from "./Featurecard";
const Featuresection = () => {
  return (
    <div className="feature_Sec mx-40">
      <h1 className="text-[#7326EF] font-bold">FEATURE</h1>
      <h1 className="text-white text-xl"></h1>
      <div className="flex flex-wrap py-10">
        <div className="text-white text-5xl font-bold py-10 ">
          Revolutionize content creation with our AI-powered platform—elevating
          your experience to unprecedented heights.
        </div>

        <Featurecard
          title="Personalized Feedback"
          value="Receive personalized feedback based on your reading history. Our platform tailors recommendations and insights to your preferences, creating a unique and customized experience."
        />
        <Featurecard
          title="Intelligent Article Recommendations"
          value="Generate curated article recommendations powered by LLM and NLP. Our platform analyzes user input to provide the best-matched articles for an enhanced reading experience."
        />
        <Featurecard
          title="Article Summarization"
          value="Summarize your favorite articles effortlessly. Users can set a word limit to get concise summaries, making it easier to grasp key insights from lengthy content."
        />
        <Featurecard
          title="Bookmarking for Future Reference"
          value="Save and organize articles for future use. Bookmark your preferred articles, making it convenient to revisit and reference them whenever needed."
        />
        <Featurecard
          value="Keep track of your recent searches for quick access to your most relevant content. Easily navigate through your search history to find previously explored topics."
          title="Recent Searches"
        />
        <Featurecard
          value="Expand your knowledge base and share insights with a built-in blog feature. Increase your platform's visibility by producing new content and reaching a wider audience."
          title="Blog Integration"
        />
      </div>
    </div>
  );
};
export default Featuresection;
