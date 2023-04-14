import Link from "next/link";

export default function NavItemLink(props) {
  return (
    <li>
      <a
        href={props.href}
        className="text-2xl hover:underline font-semibold text-[#eeeeee]"
      >
        {props.children}
      </a>
    </li>
  );
}
