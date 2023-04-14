import Image from "next/image";
import Container from "../Container";
import VisualizeImg from "@/public/Feature/Visualize.png";
import MainFeature from "./MainFeature";

export default function Visualize() {
  return (
    <div className="bg-[#fafaff] mt-[210px] py-[92px]">
      <Container>
        <div className="flex items-center justify-between">
          <div className="w-5/12">
            <MainFeature
              title="Visualize work with Views"
              desc="View data as a map, calendar, timeline, kanban, and more
              The easy-to-use, visual interface lets any team member jump in and get started, no training required."
              color="#686DF1"
            />
          </div>
          <Image src={VisualizeImg} alt="" className="" />
        </div>
      </Container>
    </div>
  );
}
