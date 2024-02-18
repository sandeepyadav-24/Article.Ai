import { atom } from "recoil";
const RelatedArticles = atom({
  key: "RelatedArticles",
  default: [
    {
      link: "https://www.forbes.com/sites/greatspeculations/2023/11/11/recession-the-stars-continue-to-align/",
    },
    {
      link: "https://www.forbes.com/sites/simonmoore/2023/11/04/jobs-market-close-to-a-major-recession-warning/",
    },
    {
      link: "https://markets.businessinsider.com/news/stocks/recession-better-than-soft-landing-fed-hikes-inflation-jobs-stagflation-2023-10",
    },
    {
      link: "https://readwrite.com/recession-ahead-follow-these-money-saving-tips-for-your-workplace/",
    },
    {
      link: "https://www.businessinsider.com/recession-2024-inflation-economy-interest-rates-stock-market-layoffs-fed-2023-11",
    },
  ],
});

export default RelatedArticles;
