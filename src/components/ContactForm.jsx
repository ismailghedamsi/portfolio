import React, { useEffect, useRef, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ParticleEffectButton from 'react-particle-effect-button';
import ParticlesContainer from './ParticleContainer';
import styled, { keyframes } from 'styled-components';
import emailjs from 'emailjs-com';



const FormContainer = styled.div`
position: relative;
max-width: 500px; // Same width as your form for alignment
margin: 0 auto; // Center the wrapper
z-index: 1; // Make sure it's on top
`;


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const StyledContactForm = styled(Form)`
  font-size: 1rem;
  margin: 1rem auto; // Center the form
  padding: 2rem;
  max-width: 500px; // Set a max-width for larger screens
  background-color: #f2f2f2; // Light background color
  border-radius: 8px; // Rounded corners
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Subtle shadow
  border: none;
  animation: ${fadeIn} 0.5s ease-out forwards;

  input, textarea {
    width: 100%; // Full-width form fields
    padding: 10px;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    background-color: #007bff; // Button color
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3; // Darker color on hover
    }
  }
`;


const StyledInput = styled(Field)`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
`;

const StyledLabel = styled.label`
  margin-top: 10px;
`;

const StyledErrorMessage = styled.div`
  color: red;
  font-size: 0.8em;
`;

const SuccessMessage = styled.div`
  color: green;
  font-size: 1.2em;
  margin-top: 20px;
`;


const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [buttonHidden, setButtonHidden] = useState(false);

  const initialValues = { from_name: '', email: '', message: '' };
  const form = useRef();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string().required('Required'),
  });



  const sendEmail = (values, actions) => {
    console.log(values);
    const templateParams = {
      from_name: values.from_name,
      to_name: 'Ismail Ghedamsi',
      user_email: values.email,
      message: values.message,
    };
  
    emailjs.send('service_b7buwxz', 'template_dp0u1ze', templateParams, 'dpu079tdZgXB5-W8C')
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        actions.setSubmitting(false);
        actions.resetForm();
        setFormSubmitted(true);
        setButtonHidden(true);
        setTimeout(() => {
          setFormSubmitted(false);
          setButtonHidden(false);
        }, 5000); // Reset after 5 seconds
      }, error => {
        console.log('FAILED...', error);
        actions.setSubmitting(false);
      });
  };
  

  return (
    <FormContainer>
      <ParticlesContainer initial={true} />
      <Formik
        forwardRef={form}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={sendEmail}
      >
        {({ isSubmitting }) => (
          <StyledContactForm>
            <h2>Contact form</h2>
            <StyledLabel htmlFor="from_name">Name</StyledLabel>
            <StyledInput id="name" type="text" name="from_name" />
            <ErrorMessage name="from_name" component={StyledErrorMessage} />

            <StyledLabel htmlFor="email">Email</StyledLabel>
            <StyledInput id="email" type="email" name="email" />
            <ErrorMessage name="email" component={StyledErrorMessage} />

            <StyledLabel htmlFor="message">Message</StyledLabel>
            <Field id="message" as="textarea" name="message" />
            <ErrorMessage name="message" component={StyledErrorMessage} />

            <button type="submit" disabled={isSubmitting}>
              Send
            </button>
          </StyledContactForm>
        )}
      </Formik>
      {formSubmitted && (
        <ParticleEffectButton
          color='#121019'
          hidden={buttonHidden}
        >
          <SuccessMessage>Form submitted successfully!</SuccessMessage>
        </ParticleEffectButton>
      )}
    </FormContainer>
  );
};

export default ContactForm;
