import styled from "styled-components";
interface AnimatedRoutesProps {}

export const Wrapper = styled.div<AnimatedRoutesProps>`
  /* scroll-snap-type: y proximity; */
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
  //
  scroll-behavior: smooth;
  @keyframes scroll {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100%);
    }
  }
  /* @media (max-width: 576px) {
    scroll-snap-type: none;
    overflow-y: scroll;

    height: 100%;
  } */

  /* @media (max-width: 768px) {
    scroll-snap-type: y mandatory;
    height: 100vh;
    height: 100%;
  } */
  @media (max-width: 1001px) {
    scroll-snap-type: none;
    overflow-y: hidden;
    height: 100%;
  }
  /* @media (max-width: 480px) {
    scroll-snap-type: none;
    overflow-y: hidden;
    height: 100%;
  } */
`;
export const ChildrenComponent = styled.div`
  position: relative;
  scroll-snap-type: y mandatory;
  scroll-snap-align: start;
  height: 100vh;
  /* @media (max-width: 768px) {
    height: 100%;
    scroll-snap-align: start;
    scroll-snap-type: none;
    overflow: auto;
  } */
  @media (max-width: 1001px) {
    scroll-snap-type: none;
    height: 100%;
    scroll-snap-align: none;
    overflow-y: hidden;
  }
  /* @media (max-width: 480px) {
    scroll-snap-type: none;
    scroll-snap-align: none;
    overflow-y: hidden;
  } */
`;
