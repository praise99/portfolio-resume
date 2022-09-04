import React from "react";
import { HeroWrapper, FirstCard, SecondCard, ThirdCard } from "./style";
import { HeadingOneText } from "common/typography/style";
import Links from "common/social-links";
import Image from "next/image";
import { Logo } from "assets";
import Link from "next/link";
import { CustomButton } from "common/buttons";
const Hero = () => {
  return (
    <HeroWrapper>
      <FirstCard>
        <SecondCard>
          <ThirdCard>
            <div className="hero_title">
              <HeadingOneText>
                The portfolio site to make your friends jealous.
              </HeadingOneText>
            </div>
            <div className="hero_description">
              <div className="linking">
                <Links />
                <div className="image">
                  <Image
                    src={Logo}
                    alt="my-picture"
                    height={80}
                    width={80}
                    priority={true}
                  />
                </div>
                <div className="image-hidden">
                  <Image
                    src={Logo}
                    alt="my-picture"
                    height={40}
                    width={40}
                    priority={true}
                  />
                </div>
                <div className="layer"></div>
              </div>
              <div className="button-hidden">
                <Link href="#hire">
                  <a>
                    <CustomButton>HIRE PRAISE</CustomButton>
                  </a>
                </Link>
              </div>
            </div>
          </ThirdCard>
        </SecondCard>
      </FirstCard>
    </HeroWrapper>
  );
};

export default Hero;
