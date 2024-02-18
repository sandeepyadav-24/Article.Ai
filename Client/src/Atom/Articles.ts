import { atom } from "recoil";
export const Articles = atom({
  key: "Articles",
  default: [
    {
      author: "Robert Barone",
      description:
        "The oft forecasted Recession hasn’t yet appeared. Evidence leads us to conclude that Recession is coming, and this quarter will mark its beginning.",
      link: "https://www.forbes.com/sites/greatspeculations/2023/11/11/recession-the-stars-continue-to-align/",
      title: "Recession: The Stars Continue To Align",
      year: 2023,
    },
    {
      author: "Simon Moore",
      description:
        "The job market can be a robust recession indicator. It's close to calling a recession currently, and, if so, will join other indicators in predicting a 2024 recession.",
      link: "https://www.forbes.com/sites/simonmoore/2023/11/04/jobs-market-close-to-a-major-recession-warning/",
      title: "Jobs Market Close To A Major Recession Warning",
      year: 2023,
    },
    {
      author: "Aruni Soni",
      description:
        "A short recession is the only thing that will get the Fed to cut interest rates, an economist said.",
      link: "https://markets.businessinsider.com/news/stocks/recession-better-than-soft-landing-fed-hikes-inflation-jobs-stagflation-2023-10",
      title:
        "A short recession would be better for most investors than a soft landing, economist says",
      year: 2023,
    },
    {
      author: "Phil Norton",
      description:
        "In an ever-changing economic landscape, the prospect of a recession can cast a shadow of uncertainty over businesses of all […]\nThe post Recession ahead? Follow these Money Saving Tips for your Workplace appeared first on ReadWrite.",
      link: "https://readwrite.com/recession-ahead-follow-these-money-saving-tips-for-your-workplace/",
      title:
        "Recession ahead? Follow these Money Saving Tips for your Workplace",
      year: 2023,
    },
    {
      author: "Jacob Zinkula,Ayelet Sheffey",
      description:
        'Some experts say the US economy is poised for a "soft landing." Others think a recession is coming in 2024.',
      link: "https://www.businessinsider.com/recession-2024-inflation-economy-interest-rates-stock-market-layoffs-fed-2023-11",
      title:
        "Now that inflation is slowing, here's when 10 experts think we'll see a recession",
      year: 2023,
    },
  ],
});
