//@ts-nocheck
import * as Styled from "./TeamMobile";
import { Navigation } from "swiper/modules";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
// import { useEffect, useMemo, useRef, useState } from "react";
import Card from "./Card/Card";
import Vector from "../../assets/images/TeamMobile/Vector.svg";
// import Avatar1 from "../../assets/images/HumanCard/Human1.svg";

// import Avatar2 from "../../assets/images/HumanCard/Human2.svg";

// import Avatar3 from "../../assets/images/HumanCard/Human3.svg";

// import Avatar4 from "../../assets/images/HumanCard/Human3.svg";
import useContentful from "../../hooks/useContentful";
import { TeamContentId } from "../../constants";

import { WelcomeTitle, WelcomeText, WelcomeTitleColored } from "./TeamMobile";
interface ITeamMobile {}

const TeamMobile: React.FC<ITeamMobile> = () => {
  const { data } = useContentful(TeamContentId);
  return (
    <Styled.Wrapper>
      <Styled.WelcomeContainer>
        <WelcomeTitle>
          {data?.title} <br />
          <WelcomeTitleColored>{data?.titleHalf}</WelcomeTitleColored>{" "}
        </WelcomeTitle>
        <WelcomeText>{data?.titleText}</WelcomeText>
      </Styled.WelcomeContainer>
      <Styled.SwiperContainer>
        <Swiper
          initialSlide={2}
          spaceBetween={30}
          grabCursor={true}
          slidesPerView={1.7}
          modules={[Navigation]}
          centeredSlides
          // onBeforeInit={(swiper) => {
          //   swiperRef.current = swiper;
          // }}
        >
          {data?.teamCard.map((x, index) => (
            <SwiperSlide>
              <Card x={x} y={data?.teamCardRole[index]} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Styled.SwiperContainer>

      <Styled.DescriptionContainer>
        <Styled.VectorRow>
          <Styled.VectorIcons src={Vector} />
          <Styled.VectorIcons src={Vector} />
          <Styled.VectorIcons />
        </Styled.VectorRow>
        <Styled.DescriptionText>{data?.quotesText}</Styled.DescriptionText>
      </Styled.DescriptionContainer>
    </Styled.Wrapper>
  );
};

export default TeamMobile;
