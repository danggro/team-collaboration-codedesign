import Line from "../Line";

export default function MainFeature(props) {
  return (
    <div>
      <h4 className="text-secondary font-bold text-[40px]">{props.title}</h4>
      <Line color={props.color} py="20" />
      <p className="text-2xl text-secondary">{props.desc}</p>
    </div>
  );
}
