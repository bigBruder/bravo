import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  padding: 25px 0;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  gap: 30px;
  padding-left: 15px;
`;

export const ArrowField = styled.div`
  display: flex;
  padding-top: 6px;
  justify-content: center;
  align-items: flex-start;
  gap: 2px;
`;

export const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;

export const Text = styled.div`
  color: #9799ac;
  font-family: "Quicksand", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  &:hover,
  &:focus {
    color: palevioletred;
    cursor: pointer;
  }
  &:active {
    color: red;
  }
`;
