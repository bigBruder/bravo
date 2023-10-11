import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  z-index: 10000;
  height: 120px;
  width: 100%;
  
  gap: 20px;
  
  padding: 0 83px;
  
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const Triangle = styled.div`
  position: relative;
  transform: scale(var(--ggs,1));
  width: 23px;
  height: 21px;
  border-left: 3px solid transparent;
  border-bottom: 1px solid #9799AC;

  display: block;
  box-sizing: border-box;
  border-right: 1px solid transparent;
  
  rotate: 180deg;
  
  &:before {
    display: block;
    box-sizing: border-box;
    border-right: 1px solid transparent;

    content: "";
    position: absolute;
    width: 21px;
    height: 21px;
    border-left: 1px solid #9799AC;
    border-top: 1px solid #9799AC;
    border-bottom: 1px solid transparent;
    transform: rotate(45deg) skew(10deg,10deg);
    left: -2px;
    bottom: -11px;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-grow: 1;
`;

export const Line = styled.div`
  flex-grow: 1;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.10);
`;

export const BallsContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const Ball = styled.div`
  height: 4px;
  width: 4px;
  background-color: rgba(0, 0, 0, 0.10);
  border-radius: 50%;
`;
