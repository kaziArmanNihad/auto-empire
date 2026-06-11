import EmpireServiceComponent from "../components/homePage/EmpireServiceComponent";
import HeroComponent from "../components/homePage/HeroComponent";
import LetestComponent from "../components/homePage/LetestComponent";
import SpotlightComponent from "../components/homePage/SpotlightComponent";
import StockComponent from "../components/homePage/StockComponent";
import TopSellComponent from "../components/homePage/TopSellComponent";
import TreasureComponent from "../components/homePage/TreasureComponent";

function Home() {
  return (
    <div className="space-y-10">
      <HeroComponent />
      <LetestComponent />
      <TopSellComponent />
      <TreasureComponent />
      <SpotlightComponent />
      <EmpireServiceComponent />
      <StockComponent />
    </div>
  );
}

export default Home;
