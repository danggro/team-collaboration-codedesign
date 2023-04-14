import Container from "../Container";
import NavLink from "./NavLink";
import NavLogo from "./NavLogo";
import NavRight from "./NavRight";

export default function NavBar() {
  return (
    <Container>
      <div className="flex pt-[60px] items-center justify-between">
        <NavLogo />
        <NavLink />
        <NavRight />
      </div>
    </Container>
  );
}
