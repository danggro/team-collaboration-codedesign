import Image from "next/image";
import Container from "../Container";
import CustomerImg from "@/public/Feature/Customer.png";
import MainFeature from "./MainFeature";
import Button from "../Button";

export default function Customer() {
  return (
    <Container>
      <div className="flex mt-[210px] items-start justify-between px-[38px]">
        <Image src={CustomerImg} alt="" className="" />
        <div className="w-6/12 pl-10 mt-[87px]">
          <MainFeature
            title="24/7 Customer Support"
            desc="Our team is here to give you personalized support within the hour available 24/7. In accordance with our commitment to providing superior and professional service. Join daily live webinars, watch our tutorials, or browse through our knowledge 
            base"
            color="#FFCA1D"
          />
          <div className="mt-8">
            <Button>Read More</Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
