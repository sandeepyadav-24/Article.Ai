import Navbar from "./Navbar";
import Featuresection from "./Faeturesection";
import Herosection from "./Herosection";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Herosection />
      <Featuresection />
      <Footer />
    </div>
  );
};
export default Home;
