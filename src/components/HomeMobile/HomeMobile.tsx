import * as Styled from "./HomeMobile.styles";
import { useEffect, useState } from 'react';
import videoBg from "../../assets/video/home_background.mp4";
import burger from "./../../assets/icons/burger.svg";
import burgerClose from "./../../assets/icons/burger_close.svg";
import logo from "./../../assets/icons/logo.svg";
import user from "./../../assets/icons/user.svg";
import userOctagon from "./../../assets/icons/user-octagon.svg";
import videoOctagon from "./../../assets/icons/video-octagon.svg";
import { MenuMobile } from "../MenuMobile/MenuMobile";

export const HomeMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(prev => !prev)
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      if (isMenuOpen) {
        document.body.style.overflow = 'auto';
      }
    };
  }, [isMenuOpen]);

  return (
    <Styled.Wrapper>
      <Styled.Video src={videoBg} autoPlay loop muted />
      {isMenuOpen ? <MenuMobile setIsMenuOpen={handleMenuOpen} /> : (
        <>
          <Styled.Header>
            <Styled.Image
              src={isMenuOpen ? burgerClose : burger}
              alt={isMenuOpen ? 'Close' : 'Menu'}
              onClick={() => setIsMenuOpen(prev => !prev)}
            />
            <Styled.LogoImage src={logo} alt={'Logo'} />
            <Styled.UserImage src={user} alt={'User signIn'} />
          </Styled.Header>
          <Styled.WelcomeContainer>
            <Styled.WelcomeTitle>
              Jewelry Service
              <br />
              <Styled.WelcomeTitleColored>
                Like No Other
              </Styled.WelcomeTitleColored>
            </Styled.WelcomeTitle>
            <Styled.WelcomeText>
              Experience the difference that sets us apart: We have redefined exceptional customer service by exceeding your expectations.
              <br />
              <br />
              Our team of expert jewelers, highly skilled craftsmen and state-of-the-art technology
              ensure unmatched quality.
            </Styled.WelcomeText>
          </Styled.WelcomeContainer>
          <Styled.Actions>
            <Styled.Button onClick={() => open('https://my.bravocreations.com/registration')}>
              <Styled.ButtonIcon
                src={userOctagon}
                alt='Start your journey icon'
              />
              Start Your Journey
            </Styled.Button>
            <Styled.ActionsText>
              It’s Free
            </Styled.ActionsText>
            <Styled.ButtonModified onClick={() => open('https://bravocreations.com')}>
              <Styled.ButtonIcon
                src={videoOctagon}
                alt='Our exprertise icon'
              />
              Our Expertise
            </Styled.ButtonModified>
          </Styled.Actions>
        </>
      )}
    </Styled.Wrapper>

  )
}
