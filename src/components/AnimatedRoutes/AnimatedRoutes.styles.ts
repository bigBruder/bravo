import styled from "styled-components";
interface AnimatedRoutesProps {}
export const Wrapper = styled.div<AnimatedRoutesProps>`
  scroll-snap-type: y proximity;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
  @media (max-width: 576px) {
    scroll-snap-type: none;
    overflow-y: scroll;

    height: 100%;
  }
`;
export const ChildrenComponent = styled.div`
  position: relative;
  scroll-snap-type: y mandatory;
  scroll-snap-align: start;
  height: 100vh;
  @media (max-width: 768px) {
    height: 100%;
  }
  @media (max-width: 576px) {
    scroll-snap-align: none;
    scroll-snap-type: none;
    height: 100%;
    overflow: auto;
  }
`;