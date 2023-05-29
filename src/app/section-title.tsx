const SectionHeader = ({ text }: { text: string }) => {
  return (
    <span
      className={`absolute top-2 left-0 text-4xl transform -scale-100 text-[#A0A0A0]`}
      style={{ writingMode: "vertical-lr" }}
    >
      {text}
    </span>
  );
};

export default SectionHeader;
