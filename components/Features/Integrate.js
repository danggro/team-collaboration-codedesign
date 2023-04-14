import Image from "next/image";
import Button from "../Button";
import Container from "../Container";
import HeadSection from "../HeadSection";
import One from "@/public/Integrate/One.png";
import Two from "@/public/Integrate/Two.png";
import Three from "@/public/Integrate/Three.png";
import Four from "@/public/Integrate/Four.png";
import Five from "@/public/Integrate/Five.png";
export default function Integrate() {
  return (
    <Container>
      <div className="mt-[262px]">
        <div className="w-6/12 mx-auto ">
          <HeadSection>
            <span className="font-bold text-yellow">Integrate</span> with your
            exsisting tools in a few clicks
          </HeadSection>
        </div>
        <div className="flex my-[100px] gap-[92px] w-10/12 mx-auto">
          <Image
            src={One}
            alt=""
            className="h-fit shadow-[2px_16px_40px_0_rgba(64,90,142,0.16)]"
          />
          <Image
            src={Two}
            alt=""
            className="h-fit shadow-[2px_16px_40px_0_rgba(64,90,142,0.16)]"
          />
          <Image
            src={Three}
            alt=""
            className="h-fit shadow-[2px_16px_40px_0_rgba(64,90,142,0.16)]"
          />
          <Image
            src={Four}
            alt=""
            className="h-fit shadow-[2px_16px_40px_0_rgba(64,90,142,0.16)]"
          />
          <Image
            src={Five}
            alt=""
            className="h-fit shadow-[2px_16px_40px_0_rgba(64,90,142,0.16)]"
          />
        </div>
        <div className="text-center">
          <Button>View All</Button>
        </div>
      </div>
    </Container>
  );
}
