import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  video {
    height: 100vh;
    width: 100vw;
    object-fit: cover;
  }
`;

export const Container = styled.div`
  position: absolute;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  /* padding: 30px 70px; */
  padding: 30px 70px 0px 0px;
`;

export const ContentWrapper = styled.div`
  display: flex;
`;
