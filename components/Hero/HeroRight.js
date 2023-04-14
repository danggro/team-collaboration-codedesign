import HeroRightImg from "@/public/HeroRight.png";
import Image from "next/image";
export default function HeroRight() {
  return (
    <div className="absolute  top-[104px] -right-[120px]">
      <Image src={HeroRightImg} alt="" className="bg-fit" />
    </div>
  );
}
