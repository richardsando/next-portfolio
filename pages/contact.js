import Page from "../components/styled/Page";
import styled from "styled-components";

const FormDesc = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.3rem;
  /* margin: auto; */
  text-align: center;
  line-height: 1.5;
`;

const ContactPage = styled(Page)`
  background-color: rgba(10, 0, 36, 0.3);
  border-radius: 45px;
  border: solid 2px #ff9577;
  width: 600px;
  padding: 0;
  margin: 2rem auto;
`;

const Label = styled.label`
  font-size: 1.8rem;
  color: #ff9577;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 500px;
  height: 40px;
  outline: none;
  font-size: 2rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  color: white;
`;

const Button = styled.button`
  background: none;
  color: white;
  border: none;
  font-size: 2rem;
  &:hover {
    cursor: pointer;
    color: #ff9577;
  }
`;

const FormWrapper = styled.p`
  margin: 0.5rem;
`;

const TextArea = styled.textarea`
  width: 500px;
  height: 100px;
  outline: none;
  font-size: 1.8rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  color: white;
`;

const Contact = () => {
  return (
    <ContactPage>
      <FormDesc>
        <p>
          You can contact me via: <br />
          +61 412 452 546 <br /> richardsando369@gmail.com <br /> or send a message below!
        </p>
      </FormDesc>

      <Form name="contact" method="POST" action="/success" data-netlify="true">
        <Input type="hidden" name="form-name" value="contact" />
        <FormWrapper>
          <Label htmlFor="name">Name</Label> <br />
          <Input type="text" id="name" name="name" />
        </FormWrapper>
        <FormWrapper>
          <Label htmlFor="email">Email</Label> <br />
          <Input type="text" id="email" name="email" />
        </FormWrapper>
        <FormWrapper>
          <Label htmlFor="message">Message</Label> <br />
          <TextArea id="message" name="message"></TextArea>
        </FormWrapper>
        <FormWrapper>
          <Button type="submit">Send</Button>
        </FormWrapper>
      </Form>
    </ContactPage>
  );
};

export default Contact;
