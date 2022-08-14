import React from "react";
import Container from "common/container";
import {
  ContactWrapper,
  ContactEmpty,
  ContactForms,
  ContactInformation,
  FormGroup,
} from "./style";
import Link from "next/link";
import Image from "next/image";
import { CustomButton } from "common/buttons";
import { HeadingThreeText, SectionHeading } from "common/typography/style";
import Links from "common/social-links";
import { Logo } from "assets";
const Contact = () => {
  return (
    <Container title="hire praise">
      <ContactWrapper>
        <ContactEmpty></ContactEmpty>
        <ContactForms>
          <HeadingThreeText className="title">Contact Form</HeadingThreeText>
          <FormGroup>
            <label htmlFor="name">name</label>
            <input type="text" placeholder="Enter your name" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="email">email address</label>
            <input type="email" placeholder="Enter your email" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="message">message</label>
            <textarea name="message" placeholder="Enter your message" />
          </FormGroup>
          <CustomButton>Submit</CustomButton>
        </ContactForms>
        <ContactInformation>
          <div className="linking">
            <div className="image">
              <Image
                src={Logo}
                alt="my-picture"
                height={80}
                width={80}
                priority={true}
              />
            </div>
            <div className="layer"></div>
          </div>
          <div className="contact-links">
            <SectionHeading className="name">
              Praise Adeoti
              <br />—
              <br />
              <Link href="mailto:praiseadeoti99@gmail.com">
                <a>praiseadeoti99@gmail.com</a>
              </Link>
              <br />
              <Link href="tel:+234 811 205 4878">
                <a>+234 811 205 4878</a>
              </Link>
            </SectionHeading>
            <Links />
          </div>
        </ContactInformation>
      </ContactWrapper>
    </Container>
  );
};

export default Contact;
