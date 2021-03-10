import Page from "../components/styled/Page";
import styled from "styled-components";
// import TextareaAutosize from 'react-autosize-textarea'
import {useState} from 'react'

const FormDesc = styled.p``;

const ContactPage = styled(Page)`
  background-color: rgba(10, 0, 36, 0.3);
`

const Contact = () => {
  // const [formButtonDisable, setFormButton] =
  
  return (
    <ContactPage>
      <FormDesc>
        <h1>Contact Details</h1>
        <p>You can send me a message directly here:</p>
        <p>Or contact me on +61 412 452 546 or @ richardsando369@gmail.com</p>
      </FormDesc>
      <div className="container">
        <form action="action_page.php">
          <label htmlFor="fname">Name</label>
          <input
            type="text"
            id="name"
            name="firstname"
            placeholder="Your name.."
          />
           <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email address"
          />


          <label for="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Your message.."
            // style="height:200px"
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </ContactPage>
  );
};

export default Contact;
