import React, { useEffect, useState } from "react";
import { NavWrapper, Buttons, Name, Wrapper, ImageContainer } from "./style";
import { HeadingTwoText } from "common/typography/style";
import { CustomButton } from "common/buttons";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "assets";
import Links from "common/social-links";
const Nav = () => {
  const [stickyClass, setStickyClass] = useState("");
  const [hidden, setHidden] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      console.log(window.scrollY, "height");
      windowHeight > 350 ? setStickyClass("sticky-nav") : setStickyClass("");
      windowHeight > 350 ? setHidden("notHidden") : setHidden("hidden");
    }
  };
  return (
    <Wrapper>
      <NavWrapper className={`navbar ${stickyClass}`}>
        <Name>
          <Link href="#">
            <a>
              <HeadingTwoText className="name">
                PRAISE ADEOTI <span className="span">| FRONTEND ENGINEER</span>
              </HeadingTwoText>
            </a>
          </Link>
        </Name>
        <ImageContainer className={`${hidden}`}>
          <Links />
          <div className="image">
            <Image
              src={Logo}
              alt="my-picture"
              height={23}
              width={27}
              priority={true}
            />
          </div>
          <div className="layer"></div>
        </ImageContainer>
        <Buttons>
          <Link href="#projects">
            <a>
              <CustomButton secondary>PROJECTS</CustomButton>
            </a>
          </Link>
          <Link href="#bio">
            <a>
              <CustomButton secondary>BIO</CustomButton>
            </a>
          </Link>
          <Link href="#hire">
            <a>
              <CustomButton>HIRE PRAISE</CustomButton>
            </a>
          </Link>
        </Buttons>
      </NavWrapper>
    </Wrapper>
  );
};

export default Nav;
