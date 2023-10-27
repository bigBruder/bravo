//@ts-nocheck
// import React from "react";
import Button from "../../assets/icons/Contact/button.svg";
import useContentful from "../../hooks/useContentful";
import { FormId } from "../../constants";
import {
  SForm,
  SFormTitle,
  SInput,
  SInputMultiple,
  SButton,
  WhiteText, ErrorText, InputContainer,
} from "./form.styles";
import emailjs from '@emailjs/browser';
import {Formik} from "formik";

const Form = () => {
  const { data } = useContentful(FormId);

  return (
    <Formik
      initialValues={{ email: '', name: '', question: '' }}
      validateOnBlur={false}
      validateOnChange={false}
      validate={values => {
        const errors: {
          email?: string,
          name?: string,
          question?: string,
        } = {};
        if (!values.email) {
          errors.email = 'Insert your email address';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }

        if (!values.name) {
          errors.name = 'Insert your name';
        }

        if (!values.question) {
          errors.question = 'Insert your question';
        }

        return errors;
      }}
      onSubmit={async (values, { setSubmitting, setValues }) => {
        await emailjs.send("service_thqhlos","template_jd3ey7c",{
          name: values.name,
          email: values.email,
          question: values.question,
        }, 'uptzgkU1UJ-MG9LTL');

        setValues({
          name: '',
          email: '',
          question: '',
        });
        alert('Question was sent successfully');
      }}
    >
      {({
          values,
          errors,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
        <SForm onSubmit={handleSubmit}>
          <SFormTitle>
            {data?.title[0]} <WhiteText> {data?.title[1]}</WhiteText>
            {data?.title[2]}
          </SFormTitle>

          <InputContainer>
            <SInput
              name={'name'}
              placeholder={"Name"}
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <ErrorText>{errors.name}</ErrorText>}
          </InputContainer>

          <InputContainer>
            <SInput
              name={'email'}
              placeholder={"Email"}
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <ErrorText>{errors.email}</ErrorText>}
          </InputContainer>

          <InputContainer>
            <SInputMultiple
              name={'question'}
              placeholder={"Your Question"}
              value={values.question}
              onChange={handleChange}
            />
            {errors.question && <ErrorText>{errors.question}</ErrorText>}
          </InputContainer>

          <SButton type={'submit'}>
            <img src={Button} />
            {data?.button}
          </SButton>
    </SForm>
      )}
    </Formik>
  );
};

export default Form;
