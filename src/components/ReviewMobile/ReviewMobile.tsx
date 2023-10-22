//@ts-nocheck
import * as Styled from "./ReviewMobile";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReviewContentId } from "../../constants";
import useContentful from "../../hooks/useContentful";
import Card from "./Card/Card";
import Vector from "../../assets/images/TeamMobile/Vector.svg";
// import Avatar1 from "../../assets/images/ReviewMobile/Avatar1.svg";
// import Avatar2 from "../../assets/images/ReviewMobile/Avatar2.svg";
// import Avatar3 from "../../assets/images/ReviewMobile/Avatar3.svg";

import { WelcomeTitle, WelcomeText } from "./ReviewMobile";
interface IReviewMobile {}

const ReviewMobile: React.FC<IReviewMobile> = () => {
  const { data } = useContentful(ReviewContentId);

  return (
    <Styled.Wrapper>
      <Styled.WelcomeContainer>
        <WelcomeTitle>{data?.title}</WelcomeTitle>
        <WelcomeText>{data?.titleDescription}</WelcomeText>
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
          {/* <SwiperSlide>
            <Card
              avatar={Avatar1}
              titleImage={"Chloe Anderson"}
              description={
                "We offer Rush or date specific\n" +
                "service to get your order done\n" +
                "at the time you need it."
              }
              role={"07 Jan 2023"}
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
              role={"07 Jan 2023"}
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
              role={"07 Jan 2023"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              avatar={Avatar3}
              titleImage={"Elizabeth Smith"}
              description={
                "We offer Rush or date specific\n" +
                "service to get your order done\n" +
                "at the time you need it."
              }
              role={"07 Jan 2023"}
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
              role={"07 Jan 2023"}
            />
          </SwiperSlide> */}
          {data?.card.map((item, index) => (
            <SwiperSlide>
              <Card
                image={item.fields.file.url}
                title={item.fields.title}
                description={item.fields.description}
                date={data?.cardDescription[index]}
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
        <Styled.DescriptionText>{data?.quoteText}</Styled.DescriptionText>
      </Styled.DescriptionContainer>
    </Styled.Wrapper>
  );
};

export default ReviewMobile;
