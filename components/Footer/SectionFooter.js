import Container from "../Container";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

export default function SectionFooter() {
  return (
    <footer className="mt-[138px] mb-[98px]">
      <div className="flex px-[120px] justify-between">
        <FooterLeft />
        <FooterRight />
      </div>
    </footer>
  );
}
