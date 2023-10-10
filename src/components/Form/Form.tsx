// import React from "react";
import Button from "../../assets/icons/Contact/button.svg";

import {
  SForm,
  SFormTitle,
  SInput,
  SInputMultiple,
  SButton,
  WhiteText,
} from "./form.styles";
const Form = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  return (
    <SForm onSubmit={handleSubmit}>
      <SFormTitle>
        Still have <WhiteText> questions</WhiteText>?
      </SFormTitle>

      <SInput placeholder={"Name"} />
      <SInput placeholder={"Email"} />
      <SInputMultiple placeholder={"Your Question"} />
      <SButton>
        <img src={Button} />
        Send Message
      </SButton>
    </SForm>
  );
};

export default Form;
