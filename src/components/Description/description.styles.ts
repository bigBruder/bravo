import styled from "styled-components";
interface DescriptionProps {
  parentbackgroundColor?: string;
  backgroundColor?: string;
  textColor?: string;
}
export const Wrapper = styled.div<DescriptionProps>`
  display: flex;

  width: 55vw;
  // height: 13vh;

  /* padding: 1.5% 2%; */
  padding: 20px 20px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  /* flex: 1 0 0; */
  border-radius: 15px;
  background: ${(props) => props.backgroundColor};
  backdrop-filter: blur(12.5px);

  p {
    color: ${(props) => props.textColor};
    font-family: Quicksand;
    // font-size: 0.95vw;
    font-style: normal;
    text-align: center;
    font-weight: 400;
    /* margin-top: 1vh; */
    max-width: 90%;
  }
  @media (max-width: 480px) {
    display: flex;
    padding: 30px 15px;
    flex-direction: column;
    align-items: center;

    margin-top: 0px;

    width: 80%;
    p {
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
    max-width: 55vw;
    height: auto;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
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
  white-space: pre-line;
`;

export const QuoteIconLight = styled.img<{
  display: string;
}>`
  display: ${(props) => props.display};
`;
export const QuoteIconDark = styled.img<{
  display: string;
}>`
  display: ${(props) => props.display};
`
