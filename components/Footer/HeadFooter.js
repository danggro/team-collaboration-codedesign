export default function HeadFooter(props) {
  return (
    <div>
      <h5 className="font-medium text-[22px] text-dark-blue">{props.title}</h5>
      <ul className="mb-3">{props.children}</ul>
    </div>
  );
}
