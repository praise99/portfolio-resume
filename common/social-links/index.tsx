import React from "react";
import styled from "styled-components";
import { Twitter, Instagram, Linkedin } from "assets";
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
      <Link href="#">
        <a>
          <Image src={Twitter} alt="icon-links" />
        </a>
      </Link>
      <Link href="#">
        <a className="insta">
          <Image src={Instagram} alt="icon-links" />
        </a>
      </Link>
      <Link href="#">
        <a>
          <Image src={Linkedin} alt="icon-links" />
        </a>
      </Link>
    </LinksWrapper>
  );
};

export default Links;
