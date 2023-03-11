import React, { useEffect } from "react";
import Container from "common/container";
import {
  ProjectWrapper,
  ProjectDescription,
  ProjectImage,
  Tag,
  TagFolder,
  Box,
} from "./style";
import { HeadingTwoText, SectionHeading } from "common/typography/style";
import { CustomButton } from "common/buttons";
import Link from "next/link";
import Image from "next/image";
import { gsap, Power2 } from "gsap";
import { GithubFull, Global } from "assets";
import { GlobalIcon } from "../assets/global";
import { GithubIcon } from "../assets/github";
interface ContainerProps {
  title: string;
  description: string;
  link: string;
  projects: string[];
  githubLink: string;
}
const Featured = ({
  title,
  description,
  link,
  projects,
  githubLink,
}: ContainerProps) => {
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
  const event = ({ action, category, label, value }: any) => {
    // @ts-ignore
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  };
  const googleAnalytics = (title: any) => {
    event({
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
          <Box>
            <Link href={link}>
              <a target="_blank" rel="noreferrer" className="button-space">
                <CustomButton onClick={() => googleAnalytics(title)}>
                  <GlobalIcon class="image" stroke="currentColor" />
                  &nbsp;website
                </CustomButton>
              </a>
            </Link>
            <Link href={githubLink}>
              <a target="_blank" rel="noreferrer">
                <CustomButton secondary onClick={() => googleAnalytics(title)}>
                  <GithubIcon class="image" stroke="currentColor" />
                  &nbsp;github
                </CustomButton>
              </a>
            </Link>
          </Box>

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
