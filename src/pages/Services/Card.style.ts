import styled from "styled-components";
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding-top: 10px;
  align-items: center;
  justify-content: center;
  gap: 5px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const WrapperSmall = styled.div`
  display: none;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 10px;
  align-items: center;
  justify-content: center;
  gap: 5px;

  @media screen and (max-width: 768px) {
    display: grid;
    max-width: 400px;
  }
`;

export const GroupCardTop = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 33px;
  margin: 0;
  flex: 1 0 0;
  & img {
    width: 100%;
    max-width: 180px;
    aspect-ratio: 1/1;
    object-fit: cover;
  }
`;
export const GroupCardBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 33px;
  margin: 0;
  flex: 1 0 0;
  & img {
    width: 100%;
    max-width: 180px;
    aspect-ratio: 1/1;
    object-fit: cover;
  }
`;
