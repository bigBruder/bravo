//@ts-nocheck
import * as Styled from "./PricingMobile";
import { Navigation } from "swiper/modules";
import "swiper/css";
import styles from "./PricingMobile.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import useContentful from "../../hooks/useContentful.ts";
import { PricingContentId } from "../../constants.ts";
// import Card1 from "../../assets/images/PricingCard/Card1.png";

import PricingCard from "../MobilePricingCard/PricingCard.tsx";

import Vector from "../../assets/images/TeamMobile/Vector.svg";

import { WelcomeTitle, WelcomeText } from "./PricingMobile";
// const SLIDES = [0, 1, 2, 3, 4, 5, 6, 7, 8];
interface IPricingMobile {}

const PricingMobile: React.FC<IPricingMobile> = () => {
  const { data } = useContentful(PricingContentId);
  const [activeSlideIndex, setActiveSlideIndex] = useState(2);

  return (
    <Styled.Wrapper>
      <Styled.WelcomeContainer>
        <WelcomeTitle>{data?.title}</WelcomeTitle>
        <WelcomeText>{data?.description}</WelcomeText>
      </Styled.WelcomeContainer>
      <Styled.SwiperContainer>
        <Swiper
          effect={"coverflow"}
          //   grabCursor={true}
          //   centeredSlides={true}
          //   slidesPerView={1.1}
          //   initialSlide={2}
          //   coverflowEffect={{
          //     rotate: 25,
          //     stretch: 0,
          //     depth: 100,
          //     modifier: 1,
          //     slideShadows: false,
          //   }}
          //   pagination={false}
          //   spaceBetween={30}
          //   onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
          //   modules={[EffectCoverflow, Pagination]}
          initialSlide={2}
          spaceBetween={25}
          grabCursor={true}
          slidesPerView={1.5}
          coverflowEffect={{
            rotate: 25,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[Navigation, EffectCoverflow, Pagination]}
          centeredSlides
          onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
        >
          {data?.card.map((slide: object, index: number) => (
            <SwiperSlide key={index} className={styles.card}>
              <PricingCard
                isFocused={index === activeSlideIndex}
                image={slide?.fields.file.url}
                title={slide?.fields.title}
                description={slide?.fields.description}
                pricing={data?.cardPricing[index]}
              />
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
        <Styled.DescriptionText>{data?.quotes}</Styled.DescriptionText>
      </Styled.DescriptionContainer>
    </Styled.Wrapper>
  );
};

export default PricingMobile;
