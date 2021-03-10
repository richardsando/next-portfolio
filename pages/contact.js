import Page from "../components/styled/Page";
import styled from "styled-components";
import { useState } from "react";

const FormDesc = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactHeader = styled.h1``;

const ContactPage = styled(Page)`
  background-color: rgba(10, 0, 36, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  display: block;
`;

const FormLabel = styled.p`
  font-weight: 600;
`;

const Form = styled.form`
  focus: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
`

const Contact = () => {
  return (
    <ContactPage>
      <FormDesc>
        <ContactHeader>Contact Details</ContactHeader>
        <p>You can contact me via: </p>
        <p> +61 412 452 546 or</p> <p> richardsando369@gmail.com</p>
      </FormDesc>
      <FormContainer>
        <Form name="contact" method="POST" data-netlify="true">
          <FormLabel>
            <Label for="name">Name</Label>
            <Input type="text" id="name" name="name" />
          </FormLabel>
          <FormLabel>
            <Label for="email">Email</Label>
            <Input type="text" id="email" name="email" />
          </FormLabel>
          <FormLabel>
            <Label for="message">Message</Label>
            <textarea id="message" name="message"></textarea>
          </FormLabel>
          <FormLabel>
            <button type="submit">Send</button>
          </FormLabel>
        </Form>
      </FormContainer>
    </ContactPage>
  );
};

export default Contact;
