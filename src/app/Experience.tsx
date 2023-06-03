import { PropsWithChildren } from "react";
import Chips from "./Chip";

type ExperienceProps = {
  title: string;
  location: string;
  date: string;
  skills: string[];
  reverse?: boolean;
};
const Experience: React.FC<PropsWithChildren<ExperienceProps>> = ({
  title,
  location,
  date,
  skills,
  children,
  reverse,
}) => {
  if (reverse) {
    return (
      <div className="my-36 flex flex-row gap-8">
        <div className="w-1/2">{children}</div>
        <div className=" flex flex-col gap-4 w-1/2">
          <div className="">
            <p className="text-2xl">
              {title} • {location}
            </p>
            <p className="text-2xl">{date}</p>
          </div>
          <div>
            <Chips texts={skills} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="my-12 flex flex-row gap-8">
      <div className=" flex flex-col gap-4 w-1/2">
        <div className="">
          <p className="text-2xl">
            {title} • {location}
          </p>
          <p className="text-2xl">{date}</p>
        </div>
        <div>
          <Chips texts={skills} />
        </div>
      </div>
      <div className="w-1/2">{children}</div>
    </div>
  );
};

export default Experience;
