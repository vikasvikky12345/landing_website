import productImage from "@/assets/product-image.png";
import tubeImage from "@/assets/tube.png";
import pyramidImage from "@/assets/pyramid.png";
import Image from "next/image";
export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#ffffff] to-[#d2dcff] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
            A more effective way to track progress
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#101D3E] mt-5">
            Effortlessly turn your idead into a fully functional, responsive,
            Saas website in jusr mintues with this template.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="product" className="mt-10" />
          <Image
            src={pyramidImage}
            alt="pyramid"
            className="absolute -top-32 -right-36 hidden md:block"
            height={262}
            width={262}
          />
          <Image
            src={tubeImage}
            alt="tube"
            className="absolute bottom-24 -left-36 hidden md:block"
            height={248}
          />
        </div>
      </div>
    </section>
  );
};
