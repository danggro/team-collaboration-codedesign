import Container from "../Container";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function SectionHero() {
  return (
    <Container>
      <div className="relative">
        <HeroLeft />
        <HeroRight />
      </div>
    </Container>
  );
}
