const Chips = ({ texts }: { texts: string[] }) => {
  return (
    <div className="max-w-3xl">
      {texts.map((text) => (
        <Chip text={text} />
      ))}
    </div>
  );
};
const Chip = ({ text }: { text: string }) => {
  return (
    <span className="inline-block py-3 px-4 mr-2 my-2 bg-[#258490]/[.50] border border-white rounded-full">
      {text}
    </span>
  );
};

export default Chips;
