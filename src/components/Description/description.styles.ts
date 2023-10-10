import styled from "styled-components";
interface DescriptionProps {
  parentbackgroundColor?: string;
}
export const Wrapper = styled.div<DescriptionProps>`
  display: flex;

  width: 55vw;
  height: 13vh;

  /* padding: 1.5% 2%; */
  padding: 20px 20px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  /* flex: 1 0 0; */
  border-radius: 15px;
  background: var(--portal-backgroundColor);
  backdrop-filter: blur(12.5px);

  p {
    color: var(--portal-textQuotesColor);
    font-family: Quicksand;
    font-size: 0.95vw;
    font-style: normal;
    text-align: center;
    font-weight: 400;
    /* margin-top: 1vh; */
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
`;

export const QuoteIconLight = styled.img`
  display: var(--quotes-iconLight);
`;
export const QuoteIconDark = styled.img`
  display: var(--quotes-iconDark);
`;
