import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  z-index: 10000;
  height: 120px;

  img {
    width: 100%;
  }
  @media (max-width: 1500px) {
    display: none;
  }
`;

/* export const CenterIcon = styled.div`
  border-radius: 20px;
  border: 1px solid #9799ac;
  width: 19px;
  height: 30px;
`; */
// export const SearchVector = styled.div`
//   width: 25px;
//   height: 25px;
// `;
