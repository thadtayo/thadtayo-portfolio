import { PropsWithChildren } from "react";
import SectionHeader from "./section-title";

const Section: React.FC<PropsWithChildren<{ title: string }>> = ({
  title,
  children,
}) => {
  return (
    <div className="relative px-16">
      <SectionHeader text={title} />
      {children}
    </div>
  );
};
export default Section;
