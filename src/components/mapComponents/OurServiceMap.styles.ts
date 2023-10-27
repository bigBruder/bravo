import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 6.5vw;
  max-width: 320px;
  margin: 0 auto;
  
  align-items: center;
`;

export const Image = styled.img`
  display: block;
  max-width:120px;
  max-height:120px;
  width: auto;
  height: auto;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding-block: 13px;
`;

export const Title = styled.h2`
  font-family: Gwen-Trial;
  font-size: 16px;
  font-weight: 650;
  line-height: 24px;
  text-align: center;
  color: #164d59;
`;

export const Discription = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #9799ac;
`;
