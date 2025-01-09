"use client";
import productImage from "@/assets/product-image.png";
import tubeImage from "@/assets/tube.png";
import pyramidImage from "@/assets/pyramid.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const transalateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#ffffff] to-[#d2dcff] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-header">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="mt-5 section-title">
            A more effective way to track progress
          </h2>
          <p className="mt-5 section-description">
            Effortlessly turn your idead into a fully functional, responsive,
            Saas website in jusr mintues with this template.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="product" className="mt-10" />
          <motion.img
            src={pyramidImage.src}
            alt="pyramid"
            className="absolute -top-32 -right-36 hidden md:block"
            height={262}
            width={262}
            style={{
              translateY: transalateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="tube"
            className="absolute bottom-24 -left-36 hidden md:block"
            height={248}
            width={248}
            style={{
              translateY: transalateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
