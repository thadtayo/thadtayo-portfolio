const Button = ({
  text,
  href,
  internal,
}: {
  text: string;
  href: string;
  internal?: boolean;
}) => {
  return (
    <button className="border border-[#EDEFF1]/[.50] rounded-full py-2 px-3">
      {!internal ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {" "}
          {text}{" "}
        </a>
      ) : (
        <a href={href}>{text}</a>
      )}
    </button>
  );
};

export default Button;
