import React from "react";
import { BioWrapper, BioDescription, BioImage } from "./style";
import Container from "common/container";
import { SectionHeading } from "common/typography/style";
import { CustomButton } from "common/buttons";
import Image from "next/image";
import { Picture } from "assets";
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
    <Container title="bio">
      <BioWrapper>
        <BioDescription>
          <SectionHeading className="desc">
            Praise Adeoti is a simple and elegant single page portfolio website
            template for web designers and digital creatives.
          </SectionHeading>
          <SectionHeading className="desc">
            <br />
            Praise Adeoti uses the power of Webflow CMS to make showcasing your
            featured projects super simple from the Webflow Editor.
          </SectionHeading>
          <SectionHeading className="desc">
            <br />
            Use this space here to introduce yourself and talk about your
            professional experience, skills, interests and anything else you
            would like to share with your future clients!
          </SectionHeading>
          <br />
          <div>
            <CustomButton>Talk to praise</CustomButton>
          </div>
        </BioDescription>
        <BioImage>
          <div className="image">
            <Image src={Picture} alt="my-picutre" />
          </div>
          <div className="layer"></div>
        </BioImage>
      </BioWrapper>
    </Container>
  );
};

export default Bio;
