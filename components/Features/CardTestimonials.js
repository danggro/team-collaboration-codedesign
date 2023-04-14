import Image from "next/image";
import BoxTestimonials from "./BoxTestimonials";

export default function CardTestimonials(props) {
  return (
    <div className="relative w-full mt-[250px]">
      <div className="mx-auto shadow-xl w-fit rounded-3xl">
        <BoxTestimonials />
      </div>
      <Image
        height={`100`}
        width={`100`}
        src={props.src}
        alt=""
        className="absolute left-[50%] -translate-x-[50%] -top-[75px]"
      />
      <div className="absolute px-10 w-4/12 left-[50%] top-[60px] -translate-x-[50%]">
        <h4 className="font-bold text-dark-blue text-[26px] text-center">
          {props.name}
        </h4>
        <p className="text-[22px] text-secondary text-center">{props.desc}</p>
      </div>
    </div>
  );
}
