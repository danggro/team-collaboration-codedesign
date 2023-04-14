import Link from "next/link";

export default function ItemFooter(props) {
  return (
    <li className="text-xl mt-7 text-dark-blue/50 ">
      <Link className="hover:underline" href={"/#"}>
        {props.children}
      </Link>
    </li>
  );
}
