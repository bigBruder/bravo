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
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12.5px);
  @media (max-width: 768px) {
    padding: 15px;
    width: 300px;
    margin-bottom: 50px;
  }
  @media (max-width: 480px) {
    background: none;
    width: 240px;
  }
`;

export const SFormTitle = styled.text`
  color: #cda870;
  font-family: Gwen-Trial;
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
`;

export const SInput = styled.input`
  outline: 0px;

  display: flex;
  padding: 1.3vh 1vw;
  width: 273px;
  height: 60px;
  align-items: flex-start;
  gap: 20px;
  border: 1px solid #9799ac;
  border-radius: 15px;
  background: rgba(251, 253, 252, 0.05);
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
`;

export const SInputMultiple = styled.input`
  display: flex;
  padding: 2vh;
  width: 273px;
  height: 12vh;
  align-items: start;
  gap: 20px;
  border: 1px solid #9799ac;
  @media (max-width: 1200px) {
    width: 240px;
    height: 130px;
  }

  border-radius: 15px;
  background: rgba(251, 253, 252, 0.05);

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
`;

export const SButton = styled.button`
  display: flex;
  padding: 20px 36px;
  align-items: center;
  gap: 12px;
  border: none;
  border-radius: 15px;
  background: #cda870;
  color: #272727;
  font-family: Quicksand;
  font-size: 1.5vh;
  font-style: normal;
  font-weight: 600;
  font-size: 1.7vh;
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
    padding: 10px 24px;
  }
  img {
    width: 15%;
  }
`;

export const WhiteText = styled.text`
  color: #fff;
`;
