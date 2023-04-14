export default function Line(props) {
  return (
    <div
      className="w-[65px] mb-10 rounded-full h-[6px]"
      style={{
        backgroundColor: `${props.color}`,
        marginTop: `${props.py}px`,
        marginBottom: `${props.py}px`,
      }}
    ></div>
  );
}
