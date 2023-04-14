import Image from "next/image";
import CompanyLogo from "@/public/Footer/Company_Logo.png";
import Facebook from "./Logo/Facebook";
import Instagram from "./Logo/Instagram";
import Twitter from "./Logo/Twitter";
import Youtube from "./Logo/Youtube";

export default function FooterLeft() {
  return (
    <div>
      <Image src={CompanyLogo} alt="" />
      <p className="mt-10 mb-20 text-xl text-dark-blue/50">
        All Rights Reserved &copy; teamflow.com
      </p>
      <h5 className="text-[22px] text-dark-blue mb-4 font-medium">Address</h5>
      <p className="mb-20 text-xl text-dark-blue/50">
        26 W 12th St. New York, NY 10342, NYC
      </p>
      <h5 className="text-[22px] font-medium mb-4">Social Media</h5>
      <div className="flex items-center gap-6">
        <Facebook />
        <Instagram />
        <Twitter />
        <Youtube />
      </div>
    </div>
  );
}
