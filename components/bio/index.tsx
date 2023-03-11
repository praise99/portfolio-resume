import React from "react";
import { BioWrapper, BioDescription, BioImage } from "./style";
import Container from "common/container";
import { SectionHeading } from "common/typography/style";
import { CustomButton } from "common/buttons";
import Image from "next/image";
import { Picture } from "assets";
import Link from "next/link";
const Bio = () => {
  let skills = [
    {
      html: "html",
      css: [
        {
          sass: "sass",
          less: "less",
          styledComponents: "styled-components",
          chakraUi: "chakraUi",
          tailwind: "tailwindcss",
        },
      ],
      javascript: [
        {
          react: "reactJs",
          angular: "angularJs",
          next: "nextJs",
          typescript: "typescript",
        },
      ],
    },
  ];
  return (
    <Container title="bio" id="bio">
      <BioWrapper>
        <BioDescription>
          <SectionHeading className="desc">
            Hi, I&apos;m Praise Adeoti, a passionate frontend engineer with over
            3 years of experience creating stunning websites and web
            applications. I specialize in programming languages like HTML, CSS,
            JavaScript, ReactJS, Typescript and NextJS and I&apos;m always
            exploring new frameworks and tools to stay ahead of the curve.
          </SectionHeading>
          <SectionHeading className="desc">
            <br />
            In my free time, you&apos;ll find me tinkering with new web
            development projects and experimenting with design. I love finding
            creative solutions to complex problems and turning ideas into
            interactive experiences that engage and delight users.
          </SectionHeading>
          <SectionHeading className="desc">
            <br />
            Whether you&apos;re looking for a website that showcases your brand
            or a dynamic web application that pushes the boundaries of
            what&apos;s possible, I&apos;m excited to work with you to bring
            your vision to life. Let&apos;s build something amazing together!
          </SectionHeading>
          <br />

          <Link href="https://drive.google.com/file/d/1lVSDuiyJ3mCBnRd79DzY6ACMIC-T0foX/view?usp=sharing">
            <a target="_blank" rel="noreferrer">
              <CustomButton>resume</CustomButton>
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
