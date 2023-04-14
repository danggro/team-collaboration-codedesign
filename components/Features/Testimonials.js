import Image from "next/image";
import Container from "../Container";
import HeadSection from "../HeadSection";
import Map from "./Map";
import testiImg from "@/public/Feature/Testimonials.png";
import CardTestimonials from "./CardTestimonials";

export default function Testimonials() {
  return (
    <div className="relative mt-[180px]">
      <Container>
        <div className="relative w-3/12 mx-auto text-center">
          <HeadSection>
            Client <span className="font-bold text-yellow">Testimonials</span>
          </HeadSection>
        </div>
        <CardTestimonials
          src="/Feature/Testimonials/Ellipse-1.png"
          name="Rocky Dixon"
          desc='"The Features on monday.com make our team work faster and easier to organize"'
        />
      </Container>

      <Image
        src={testiImg}
        alt=""
        className="absolute left-[50%] -translate-x-[50%] top-[300px]"
      />
      <div className="absolute top-[205px] left-[50%] -translate-x-[50%] -z-10">
        <Map />
      </div>
      <div className="absolute flex gap-5 -bottom-[350px] left-[50%] -translate-x-[50%] ">
        <div className="w-[14px] h-[14px] bg-yellow rounded-full "></div>
        <div className="w-[14px] h-[14px] bg-secondary/60 rounded-full "></div>
        <div className="w-[14px] h-[14px] bg-secondary/60 rounded-full "></div>
      </div>
    </div>
  );
}
