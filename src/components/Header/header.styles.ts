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

  @media (min-width: 1500px) {
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

export const Text = styled.img``;

export const Button = styled.button`
  display: flex;
  width: 129px;
  height: 56px;
  /* min-height: 56px; */
  padding: 13px 24px;
  gap: 10px;
  color: #cda870;
  font-family: Quicksand;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.15);
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
