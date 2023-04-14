import Button from "../Button";
import Line from "../Line";

export default function HeroLeft() {
  return (
    <section className="pt-[138px] pb-[182px]">
      <div className="w-5/12 ">
        <div className="pl-2 py-3 w-fit pr-8 leading-[160%] text-xl text-secondary bg-white rounded-[10px]">
          👋 Welcome To TeamFlow
        </div>
        <h1 className="text-[64px] leading-[130%] font-extrabold mt-4 text-white">
          Work the way that works for you
        </h1>
        <Line color="#3ADAD9" py="40" />
        <h4 className="text-[30px] text-white mb-10">
          Create, Build, Collaborate and ship products very faster
        </h4>
        <Button>Get Started</Button>
      </div>
    </section>
  );
}
