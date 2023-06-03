const Button = ({ text, href }: { text: string; href: string }) => {
  return (
    <button className="border border-[#EDEFF1]/[.50] rounded-full py-2 px-3">
      <a href={href} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </button>
  );
};

export default Button;
