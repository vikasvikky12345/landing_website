import logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkdeIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import Image from "next/image";
export const Footer = () => {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
      <div className="container">
        <div
          className="inline-flex relative before:content-[''] before:top-2 before:bottom-0
        before:blur  before:w-full before:bg-[linear-gradient(to_right,#f892cf,#fb92cf,#ffdd9b,#c2f0b1,#2fd8fe)] before:absolute"
        >
          <Image src={logo} alt="logo" className="relative" height={40} />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          <a href="#">Careers</a>
          <a href="#">Support</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkdeIn />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className="mt-6">
          &copy; 2025 Your company, Inc. All rights reserved{" "}
        </p>
      </div>
    </footer>
  );
};
