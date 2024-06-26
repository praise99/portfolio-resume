import React, { useRef, useState } from "react";
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
import { Spinner } from "common/spinner";
import * as emailjs from "emailjs-com";
import { contactInformation } from "config/config";
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactInformation.EMAIL_ADDRESS,
      message: formData.message,
    };
    emailjs
      .send(
        contactInformation.SERVICE_ID,
        contactInformation.TEMPLATE_ID,
        templateParams,
        contactInformation.CONFIG_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          resetFormData();
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  const resetFormData = () => {
    setFormdata({
      email: "",
      name: "",
      message: "",
    });
  };
  const handleChange = (e: any) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
              required
              value={formData.name || ""}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="email">email address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email || ""}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="message">message</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <CustomButton
            disabled={
              loading || !formData.name || !formData.email || !formData.message
            }
          >
            {loading ? <Spinner /> : "Submit"}
          </CustomButton>
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
