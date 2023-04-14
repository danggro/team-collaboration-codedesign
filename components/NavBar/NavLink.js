import ArrowBot from "./ArrowBot";
import NavItemLink from "./NavItemLink";

export default function NavLink() {
  return (
    <ul className="flex space-x-10">
      <NavItemLink href="#Product">
        <div className="flex items-center space-x-2">
          <span>Product</span>
          <ArrowBot />
        </div>
      </NavItemLink>
      <NavItemLink href="#Solution">
        <div className="flex items-center space-x-2">
          <span>Solution</span>
          <ArrowBot />
        </div>
      </NavItemLink>
      <NavItemLink href="#Enterprise">Enterprise</NavItemLink>
      <NavItemLink href="#Pricing">Pricing</NavItemLink>
    </ul>
  );
}
