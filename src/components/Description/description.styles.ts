import styled from "styled-components";
interface DescriptionProps {
  parentBackgroundColor?: string;
}
export const Wrapper = styled.div<DescriptionProps>`
  display: flex;
  padding: 30px 60px;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
  border-radius: 15px;
  background: ${(props) =>
    props?.parentBackgroundColor === "white"
      ? "rgba(205, 168, 112, 0.10)"
      : "rgba(255, 255, 255, 0.1)"};
  backdrop-filter: blur(12.5px);
  margin-top: 100px;
  gap: 150px;

  width: 80%;
  font-family: Quicksand;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  @media (max-width: 1600px) {
    width: 80%;
    height: 70px;
    margin-top: 10px;
    gap: 100px;
    font-size: 14px;
  }

  color: ${(props) =>
    props.parentBackgroundColor === "white" ? "#164D59" : "#fff"};

  @media (max-width: 1300px) {
    font-size: 14px;
  }
  @media (max-width: 1000px) {
    font-size: 12px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  width: 10%;
`;
