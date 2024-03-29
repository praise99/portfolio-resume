import React, { useEffect, useRef } from "react";
import { BioWrapper, BioDescription, BioImage } from "./style";
import Container from "common/container";
import { SectionHeading } from "common/typography/style";
import { CustomButton } from "common/buttons";
import Image from "next/image";
import { Picture } from "assets";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const Bio = () => {
  const firstInformation =
    "Hi, I'm Praise Adeoti, a passionate frontend engineer with over 3 years of experience creating stunning websites and web applications. I specialize in programming languages like HTML, CSS, JavaScript, ReactJS, Typescript and NextJS and I'm always exploring new frameworks and tools to stay ahead of the curve.";
  const secondInformation =
    "In my free time, you'll find me tinkering with new web development projects and experimenting with design. I love finding creative solutions to complex problems and turning ideas into interactive experiences that engage and delight users.";
  const thirdInformation =
    "Whether you're looking for a website that showcases your brand or a dynamic web application that pushes the boundaries of what's possible, I'm excited to work with you to bring your vision to life. Let's build something amazing together!";
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
    <Container title="bio" id="bio">
      <BioWrapper>
        <BioDescription ref={triggerRef}>
          <SectionHeading className="desc">
            {firstInformation.split("").map((letter, index) => (
              <span className="reveal-text" key={index} ref={setlettersRef}>
                {letter}
              </span>
            ))}
          </SectionHeading>
          <SectionHeading className="desc">
            <br />
            {secondInformation.split("").map((letter, index) => (
              <span className="reveal-text" key={index} ref={setlettersRef}>
                {letter}
              </span>
            ))}
          </SectionHeading>
          <SectionHeading className="desc">
            <br />
            {thirdInformation.split("").map((letter, index) => (
              <span className="reveal-text" key={index} ref={setlettersRef}>
                {letter}
              </span>
            ))}
          </SectionHeading>
          <br />

          <Link href="https://drive.google.com/file/d/1MkcoLW1vzdm35Nkq3ltS5b9ZNKf0yyMB/view?usp=sharing">
            <a target="_blank" rel="noreferrer">
              <CustomButton>download resume</CustomButton>
            </a>
          </Link>
        </BioDescription>
        <BioImage>
          <div className="image">
            <Image src={Picture} priority={true} alt="my-picutre" />
          </div>
          <div className="layer"></div>
        </BioImage>
      </BioWrapper>
    </Container>
  );
};

export default Bio;
