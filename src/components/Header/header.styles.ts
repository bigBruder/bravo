import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  gap: 20px;
  padding: 0 83px;
  align-items: center;
  height: 120px;
  width: 100%;
  z-index: 1000;

  justify-content: space-between;

  display: none;

  @media (min-width: 1500px) and (min-height: 800px) {
    display: flex;
  }
`;

export const SmallLogo = styled.img`
  /* width: 100%;
  height: 100%; */
  /* margin-left: 150px; */
  /* padding-right: 200px; */

  /* height: 337px; */
  width: 40px;
  height: 45px;
  /* width: 30%; */

  @media (max-width: 1100px) {
    width: 100%;
    max-width: 200px;
  }
`;

export const TextContainer = styled.div`
  position: relative;
`;

export const Text = styled.p`
  font-family: HandstaSignature, sans-serif;
  font-size: 96px;
  color: var(--text-header-over);
`;

export const TextOver = styled.p`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
  font-family: HandstaSignature, sans-serif;
  font-size: 90px;
  color: var(--text-header);
  z-index: 100;
`;

export const Button = styled.button`
  display: flex;
  width: 129px;
  height: 56px;
  /* min-height: 56px; */
  padding: 13px 24px;
  gap: 10px;
  color: #cda870;
  font-family: Quicksand, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  border: 1px solid var(--header-button-border);
  background: var(--header-button-border);
  img {
    width: 18px;
    height: 18px;
  }
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  }
`;

export const ButtonIcon = styled.img`
  width: 20px;
  height: 20px;
`;
