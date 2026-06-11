import AboutPageFounderSection from "../../components/aboutPage/AboutPageFounderSection";
import AboutPagePrestigeSection from "../../components/aboutPage/AboutPagePrestigeSection";
import AboutPageSignatureSection from "../../components/aboutPage/AboutPageSignatureSection";
import AboutPageStorySection from "../../components/aboutPage/AboutPageStorySection";
import AboutPageTeamSection from "../../components/aboutPage/AboutPageTeamSection";

function page() {
  return (
    <div>
      <AboutPagePrestigeSection />
      <AboutPageSignatureSection />
      <AboutPageStorySection />
      <AboutPageFounderSection />
      <AboutPageTeamSection />
    </div>
  );
}

export default page;
