import { PropsWithChildren } from "react";
import SectionHeader from "./section-title";

const Section: React.FC<PropsWithChildren<{ title: string; id: string }>> = ({
  title,
  children,
  id,
}) => {
  return (
    <div className="relative px-16" id={id}>
      <SectionHeader text={title} />
      {children}
    </div>
  );
};
export default Section;
