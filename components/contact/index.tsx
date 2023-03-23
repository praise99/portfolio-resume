import React, { useState } from "react";
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
import { Spinner, GeneralSpinner } from "common/spinner";
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {
    setLoading(true);
    setTimeout(function () {
      setLoading(false);
    }, 2000); //wait 2 seconds
  };
  return (
    <Container title="hire praise" id="hire">
      <ContactWrapper>
        <ContactEmpty></ContactEmpty>
        <ContactForms
          onSubmit={handleSubmit}
          action="https://formsubmit.co/912014b48c97a7093f3cf3f13aef1e31"
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            value="PORTFOLIO SUBMISSION"
          ></input>
          <input type="hidden" name="_captcha" value="false"></input>
          <input type="hidden" name="_template" value="table"></input>
          <HeadingThreeText className="title">Contact Form</HeadingThreeText>
          <FormGroup>
            <label htmlFor="name">name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="email">email address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="message">message</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              required
            />
          </FormGroup>
          <CustomButton>{loading ? <Spinner /> : "Submit"}</CustomButton>
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
