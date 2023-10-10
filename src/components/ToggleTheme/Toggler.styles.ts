// import React from "react";

import styled from "styled-components";
export const Button = styled.button`
  position: absolute;
  z-index: 10000;
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
`;
