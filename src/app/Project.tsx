import Image, { StaticImageData } from "next/image";
import { PropsWithChildren } from "react";
import Button from "./Button";

const Project: React.FC<
  PropsWithChildren<{
    title: string;
    img: StaticImageData;
    alt: string;
    link: string;
  }>
> = ({ title, img, alt, link, children }) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h4 className="text-4xl">{title}</h4>
      {/* TODO: fix responsiveness here */}
      <div className="max-w-[90vw] md:max-w-[50vw] flex items-center justify-center">
        <Image src={img} alt={alt} className="mx-auto self-center" />
      </div>
      <div className="max-w-2xl">{children}</div>
      <Button text="Check It Out" href={link} />
    </div>
  );
};

export default Project;
