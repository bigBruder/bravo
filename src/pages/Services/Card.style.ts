import styled from "styled-components";
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
  @media (min-width: 1500px) {
    height: 70vh;
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
  gap: 15px;
  padding-left: 7.5px;
  padding-right: 7.5px;
  & img {
    width: 100%;
    max-width: 180px;

    /* max-width: 250px; */
    aspect-ratio: 1/1;
    @media (min-width: 1600px) {
      max-width: 222px;
    }
    @media (min-width: 1700px) {
      max-width: 240px;
    }
  }
  @media (min-width: 1500px) {
    margin-bottom: 50px;
  }
`;
export const GroupCardBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 33px;
  margin: 0;
  gap: 15px;
  flex: 1 0 0;
  padding-left: 7.5px;
  padding-right: 7.5px;
  & img {
    width: 100%;
    max-width: 180px;

    /* max-width: 250px; */
    aspect-ratio: 1/1;
    @media (min-width: 1600px) {
      max-width: 222px;

      /* padding-top: 5px; */
      /* padding-top: 10px; */
      /* padding-bottom: 33px; */
    }
    @media (min-width: 1700px) {
      max-width: 240px;
    }
  }
  @media (min-width: 1500px) {
    margin-top: 50px;
  }
`;
