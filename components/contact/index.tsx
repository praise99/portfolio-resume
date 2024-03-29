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
import * as emailjs from "emailjs-com";
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const templateParams = {
      from_name: email,
      user_name: name,
      to_name: "padeoti99@gmail.com",
      message: message,
    };
    emailjs
      .send(
        "service_zf7dv1d",
        "template_ffd3958",
        templateParams,
        "tsfN_i7jzAZ6vEZjH"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmail("");
          setMessage("");
          setName("");
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <Container title="hire praise" id="hire">
      <ContactWrapper>
        <ContactEmpty></ContactEmpty>
        <ContactForms onSubmit={handleSubmit}>
          <HeadingThreeText className="title">Contact Form</HeadingThreeText>
          <FormGroup>
            <label htmlFor="name">name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="email">email address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="message">message</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
