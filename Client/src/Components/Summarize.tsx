import ArticleNavbar from "./ArticleNavbar";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import RealtedArticle from "../Atom/RelatedArticle";

interface RelatedProps {
  link: string;
}

const Summarize = () => {
  const relatedvalue: RelatedProps[] = useRecoilValue(RealtedArticle);
  return (
    <div className="bg-black  ">
      <ArticleNavbar />
      <div className="p-10  flex flex-row">
        <div className="bg-white mx-5 w-1/3 p-5 h-[400px] rounded-lg">
          <div>Question Title </div>
          <h1>Author Name</h1>
          <h1>Article Publication Year</h1>
          <span className="hover:bg-[#F1F4F6] px-2 py-2 rounded-md">Save</span>|
          <span className="hover:bg-[#F1F4F6] px-2 py-2 rounded-md">Share</span>
          <hr className="mb-5" />
          <h1
            className="font-semibold
          "
          >
            Related Article
          </h1>
          {relatedvalue.map((e) => {
            return (
              <h1>
                <Link to={e.link}>{e.link}</Link>
              </h1>
            );
          })}
        </div>
        <div className="bg-white   w-2/3 rounded-lg p-5 h-[700px]  ">
          <h1 className="text-[#889BAA] font-bold my-2">Summary</h1>
          Abstract Ion and humidity sensor array films have been developed using
          an interpenetrating polymeric network (IPN) of photonic networked
          cholesteric liquid crystals (CLCs) intertwined with network-structured
          poly(acrylic acid). Selective curing of a photonic CLC network film
          infiltrated with an acrylic acid/tri(propylene glycol) diacrylate
          mixture produced an array film of dots with photonic IPN structures on
          a simple photonic CLC background. Water isolation by individual
          hydrophilic dots against a hydrophobic background allowed testing of
          small sample amounts. Subsequent acetone/KOH treatments of the IPN
          film (IPNacetone/KOH film) prevented hydrogen bonding between
          carboxylic groups, maximized swelling of the film with water, and
          increased the speed of photonic color change. A full range of
          reflected colors, i.e., blue (dry) to red (humid), allows this film to
          act as an optical humidity sensor. The replacement of K+ with divalent
          ions that bridge the carboxylic groups prevented film swelling. Given
          that the photonic band gap wavelength is inversely proportional to the
          CaCl2 concentration, the amount of Ca2+ can be determined from the
          reflected color by the naked eye. This cost-effective, convenient
          IPNacetone/KOH film has been successfully applied as a biosensor for
          detecting Ca2+ in human blood serum and saliva and as an
          anti-counterfeiting label that reveals a colorful image under humid
          conditions.
        </div>
      </div>
    </div>
  );
};
export default Summarize;
