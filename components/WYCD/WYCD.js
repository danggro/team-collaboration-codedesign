import Image from "next/image";
import Container from "../Container";
import Line from "../Line";
import Hulu from "@/public/WYCD/Hulu.png";
import Studios from "@/public/WYCD/Studios.png";
import Universal from "@/public/WYCD/Universal.png";
import Adobe from "@/public/WYCD/Adobe.png";
import HeadSection from "../HeadSection";
import CardWYCD from "./CardWYCD";
import Business from "./Logo/Business";
import Financial from "./Logo/Financial";
import Market from "./Logo/Market";

export default function WYCD() {
  return (
    <section className="my-[150px]">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <Line color="#FFCA1D" py="0" />
            <h5 className="text-[30px] mt-3">
              See why over 100,000 teams choose <br /> TeamFlow.com
            </h5>
          </div>
          <div className="flex items-center gap-[87px]">
            <Image className="h-fit " src={Hulu} alt="" />
            <Image className="h-fit " src={Studios} alt="" />
            <Image className="h-fit " src={Universal} alt="" />
            <Image className="h-fit " src={Adobe} alt="" />
          </div>
        </div>
        <div className="mt-[160px]">
          <HeadSection>
            What you <span className="font-bold text-yellow">can do?</span>
          </HeadSection>
          <div className="flex mt-[110px] justify-between gap-[89px]">
            <CardWYCD
              logo={<Business />}
              title="Business Planning"
              desc="Our Business Plan is a written document describing a company's core business activities."
            />
            <CardWYCD
              logo={<Financial />}
              title="Financial Planning"
              desc="Our expert team sensible decision about their money, to ensure they achieve the life goals. A financial plan."
            />
            <CardWYCD
              logo={<Market />}
              title="Market Analysis"
              desc="A market analysis is a quantitative and qualitative assessment of a market. It looks into the size of the market."
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
