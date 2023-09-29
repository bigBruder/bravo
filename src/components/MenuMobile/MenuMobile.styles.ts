import styled, { keyframes } from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  transform: scale(2);
  overflow: hidden;
`;
export const Video = styled.video`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: -1;
`;

export const ActionsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 34px;
`;

const slideIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: ${slideIn} 1s;
`;