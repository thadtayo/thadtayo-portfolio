"use client";
import { SetStateAction, useState } from "react";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

const Socials = () => {
  return (
    <span className="flex gap-4 items-center">
      <span>
        <a
          href="https://github.com/thadtayo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.88196 19.7068C8.88196 19.8045 8.76965 19.8826 8.62805 19.8826C8.46692 19.8973 8.35461 19.8192 8.35461 19.7068C8.35461 19.6092 8.46692 19.5311 8.60852 19.5311C8.755 19.5164 8.88196 19.5945 8.88196 19.7068ZM7.3634 19.4871C7.32922 19.5848 7.42688 19.6971 7.57336 19.7264C7.70032 19.7752 7.8468 19.7264 7.8761 19.6287C7.9054 19.5311 7.81262 19.4188 7.66614 19.3748C7.53918 19.3406 7.39758 19.3895 7.3634 19.4871ZM9.52161 19.4041C9.38 19.4383 9.28235 19.5311 9.297 19.6434C9.31165 19.741 9.4386 19.8045 9.58508 19.7703C9.72668 19.7361 9.82434 19.6434 9.80969 19.5457C9.79504 19.4529 9.66321 19.3895 9.52161 19.4041ZM12.7345 0.693176C5.96204 0.693176 0.781372 5.83478 0.781372 12.6072C0.781372 18.0223 4.18958 22.6561 9.05774 24.2869C9.68274 24.3992 9.90247 24.0135 9.90247 23.6961C9.90247 23.3934 9.88782 21.7234 9.88782 20.6981C9.88782 20.6981 6.46985 21.4305 5.75208 19.243C5.75208 19.243 5.19543 17.8221 4.39465 17.4559C4.39465 17.4559 3.27649 16.6893 4.47278 16.7039C4.47278 16.7039 5.6886 16.8016 6.35754 17.9637C7.42688 19.8484 9.21887 19.3065 9.91711 18.9842C10.0294 18.2029 10.3468 17.6609 10.6984 17.3387C7.96887 17.0359 5.21497 16.6404 5.21497 11.9432C5.21497 10.6004 5.58606 9.92657 6.36731 9.0672C6.24036 8.74982 5.82532 7.44122 6.49426 5.75177C7.51477 5.43439 9.8634 7.07013 9.8634 7.07013C10.84 6.79669 11.8898 6.65509 12.9298 6.65509C13.9698 6.65509 15.0197 6.79669 15.9962 7.07013C15.9962 7.07013 18.3448 5.4295 19.3654 5.75177C20.0343 7.44611 19.6193 8.74982 19.4923 9.0672C20.2736 9.93146 20.7521 10.6053 20.7521 11.9432C20.7521 16.6551 17.8761 17.0311 15.1466 17.3387C15.5958 17.7244 15.9767 18.4568 15.9767 19.6043C15.9767 21.2498 15.962 23.2859 15.962 23.6863C15.962 24.0037 16.1866 24.3895 16.8068 24.2772C21.6896 22.6561 25.0001 18.0223 25.0001 12.6072C25.0001 5.83478 19.507 0.693176 12.7345 0.693176ZM5.52747 17.534C5.46399 17.5828 5.47864 17.6951 5.56165 17.7879C5.63977 17.866 5.75208 17.9002 5.81555 17.8367C5.87903 17.7879 5.86438 17.6756 5.78137 17.5828C5.70325 17.5047 5.59094 17.4705 5.52747 17.534ZM5.00012 17.1385C4.96594 17.202 5.01477 17.2801 5.11243 17.3289C5.19055 17.3777 5.28821 17.3631 5.32239 17.2947C5.35657 17.2313 5.30774 17.1531 5.21008 17.1043C5.11243 17.075 5.0343 17.0897 5.00012 17.1385ZM6.58215 18.8768C6.50403 18.9402 6.53333 19.0867 6.64563 19.1795C6.75793 19.2918 6.89954 19.3065 6.96301 19.2283C7.02649 19.1649 6.99719 19.0184 6.89954 18.9256C6.79211 18.8133 6.64563 18.7986 6.58215 18.8768ZM6.02551 18.159C5.94739 18.2078 5.94739 18.3348 6.02551 18.4471C6.10364 18.5594 6.23547 18.6082 6.29895 18.5594C6.37708 18.4959 6.37708 18.369 6.29895 18.2567C6.23059 18.1443 6.10364 18.0955 6.02551 18.159Z"
              fill="#F5F5F5"
            />
          </svg>
        </a>
      </span>
      <span>
        <a
          href="https://twitter.com/thadtayo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="25"
            height="21"
            viewBox="0 0 25 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.4303 5.75343C22.4462 5.9755 22.4462 6.19762 22.4462 6.41969C22.4462 13.1931 17.2907 20.9977 7.86814 20.9977C4.96521 20.9977 2.26853 20.1569 0.00012207 18.6976C0.412573 18.7452 0.809106 18.761 1.23743 18.761C3.63269 18.761 5.83767 17.9521 7.59846 16.572C5.34592 16.5244 3.45823 15.0491 2.80784 13.0187C3.12512 13.0662 3.44236 13.098 3.77551 13.098C4.23552 13.098 4.69558 13.0345 5.12385 12.9235C2.77615 12.4476 1.01531 10.3854 1.01531 7.89493V7.83151C1.69739 8.21222 2.4906 8.45016 3.33127 8.48185C1.9512 7.56178 1.04705 5.99137 1.04705 4.21471C1.04705 3.26295 1.30081 2.39049 1.745 1.62906C4.26721 4.7382 8.05847 6.76862 12.3097 6.99074C12.2304 6.61002 12.1828 6.21349 12.1828 5.81691C12.1828 2.99327 14.4671 0.693176 17.3065 0.693176C18.7818 0.693176 20.1142 1.31183 21.0502 2.31119C22.2081 2.08912 23.3185 1.6608 24.3021 1.07389C23.9213 2.26364 23.1123 3.263 22.0495 3.89747C23.0806 3.78649 24.08 3.50089 25 3.10436C24.3022 4.11954 23.4297 5.02369 22.4303 5.75343Z"
              fill="white"
            />
          </svg>
        </a>
      </span>
      <span>
        <a
          href="https://linkedin.com/in/thad-joshua-tayo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="22"
            height="24"
            viewBox="0 0 22 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.4286 0.693176H1.56652C0.702232 0.693176 0 1.4376 0 2.35144V22.0349C0 22.9488 0.702232 23.6932 1.56652 23.6932H20.4286C21.2929 23.6932 22 22.9488 22 22.0349V2.35144C22 1.4376 21.2929 0.693176 20.4286 0.693176ZM6.64911 20.4075H3.38839V9.43112H6.65402V20.4075H6.64911ZM5.01875 7.93202C3.97277 7.93202 3.12812 7.04385 3.12812 5.95545C3.12812 4.86706 3.97277 3.97889 5.01875 3.97889C6.05982 3.97889 6.90937 4.86706 6.90937 5.95545C6.90937 7.04898 6.06473 7.93202 5.01875 7.93202ZM18.8719 20.4075H15.6112V15.0682C15.6112 13.795 15.5866 12.1572 13.917 12.1572C12.2179 12.1572 11.9576 13.5434 11.9576 14.9758V20.4075H8.69688V9.43112H11.825V10.9302H11.8692C12.3062 10.0677 13.3719 9.15902 14.958 9.15902C18.258 9.15902 18.8719 11.4334 18.8719 14.3905V20.4075Z"
              fill="white"
            />
          </svg>
        </a>
      </span>
    </span>
  );
};

