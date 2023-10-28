import styled from "styled-components";

export const SForm = styled.form`
  display: flex;
  padding: 3%;
  /* margin-top: 10vh; */
  /* margin-left: 45vw; */
  flex-direction: column;
  align-items: center;
  gap: 2vh;
  border-radius: 20px;
  background: var(--contact-us-input-background);
  backdrop-filter: blur(12.5px);
  @media (max-width: 768px) {
    padding: 15px;
    width: 300px;
    margin-bottom: 50px;
  }
  @media (max-width: 480px) {
    background: none;
    width: 300px;
    gap: 20px;
    padding: 5px 0px 0px 0px;
    margin-bottom: 0px;
  }
`;

export const SFormTitle = styled.text`
  color: var(--contact-us-input-title-left);
  font-family: Gwen-Trial, sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 650;
  line-height: 35px;
  @media (max-width: 768px) {
    font-size: 23px;
    font-style: normal;
    font-weight: 650;
    line-height: 30px;
  }
  @media (max-width: 480px) {
    text-align: center;
    font-family: Gwen-Trial;
    font-size: 23px;
    font-style: normal;
    font-weight: 650;
    line-height: 30px;
    margin-bottom: 10px;
  }
`;

export const SInput = styled.input`
  outline: 0px;
  width: 100%;
  display: flex;
  padding: 1.3vh 1vw;
  width: 273px;
  height: 60px;
  align-items: flex-start;
  gap: 20px;
  border: 1px solid var(--contact-us-input-border);
  border-radius: 15px;
  background: var(--contact-us-field-background);
  @media (max-width: 1200px) {
    width: 240px;
    height: 50px;
  }

  &:hover {
    outline: none;
    box-shadow: 0px 0px 3px #61c5fa;
    border: 1px solid #fff;
    border-radius: 15;
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 3px #61c5fa;
    border: 1px solid #fff;
    border-radius: 15;
  }

  color: #9799ac;
  font-family: Quicksand;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  @media (max-width: 480px) {
    display: flex;
    height: 50px;
    width: 100%;
    padding: 0px 15px;
    align-items: center;
    align-self: stretch;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

export const SInputMultiple = styled.textarea`
  padding: 2vh 2vh 10vh 2vh;
  width: 273px;
  gap: 20px;
  border: 1px solid var(--contact-us-input-border);
  resize: none;
  
  @media (max-width: 1200px) {
    width: 240px;
    height: 130px;
  }
  
  border-radius: 15px;
  background: var(--contact-us-field-background);

  &:hover {
    outline: none;
    box-shadow: 0px 0px 3px #61c5fa;
    border: 1px solid #fff;
    border-radius: 15;
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 3px #61c5fa;
    border: 1px solid #fff;
    border-radius: 15;
  }

  color: #9799ac;
  font-family: Quicksand, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  @media (max-width: 480px) {
    display: flex;
    height: 130px;
    width: 300px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    border-radius: 10px;
    backdrop-filter: blur(12.5px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

export const SButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 20px 36px;
  align-items: center;
  gap: 12px;
  border: none;
  border-radius: 15px;
  background: #cda870;
  color: #272727;
  font-family: Quicksand, sans-serif;
  width: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  transition: transform 0.3s;
  &:hover {
    background-color: #b39362;
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
    background: rgba(255, 255, 255, 0.5);
  }
  @media (max-width: 1600px) {
    padding: 15px 30px;
  }
  img {
    width: 10%;
  }
  @media (max-width: 480px) {
    margin-top: 10px;
    color: #272727;

    font-family: Quicksand, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
`;

export const WhiteText = styled.text`
  color: var(--contact-us-input-title-right);
`;

export const ErrorText = styled.p`
  position: absolute;
  font-family: Quicksand, sans-serif;
  font-size: 10px;
  font-style: normal;
  color: #f44f70;
  margin-left: 10px;
`;

export const InputContainer = styled.div`
  position: relative;
  
  @media (max-width: 480px) {
    width: 300px;
  }
`;
