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
    <div className="text-center">
      <h1>{title}</h1>
      {/* TODO: fix responsiveness here */}
      <Image
        src={img}
        alt={alt}
        style={{ maxWidth: "100%", height: "auto" }}
        className="mx-auto"
      />
      {children}
      <Button text="Check It Out" href={link} />
    </div>
  );
};

export default Project;
