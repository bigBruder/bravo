import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;

  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 40px;
  background-color: #000000;
`;

export const Video = styled.video`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  z-index: -1;
`;
