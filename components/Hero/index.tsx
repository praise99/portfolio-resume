import React, { useEffect, useRef } from "react";
import { HeroWrapper, FirstCard, SecondCard, ThirdCard } from "./style";
import { HeadingOneText } from "common/typography/style";
import Links from "common/social-links";
import Image from "next/image";
import { Logo } from "assets";
import Link from "next/link";
import { CustomButton } from "common/buttons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const Hero = () => {
  const firstInformation = "Building interactive";
  const secondInformation = "experiences that translate";
  const thirdInformation = "into immersive digital";
  const fourthInformation = "solutions";
  const [lettersRef, setlettersRef] = useArrayRef();
  const triggerRef = useRef(null);
  function useArrayRef() {
    const lettersRef: any = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref: any) => ref && lettersRef.current.push(ref)];
  }
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top center",
        end: "bottom 50%",
      },
      color: "#00ffd0",
      duration: 5,
      stagger: 1,
    });
    return () => {
      anim.kill();
    };
  }, []);
  return (
    <HeroWrapper>
      <FirstCard>
        <SecondCard>
          <ThirdCard>
            <div className="hero_title">
              <HeadingOneText ref={triggerRef}>
                {/* Building interactive experiences that translate into immersive
                digital solutions */}
                {firstInformation.split("").map((letter, index) => (
                  <span className="reveal-text" key={index} ref={setlettersRef}>
                    {letter}
                  </span>
                ))}
                <br />
                {secondInformation.split("").map((letter, index) => (
                  <span className="reveal-text" key={index} ref={setlettersRef}>
                    {letter}
                  </span>
                ))}
                <br />
                {thirdInformation.split("").map((letter, index) => (
                  <span className="reveal-text" key={index} ref={setlettersRef}>
                    {letter}
                  </span>
                ))}
                <br />
                {fourthInformation.split("").map((letter, index) => (
                  <span className="reveal-text" key={index} ref={setlettersRef}>
                    {letter}
                  </span>
                ))}
              </HeadingOneText>
            </div>
            <div className="hero_description">
              <div className="linking">
                <Links />
                <div className="image">
                  <Image
                    src={Logo}
                    alt="my-picture"
                    height={80}
                    width={80}
                    priority={true}
                  />
                </div>
                <div className="image-hidden">
                  <Image
                    src={Logo}
                    alt="my-picture"
                    height={40}
                    width={40}
                    priority={true}
                  />
                </div>
                <div className="layer"></div>
              </div>
              <div className="button-hidden">
                <Link href="#hire">
                  <a>
                    <CustomButton>HIRE PRAISE</CustomButton>
                  </a>
                </Link>
              </div>
            </div>
          </ThirdCard>
        </SecondCard>
      </FirstCard>
    </HeroWrapper>
  );
};

export default Hero;
