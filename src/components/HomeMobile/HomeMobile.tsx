//@ts-nocheck
import * as Styled from "./HomeMobile.styles";
import { useEffect, useState } from "react";
import burger from "./../../assets/icons/burger.svg";
import burgerClose from "./../../assets/icons/burger_close.svg";
import logo from "./../../assets/icons/logo.svg";
import user from "./../../assets/icons/user.svg";
import userOctagon from "./../../assets/icons/user-octagon.svg";
import videoOctagon from "./../../assets/icons/video-octagon.svg";
import { MenuMobile } from "../MenuMobile/MenuMobile";
import yellowStars from "../../assets/icons/HomeMobile/yellow-stars.svg";
import pinkStar from "../../assets/icons/HomeMobile/pink-star.svg";
import useContentful from "../../hooks/useContentful";
import { HomeMobileId } from "../../constants";

export const HomeMobile = () => {
  const { data } = useContentful(HomeMobileId);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      if (isMenuOpen) {
        document.body.style.overflow = "auto";
      }
    };
  }, [isMenuOpen]);

  return (
    <Styled.Wrapper>
      <Styled.Video src={data?.background?.fields?.file?.url} />
      {isMenuOpen ? (
        <MenuMobile setIsMenuOpen={handleMenuOpen} />
      ) : (
        <>
          <Styled.StarsPinkIcon src={pinkStar} />
          <Styled.Header>
            <Styled.Image
              src={isMenuOpen ? burgerClose : burger}
              alt={isMenuOpen ? "Close" : "Menu"}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            />
            <Styled.LogoImage src={logo} alt={"Logo"} />
            <Styled.UserImage src={user} alt={"User signIn"} />
          </Styled.Header>
          <Styled.WelcomeContainer>
            <Styled.WelcomeTitle>
              {data?.title[0]}
              <br />
              {data?.title[1]}{" "}
              <Styled.WelcomeTitleColored>
                {data?.title[2]}
              </Styled.WelcomeTitleColored>
            </Styled.WelcomeTitle>
            <Styled.WelcomeText>
              {data?.descriptionText[0]}
              <br />
              <br />
              {data?.descriptionText[1]}
            </Styled.WelcomeText>
          </Styled.WelcomeContainer>
          <Styled.Actions>
            <Styled.Button
              onClick={() => open("https://my.bravocreations.com/registration")}
            >
              <Styled.ButtonIcon
                src={userOctagon}
                alt="Start your journey icon"
              />
              {data?.buttonStart}
            </Styled.Button>
            <Styled.ActionsText>It’s Free</Styled.ActionsText>
            <Styled.ButtonModified
              onClick={() => open("https://bravocreations.com")}
            >
              <Styled.ButtonIcon src={videoOctagon} alt="Our exprertise icon" />
              {data?.buttonFind}
            </Styled.ButtonModified>
          </Styled.Actions>
        </>
      )}
      <Styled.StarYellowIcon src={yellowStars} />
    </Styled.Wrapper>
  );
};
