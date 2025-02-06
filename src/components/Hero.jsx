import React, { useRef } from "react";
import Section from "./Section";
import Button from "./Button";
import { curve, heroBackground, robot } from "../assets";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
          Empower Your <br /> Business To{" "}
            <span className="inline-block relative">
              Grow{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
          Embark on your journey with us as your trusted guide, every step of the way.
          </p>
          <Button href="#contact" white>
            Get Started
          </Button>
        </div>
       
          <BackgroundCircles />

        {/* <CompanyLogos className="hidden relative z-10 mt-20 lg:block"/> */}
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
