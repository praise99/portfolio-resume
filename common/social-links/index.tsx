import React from "react";
import styled from "styled-components";
import { Twitter, Github, Linkedin } from "assets";
import Image from "next/image";
import Link from "next/link";
const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  .insta {
    margin: 0px 15px;
  }
`;
const Links = () => {
  return (
    <LinksWrapper>
      <Link href="https://github.com/praise99">
        <a target="_blank">
          <Image src={Github} alt="icon-links" />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/praise-adeoti-ab6b03190/">
        <a target="_blank" className="insta">
          <Image src={Linkedin} alt="icon-links" />
        </a>
      </Link>
      <Link href="https://twitter.com/yemi_obukunmi">
        <a target="_blank">
          <Image src={Twitter} alt="icon-links" />
        </a>
      </Link>
    </LinksWrapper>
  );
};

export default Links;
