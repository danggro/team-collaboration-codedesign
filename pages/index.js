import Container from "@/components/Container";
import SectionFeature from "@/components/Features/SectionFeature";
import SectionFooter from "@/components/Footer/SectionFooter";
import SectionHero from "@/components/Hero/SectionHero";
import NavBar from "@/components/NavBar/NavBar";
import WYCD from "@/components/WYCD/WYCD";

export default function Home() {
  return (
    <>
      <header className="bg-[#fafafa] w-full  h-full">
        <div className="relative z-10">
          <NavBar />
          <SectionHero />
        </div>
        <div className="bg-[url('/BgHero.png')] absolute bg-cover min-w-[1300px] h-[977px] top-0 left-0"></div>
      </header>
      <WYCD />
      <SectionFeature />
      <SectionFooter />
    </>
  );
}
