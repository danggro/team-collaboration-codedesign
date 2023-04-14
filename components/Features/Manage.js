import Image from "next/image";
import Container from "../Container";
import ManageImg from "@/public/Feature/Manage.png";
import MainFeature from "./MainFeature";

export default function Manage() {
  return (
    <Container>
      <div className="flex mt-[90px] items-center justify-between">
        <Image src={ManageImg} alt="" className="w-6/12" />
        <div className="w-6/12 pl-[100px]">
          <MainFeature
            title="Manage everything in one workspace"
            desc="Planning, tracking and delivering your team's best work has never been easier. An integrated workspace that's simple to use, TeamFlow lets you spend less time managing your work and more time actually doing it."
            color="#FFCA1D"
          />
        </div>
      </div>
    </Container>
  );
}
