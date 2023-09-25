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
  /* margin-top: 100px; */
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
    /* @media (max-width: 1600px) {
      gap: 100px;
    } */
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  width: 10%;
`;
