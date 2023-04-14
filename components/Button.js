export default function Button(props) {
  return (
    <button className="px-[42px] py-[15px] bg-yellow text-black border border-yellow hover:bg-white text-2xl font-semibold rounded-[10px] hover:text-yellow">
      {props.children}
    </button>
  );
}
