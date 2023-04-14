export default function CardWYCD(props) {
  return (
    <div className="w-4/12 text-center">
      <div className="flex justify-center">{props.logo}</div>
      <h3 className="mt-12 text-2xl font-bold mb-7 text-dark-blue">
        {props.title}
      </h3>
      <p className="px-5 text-xl">{props.desc}</p>
    </div>
  );
}
