import styled from "styled-components";
interface DescriptionProps {
  parentbackgroundColor?: string;
}
export const Wrapper = styled.div<DescriptionProps>`
  display: flex;

  padding: 1.5% 2%;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
  border-radius: 15px;
  background: ${(props) =>
    props?.parentbackgroundColor === "white"
      ? "rgba(205, 168, 112, 0.10)"
      : "rgba(255, 255, 255, 0.1)"};
  backdrop-filter: blur(12.5px);

  color: ${(props) =>
    props.parentbackgroundColor === "white" ? "#164D59" : "#fff"};
  width: 80%;

  p {
    font-family: Quicksand;
    font-size: 0.95vw;
    font-style: normal;
    font-weight: 300;
    margin-top: 1vh;
    max-width: 75%;
  }
  @media (max-width: 480px) {
    display: flex;
    padding: 30px 15px;
    flex-direction: column;
    align-items: center;

    margin-top: 0px;

    width: 80%;
    p {
      color: #fff;
      text-align: center;
      font-family: Quicksand;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      margin-top: 0;
      max-width: 100%;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    padding: 30px 15px;
    flex-direction: column;
    align-items: center;

    margin-top: 0px;

    width: 80%;
    p {
      color: #fff;
      text-align: center;
      font-family: Quicksand;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      margin-top: 0;
      max-width: 100%;
    }
  }
  @media (max-width: 1300px) {
    display: flex;
    padding: 30px 15px;
    flex-direction: column;
    align-items: center;

    margin-top: 0px;

    width: 80%;
    p {
      color: #fff;
      text-align: center;
      font-family: Quicksand;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      margin-top: 0;
      max-width: 100%;
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  width: 10%;
  @media (max-width: 1300px) {
    display: none;
  }
`;

export const MobileIcon = styled.img`
  @media (min-width: 480px) {
    display: none;
  }
`;

export const Description = styled.p`
  text-align: center;
`;
