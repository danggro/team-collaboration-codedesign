import Link from "next/link";
import Button from "../Button";

export default function NavRight() {
  return (
    <div className="flex items-center space-x-11">
      <Link
        href={`/`}
        className="text-2xl font-semibold text-secondary hover:underline"
      >
        Login
      </Link>
      <Button>Sign Up</Button>
    </div>
  );
}
