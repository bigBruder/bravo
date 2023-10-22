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
  WhiteText,
} from "./form.styles";
const Form = () => {
  const { data } = useContentful(FormId);
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  return (
    <SForm onSubmit={handleSubmit}>
      <SFormTitle>
        {data?.title[0]} <WhiteText> {data?.title[1]}</WhiteText>
        {data?.title[2]}
      </SFormTitle>

      <SInput placeholder={"Name"} />
      <SInput placeholder={"Email"} />
      <SInputMultiple placeholder={"Your Question"} />
      <SButton>
        <img src={Button} />
        {data?.button}
      </SButton>
    </SForm>
  );
};

export default Form;
