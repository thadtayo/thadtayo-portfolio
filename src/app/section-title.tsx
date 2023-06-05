const SectionHeader = ({ text }: { text: string }) => {
  return (
    <span
      className={`absolute whitespace-nowrap top-2 left-0 text-xl md:text-4xl transform -scale-100 text-[#A0A0A0]`}
      style={{ writingMode: "vertical-lr" }}
    >
      {text}
    </span>
  );
};

export default SectionHeader;
