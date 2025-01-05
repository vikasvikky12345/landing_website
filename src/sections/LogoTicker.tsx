import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="py-6 md:py-10">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 float-none">
            <Image src={acmeLogo} className="logo-ticker-image" alt="acme" />
            <Image
              src={quantumLogo}
              className="logo-ticker-image"
              alt="quantum"
            />
            <Image src={echoLogo} className="logo-ticker-image" alt="echo" />
            <Image
              src={celestialLogo}
              className="logo-ticker-image"
              alt="celestial"
            />
            <Image src={pulseLogo} className="logo-ticker-image" alt="pulse" />
            <Image src={apexLogo} className="logo-ticker-image" alt="apex" />
          </div>
        </div>
      </div>
    </div>
  );
};
