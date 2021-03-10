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

const Input = styled.input``;

const Contact = () => {
  return (
    <ContactPage>
      <FormDesc>
        <ContactHeader>Contact Details</ContactHeader>
        <p>You can contact me via: </p>
        <p> +61 412 452 546 or</p> <p> richardsando369@gmail.com</p>
      </FormDesc>
      <FormContainer>
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" />
          </p>
          <p>
            <label for="email">Email</label>
            <input type="text" id="email" name="email" />
          </p>
          <p>
            <label for="message">Message</label>
            <textarea id="message" name="message"></textarea>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </FormContainer>
    </ContactPage>
  );
};

export default Contact;
