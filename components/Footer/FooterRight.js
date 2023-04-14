import Product from "./Product";
import Resources from "./Resources";
import Solutions from "./Solutions";
import Team from "./Team";

export default function FooterRight() {
  return (
    <div className="flex justify-between gap-[150px]">
      <Product />
      <Team />
      <Solutions />
      <Resources />
    </div>
  );
}
