import Page from "../components/styled/Page";
import styled from "styled-components";
import {useState} from 'react'

const FormDesc = styled.div``;

const ContactPage = styled(Page)`
  background-color: rgba(10, 0, 36, 0.3);
`

const Contact = () => {
  
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
           <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email address"
          />


          <label htmlFor="subject">Subject</label>
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
