import styled from "styled-components";
interface AnimatedRoutesProps { }

export const Wrapper = styled.div<AnimatedRoutesProps>`
  /* scroll-snap-type: y proximity; */
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100vh;
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

  @media (max-width: 768px) or (max-height: 768px) {
    /* scroll-snap-type: y mandatory;
    scroll-snap-type: none;
    height: 100vh; */
    height: auto;
  }
`;
export const ChildrenComponent = styled.div`
  position: relative;
  scroll-snap-type: y mandatory;
  scroll-snap-align: start;
  height: 100vh;
  @media (max-width: 768px) or (max-height: 768px){
    height: 100%;
    /* scroll-snap-align: start;
    scroll-snap-type: none; */
    overflow: auto;
  }
  @media (max-width: 576px) {
    scroll-snap-align: none;
    scroll-snap-type: none;
    height: auto;
    overflow: auto;
  }

  /* @media (max-width: 768px) {
    scroll-snap-align: none;
    scroll-snap-type: none;
    height: 100%;
    overflow: auto;
  } */
`;
