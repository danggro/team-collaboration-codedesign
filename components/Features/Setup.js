import Image from "next/image";
import Container from "../Container";
import SetupImg from "@/public/Feature/Setup.png";
import MainFeature from "./MainFeature";

export default function Setup() {
  return (
    <div className="bg-[#fafaff] mt-[138px] pt-10">
      <Container>
        <div className="flex items-center">
          <div className="w-6/12 pr-24">
            <MainFeature
              title="Set up in minutes"
              desc="Get started fast with hundreds of visual and customizable templates - or create your own. Use our free online template maker to create beautiful template in minutes. Choose from hundreds of pre-made templates and tell stories with data with our easy drag-and-drop infographic creator."
              color="#FFCA1D"
            />
          </div>
          <Image src={SetupImg} alt="" className="w-6/12" />
        </div>
      </Container>
    </div>
  );
}
