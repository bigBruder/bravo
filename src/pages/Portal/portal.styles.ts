import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  video {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Container = styled.div`
  flex-direction: column;
  align-items: center;
  z-index: 1;
  width: 100%;
  /* padding: 30px 70px; */
  padding: 30px 70px 0px 0px;
`;

export const MainContent = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex: 1 0 0;
  align-self: stretch;
`;
