import HeadSection from "../HeadSection";
import SectionSupport from "../Support/SectionSupport";
import Customer from "./Customer";
import Integrate from "./Integrate";
import Manage from "./Manage";
import SaveTime from "./SaveTime";
import Setup from "./Setup";
import Testimonials from "./Testimonials";
import Visualize from "./Visualize";

export default function SectionFeature() {
  return (
    <>
      <HeadSection>
        Our <span className="font-bold text-yellow">Features</span>
      </HeadSection>
      <Manage />
      <Setup />
      <Integrate />
      <SaveTime />
      <Visualize />
      <Customer />
      <Testimonials />
      <SectionSupport />
    </>
  );
}
