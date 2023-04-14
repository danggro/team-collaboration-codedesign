import Image from "next/image";
import Container from "../Container";
import SaveTimeImg from "@/public/Feature/SaveTime.png";
import MainFeature from "./MainFeature";

export default function SaveTime() {
  return (
    <Container>
      <div className="flex mt-[210px] items-center justify-between">
        <Image src={SaveTimeImg} alt="" className="" />
        <div className="w-6/12 pl-[100px]">
          <MainFeature
            title="Save time with Automations"
            desc="Automate the repetitive work in seconds so you can avoid human error and focus on what matters. It gives the impression of software that its highly automated which implies that it is good for client for who want to save time and manage team members easily."
            color="#FFCA1D"
          />
        </div>
      </div>
    </Container>
  );
}
