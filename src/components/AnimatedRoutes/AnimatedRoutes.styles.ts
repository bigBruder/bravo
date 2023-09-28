import styled from "styled-components";
interface AnimatedRoutesProps {}
export const Wrapper = styled.div<AnimatedRoutesProps>`
  scroll-snap-type: y proximity;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
  @media (max-width: 480px) {
    scroll-snap-type: none;
    overflow-y: scroll;

    height: 100%;
  }
`;
export const ChildrenComponent = styled.div`
  position: relative;
  scroll-snap-align: start;
  height: "100vh";
  @media (max-width: 480px) {
    scroll-snap-align: none;
    height: 100%;
  }
`;
