import styled from "styled-components";
import { Laptop } from "../../../assets";
const ProjectWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    flex-direction: column;
  }
`;
const ProjectDescription = styled.div`
  width: 40%;
  padding: 40px;
  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.responsive.mb}) {
    padding: 20px;
  }
  .description {
    max-width: 100%;
    margin-bottom: 40px;
    line-height: 28px;
    font-size: ${({ theme }) => theme.fontSize.x20};
    @media (max-width: ${({ theme }) => theme.responsive.mb}) {
      font-size: ${({ theme }) => theme.fontSize.x16};
      line-height: 24px;
    }
  }
`;
const ProjectImage = styled.div`
  width: 60%;
  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    width: 100%;
    margin-bottom: 20px;
  }
  .image-link {
    position: relative;
    width: 100%;
    margin-right: 0px;
    margin-left: 0px;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    border-bottom: 1px none #000;
    border-right-style: none;
    border-left-style: none;
    text-align: center;
    padding: 24px;
    max-width: 100%;
    display: inline-block;
    transition: color 200ms ease;
    color: #00ffd0;
    text-decoration: none;
    background-color: transparent;
    @media (max-width: ${({ theme }) => theme.responsive.mb}) {
      padding: 0px;
    }
    @media (max-width: ${({ theme }) => theme.responsive.verySmall}) {
      display: none;
      padding: 0px;
    }
  }
  .image-container {
    background-image: url("/images/Laptop-music.jpg");
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

    :hover {
      background-color: #222;
    }
  }
  .inner-image {
    height: auto;
    width: 100%;
    opacity: 0.7;
    position: absolute;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    background-color: #005963;

    :hover {
      background-color: #005963;
    }
  }
  .image-overlay {
    height: 24px;
    width: 0%;
    position: absolute;
    left: 12px;
    right: auto;
    bottom: 12px;
    display: flex;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    border-radius: 12px;
    background-color: #00ffd0;
    transition: color 200ms ease;
    text-decoration: none;
  }
  .inner-overlay-view {
    opacity: 0;
    transform: translate3d(25px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    z-index: 9;
    min-width: 150px;
    margin-right: 16px;
    margin-left: 16px;
    -webkit-box-flex: 0;
    flex: 0 0 auto;
    font-family: Lato, sans-serif;
    color: #005963;
    font-size: 10px;
    line-height: 20px;
    font-weight: 700;
    letter-spacing: 6px;
    text-decoration: none;
    text-transform: uppercase;
  }
  .first-image {
    opacity: 1;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    position: absolute;
    right: 24px;
    bottom: 12px;
    z-index: 3;
    width: 200px;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
  }
  .second-image {
    opacity: 1;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    position: absolute;
    right: 200px;
    bottom: 0px;
    z-index: 5;
    width: 100px;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
  }
`;
const TagFolder = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const Tag = styled.div`
  text-transform: lowercase;
  display: inline-block;
  margin-right: 8px;
  margin-bottom: 12px;
  padding: 2px 8px;
  letter-spacing: 2.5px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.highlightColor};
  color: ${({ theme }) => theme.colors.backgroundColor};
  font-size: ${({ theme }) => theme.fontSize.x12};
  line-height: 16px;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.responsive.verySmall}) {
    flex-direction: column;
  }

  .button-space {
    margin-right: 16px;
  }
`;
export {
  ProjectWrapper,
  ProjectDescription,
  ProjectImage,
  TagFolder,
  Tag,
  Box,
};
