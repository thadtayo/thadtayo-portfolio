"use client";

const SectionHeader = ({ text }: { text: string }) => {
  return (
    <span
      className={`absolute top-0 left-0 -rotate-90 text-2xl transform origin-top-left translate-y-[${text.length}ch]`}
    >
      {text}
    </span>
  );
};

export default SectionHeader;
