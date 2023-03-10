import React, { useEffect } from "react";
import Container from "common/container";
import {
  ProjectWrapper,
  ProjectDescription,
  ProjectImage,
  Tag,
  TagFolder,
} from "./style";
import { HeadingTwoText, SectionHeading } from "common/typography/style";
import { CustomButton } from "common/buttons";
import Link from "next/link";
import Image from "next/image";
import { gsap, Power2 } from "gsap";
// @ts-ignore
import * as gtag from "lib/gtag";

interface ContainerProps {
  title: string;
  description: string;
  link: string;
  projects: string[];
}
const Featured = ({ title, description, link, projects }: ContainerProps) => {
  const tl = gsap.timeline();
  useEffect(() => {
    gsap.fromTo(
      ".inner-image",
      {
        ease: Power2.easeInOut,
        y: 0,
      },
      {
        duration: 2,
        ease: Power2.easeInOut,
        repeat: -1,
        y: 310,
        yoyo: true,
      }
    );
  }, []);
  const googleAnalytics = (title: any) => {
    gtag.event({
      action: title,
      category: "Landing page",
      label: "button clicked",
      value: `clicked on viewing ${title}`,
    });
  };
  return (
    <Container title="FEATURED PROJECT" id="projects">
      <ProjectWrapper>
        <ProjectDescription>
          <HeadingTwoText>{title}</HeadingTwoText>
          <SectionHeading className="description">{description}</SectionHeading>
          <Link href={link}>
            <a>
              <CustomButton onClick={() => googleAnalytics(title)}>
                view website
              </CustomButton>
            </a>
          </Link>
          <br />
          <TagFolder>
            {projects.map((item) => {
              return <Tag key={item}>{item}</Tag>;
            })}
          </TagFolder>
        </ProjectDescription>
        <ProjectImage>
          <Link href="#">
            <a className="image-link">
              <div className="image-container">
                <div className="inner-image"></div>
                <div className="image-overlay">
                  <div className="inner-overlay-view"></div>
                </div>
              </div>
              <div className="first-image">
                <Image
                  src="https://assets.website-files.com/5f384a1ce0be7c5d544cc6e8/5f4fee062ac8e98c58bcee0b_Tablet%20Mockup-p-500.png"
                  alt="project-image"
                  width={200}
                  height={259}
                />
              </div>
              <div className="second-image">
                <Image
                  src="https://assets.website-files.com/5f384a1ce0be7c5d544cc6e8/5f4feaa9635e64fedbadd53d_Mobile%20Mockup.png"
                  alt="project-image"
                  width={100}
                  height={196}
                />
              </div>
            </a>
          </Link>
        </ProjectImage>
      </ProjectWrapper>
    </Container>
  );
};

export default Featured;
