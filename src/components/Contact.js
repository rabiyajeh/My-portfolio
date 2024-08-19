import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    subject: Yup.string().required('Required'),
    message: Yup.string().required('Required'),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    // Handle form submission logic here
    resetForm();
  };

  return (
    <ContactSection>
      <FormContainer>
        <FormSection>
          <h2>Contact Me</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {() => (
              <Form>
                <FormField>
                  <label htmlFor="name">Name</label>
                  <Field type="text" id="name" name="name" />
                  <ErrorMessage name="name" component="div" className="error" />
                </FormField>
                <FormField>
                  <label htmlFor="email">Email</label>
                  <Field type="email" id="email" name="email" />
                  <ErrorMessage name="email" component="div" className="error" />
                </FormField>
                <FormField>
                  <label htmlFor="subject">Subject</label>
                  <Field type="text" id="subject" name="subject" />
                  <ErrorMessage name="subject" component="div" className="error" />
                </FormField>
                <FormField>
                  <label htmlFor="message">Message</label>
                  <Field as="textarea" id="message" name="message" rows="5" />
                  <ErrorMessage name="message" component="div" className="error" />
                </FormField>
                <SubmitButton type="submit">Send Message</SubmitButton>
              </Form>
            )}
          </Formik>
        </FormSection>
        <ImageSection>
          <img src={`${process.env.PUBLIC_URL}/form-img.jpeg`} alt="Contact Us" />
        </ImageSection>
      </FormContainer>
    </ContactSection>
  );
};

export default Contact;

// Styled components
const neonAnimation = keyframes`
  0% {
    box-shadow: 0 0 5px #f39c12;
  }
  50% {
    box-shadow: 0 0 20px #f39c12;
  }
  100% {
    box-shadow: 0 0 5px #f39c12;
  }
`;

const ContactSection = styled.section`
  padding: 50px 20px;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  background: #f9f9f9;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: auto;
  overflow: hidden;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

  @media(min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  width: 100%;
  
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 0 0 15px 15px;

    @media(min-width: 768px) {
      border-radius: 0 15px 15px 0;
    }
  }
`;

const FormSection = styled.div`
  flex: 1;
  padding: 30px;
  width: 100%;
  background: #000;
  border-radius: 15px 15px 0 0;

  @media(min-width: 768px) {
    max-width: 600px;
    border-radius: 15px 0 0 15px;
  }

  h2 {
    text-align: center;
    color: #f39c12;
    margin-bottom: 30px;
    font-size: 2rem;
    text-shadow: 0 0 10px #f39c12;
  }
`;

const FormField = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    color: #f39c12;
  }

  input, textarea {
    width: 100%;
    padding: 12px;
    border: 2px solid #f39c12;
    border-radius: 5px;
    background: #333;
    color: #fff;
    font-size: 16px;
    transition: border 0.3s, box-shadow 0.3s;

    &:focus {
      outline: none;
      border-color: #f39c12;
      box-shadow: 0 0 10px #f39c12;
    }
  }

  .error {
    color: #e74c3c;
    margin-top: 5px;
  }
`;

const SubmitButton = styled.button`
  padding: 12px 25px;
  background-color: #f39c12;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 0 0 5px #f39c12;
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
  animation: ${neonAnimation} 1.5s infinite;

  &:hover {
    background-color: #e67e22;
    transform: scale(1.05);
    box-shadow: 0 0 15px #f39c12;
  }
`;
