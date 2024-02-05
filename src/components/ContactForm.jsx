import React, { useEffect, useRef, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ParticlesContainer from './ParticleContainer';
import styled, { keyframes } from 'styled-components';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';


const FormContainer = styled.div`
position: relative;
max-width: 500px; // Same width as your form for alignment
margin: 0 auto; // Center the wrapper
z-index: 2; 
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

const borderRotate = keyframes`
  100% {
    --angle: 420deg;
  }
`;

const StyledContactForm = styled(Form)`

  font-size: 1rem;
  margin: 1rem auto; // Center the form
  padding: 2rem;
  max-width: 500px; // Set a max-width for larger screens
  background-color: #FFA500; // Light background color
  border-radius: 8px; // Rounded corners
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Subtle shadow
  border: none;
  animation: ${fadeIn} 0.5s ease-out forwards;


  font-size: 1rem;
margin: 1rem auto;
padding: 2rem;
max-width: 500px;
border: 0.35rem solid;
border-radius: 8px;
border-image: conic-gradient(from var(--angle), rgba(168, 239, 255, 0.1), rgba(168, 239, 255, 1) 0.1turn, rgba(168, 239, 255, 1) 0.15turn, rgba(168, 239, 255, 0.1) 0.25turn) 30;
animation: ${borderRotate} 2500ms linear infinite forwards;
--angle: 90deg;
background-color: #f2f2f2; // Light background color
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Subtle shadow

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
  const {t} = useTranslation();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [buttonHidden, setButtonHidden] = useState(false);

  const initialValues = { from_name: '', email: '', message: '' };
  const form = useRef();

  const validationSchema = Yup.object().shape({
    from_name: Yup.string().required(t('contactForm.validation.name_required')).min(2, t('contactForm.validation.name_min')),
    email: Yup.string()
    .email(t('contactForm.validation.email_invalid'))
    .required(t('contactForm.validation.email_required')),
    message: Yup.string()
    .required(t('contactForm.validation.message_required'))
    .min(20, t('contactForm.validation.message_min'))
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
            <h2>{t('contactForm.title')}</h2>
            <StyledLabel htmlFor="from_name">{t('contactForm.nameLabel')}</StyledLabel>
            <StyledInput id="name" type="text" name="from_name" />
            <ErrorMessage name="from_name" component={StyledErrorMessage} />

            <StyledLabel htmlFor="email">{t('contactForm.emailLabel')}</StyledLabel>
            <StyledInput id="email" type="email" name="email" />
            <ErrorMessage name="email" component={StyledErrorMessage} />

            <StyledLabel htmlFor="message">{t('contactForm.messageLabel')}</StyledLabel>
            <Field id="message" as="textarea" name="message" />
            <ErrorMessage name="message" component={StyledErrorMessage} />

            <button type="submit" disabled={isSubmitting}>
              {t('contactForm.submitButton')}
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