const MenuIcon = ({
  onClick,
  className,
}: {
  onClick: React.Dispatch<SetStateAction<boolean>>;
  className?: string;
}) => {
  return (
    <span
      className={`md:hidden ${className}`}
      onClick={() => onClick((prev) => !prev)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 stroke-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 6h16M4 12h12M4 18h08"
        ></path>
      </svg>
    </span>
  );
};
const SectionLinks = () => {
  return (
    <>
      <span>
        <a href="#hero">About</a>
      </span>
      <span>
        <a href="#experiences"> Experiences</a>
      </span>
      <span>
        <a href="#projects">Projects</a>
      </span>
      <span>
        <a href="#blog">Blog</a>
      </span>
    </>
  );
};
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="py-4 px-12 bg-black flex flex-row justify-between items-center relative">
      <span className="text-xl ">Thad Tayo</span>
      <MenuIcon onClick={() => setOpenMenu((prev) => !prev)} />
      {openMenu && (
        <div className="absolute top-0 right-0 min-h-screen min-w-full bg-slate-800 z-50 p-8">
          <div>
            <div className="flex flex-col">
              <MenuIcon
                onClick={() => setOpenMenu((prev) => !prev)}
                className="self-end"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-12 min-h-screen">
              <SectionLinks />
              <Socials />
            </div>
          </div>
        </div>
      )}
      <span className="border border-[#EDEFF1]/[.10] py-4 px-8 md:flex flex-row gap-2 rounded-full hidden">
        <SectionLinks />
      </span>
      <span className="hidden md:block">
        <Socials />
      </span>
    </nav>
  );
};

const Footer = () => {
  return (
    <div className="py-8 flex flex-col gap-4 justify-center items-center">
      <Socials />© Thad Tayo {new Date().getFullYear()}
    </div>
  );
};
