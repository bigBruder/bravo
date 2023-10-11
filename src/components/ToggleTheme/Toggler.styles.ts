// import React from "react";

import styled from "styled-components";
export const Button = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10000;

  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  border: solid gray;
  /* font-size: 0.8rem; */
  padding: 0.6rem;
  background: var(--color-fg);
  @media (max-width: 1100px) {
    display: none;
  }
`;
export const Icon = styled.img`
  width: 5%;
`;
