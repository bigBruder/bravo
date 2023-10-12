import * as Styled from "./TeamMobile";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
// import { useEffect, useMemo, useRef, useState } from "react";
import Card from "./Card/Card";
import Vector from "../../assets/images/TeamMobile/Vector.svg";
import Avatar1 from "../../assets/images/HumanCard/Human1.svg";

import Avatar2 from "../../assets/images/HumanCard/Human2.svg";

import Avatar3 from "../../assets/images/HumanCard/Human3.svg";

import Avatar4 from "../../assets/images/HumanCard/Human3.svg";

import { WelcomeTitle, WelcomeText, WelcomeTitleColored } from "./TeamMobile";
interface ITeamMobile {}

const TeamMobile: React.FC<ITeamMobile> = () => {
  return (
    <Styled.Wrapper>
      <Styled.WelcomeContainer>
        <WelcomeTitle>
          Dedicated to <br />
          <WelcomeTitleColored>Serve You</WelcomeTitleColored>{" "}
        </WelcomeTitle>
        <WelcomeText>
          The team is dedicated to delivering high-quality custom designs and
          ensuring customer satisfaction.
        </WelcomeText>
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
          <SwiperSlide>
            <Card
              avatar={Avatar1}
              titleImage={"Chloe Anderson"}
              description={
                "We offer Rush or date specific\n" +
                "service to get your order done\n" +
                "at the time you need it."
              }
              role={"Jewelry Artist"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              avatar={Avatar2}
              titleImage={"Chloe Anderson"}
              description={
                "We offer Rush or date specific\n" +
                "service to get your order done\n" +
                "at the time you need it."
              }
              role={"Jewelry Artist"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              avatar={Avatar3}
              titleImage={"Jacob Davies"}
              description={
                "We offer Rush or date specific\n" +
                "service to get your order done\n" +
                "at the time you need it."
              }
              role={"Jewelry Artist"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              avatar={Avatar4}
              titleImage={"Elizabeth Smith"}
              description={
                "We offer Rush or date specific\n" +
                "service to get your order done\n" +
                "at the time you need it."
              }
              role={"Jewelry Artist"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              avatar={Avatar2}
              titleImage={"Elizabeth Smith"}
              description={
                "We offer Rush or date specific\n" +
                "service to get your order done\n" +
                "at the time you need it."
              }
              role={"Jewelry Artist"}
            />
          </SwiperSlide>
        </Swiper>
      </Styled.SwiperContainer>

      <Styled.DescriptionContainer>
        <Styled.VectorRow>
          <Styled.VectorIcons src={Vector} />
          <Styled.VectorIcons src={Vector} />
          <Styled.VectorIcons />
        </Styled.VectorRow>
        <Styled.DescriptionText>
          Even if we are not near you, we will provide you with the best
          experience and easy communication at your fingertips.
        </Styled.DescriptionText>
      </Styled.DescriptionContainer>
    </Styled.Wrapper>
  );
};

export default TeamMobile;
