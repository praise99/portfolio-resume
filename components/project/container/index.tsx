import React, { useEffect } from "react";
import Container from "common/container";
import {
  ProjectWrapper,
  ProjectDescription,
  Tag,
  TagFolder,
  ProjectImage,
  Box,
} from "./style";
import { HeadingTwoText, SectionHeading } from "common/typography/style";
import { CustomButton } from "common/buttons";
import Link from "next/link";
import Image from "next/image";
import { gsap, Power2 } from "gsap";
import { GithubFull, Global, Laptop, IphoneMusic } from "assets";
import { GlobalIcon } from "../assets/global";
import { GithubIcon } from "../assets/github";
import styled from "styled-components";

interface ContainerProps {
  title: string;
  description: string;
  link: string;
  projects: string[];
  githubLink: string;
  laptopImage: string;
  mobileImage: any;
  ipadImage: any;
}
const ImageContainer = styled.div<any>`
  background-image: ${({ laptopImage }) => `url(${laptopImage})`};
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  opacity: 1;
  transform-style: preserve-3d;
  position: relative;
  z-index: 2;
  overflow: hidden;
  width: 540px;
  height: 320px;
  margin-right: auto;
  margin-left: auto;
  border-style: solid;
  border-width: 8px;
  border-color: #001a1d;
  border-radius: 12px;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 0 24px 0 rgb(0 26 29 / 50%);
  @media (max-width: ${({ theme }) => theme.responsive.mb}) {
    width: 100%;
    visibility: hidden;
  }
  :hover {
    background-color: #222;
  }
`;
const Featured = ({
  title,
  description,
  link,
  projects,
  githubLink,
  laptopImage,
  mobileImage,
  ipadImage,
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
                  <GlobalIcon className="image" stroke="currentColor" />
                  &nbsp;website
                </CustomButton>
              </a>
            </Link>
            {githubLink !== "#" && (
              <Link href={githubLink}>
                <a target="_blank" rel="noreferrer" className="button-space2">
                  <CustomButton
                    secondary
                    onClick={() => googleAnalytics(title)}
                  >
                    <GithubIcon className="image" stroke="currentColor" />
                    &nbsp;github
                  </CustomButton>
                </a>
              </Link>
            )}
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
              <ImageContainer laptopImage={laptopImage}>
                <div className="inner-image"></div>
                <div className="image-overlay">
                  <div className="inner-overlay-view"></div>
                </div>
              </ImageContainer>
              <div className="first-image">
                <Image
                  src={ipadImage}
                  alt="project-image"
                  width={200}
                  height={259}
                />
              </div>
              <div className="second-image">
                <Image
                  src={mobileImage}
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
