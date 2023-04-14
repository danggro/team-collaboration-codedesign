export default function HeadSection(props) {
  return (
    <h3 className="text-[48px] text-center text-secondary/80 font-semibold leading-[70px]">
      {props.children}
    </h3>
  );
}
