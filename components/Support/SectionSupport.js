import Container from "../Container";
import Email from "./Email";
import Send from "./Send";

export default function SectionSupport() {
  return (
    <section className="mt-[480px] py-[100px] bg-[#FAFAFF] text-center">
      <Container>
        <span className="text-[#EB801D] mb-4 font-bold text-2xl">Support</span>
        <h4 className="text-dark-blue font-bold text-[40px] ">
          Subscribe Newsletter & get
        </h4>
        <h4 className="text-[36px] text-dark-blue font-light mb-[54px]">
          Company News
        </h4>
        <div className="flex items-center mx-auto bg-white w-fit px-[10px] py-[7px] rounded-[20px] shadow-[0_10px_20px_0_rgba(54,58,120,0.1)]">
          <label className="ml-[17px] mr-6">
            <Email />
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            className="text-xl focus:outline-none"
          />
          <button className="rounded-[20px] bg-[#686DF1] text-white text-xl font-semibold flex items-center gap-3 border border-[#686DF1] hover:bg-white hover:text-[#686DF1] px-[25px] py-[15px]">
            <Send />
            <span>Subscribe</span>
          </button>
        </div>
      </Container>
    </section>
  );
}
