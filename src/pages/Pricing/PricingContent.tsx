//@ts-nocheck
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { PricingContentId } from "../../constants.ts";
import useContentful from "../../hooks/useContentful.ts";
import "swiper/css";
import { useEffect, useRef, useState } from "react";
import styles from "./Pricing.module.scss";

// import ArrowLeft from "./../../assets/icons/ArrowLeftPricing.svg";
// import ArrowRight from "./../../assets/icons/ArrowRightPricing.svg";

// import Quotes from "../../assets/icons/Quotes.svg";
import { getCurrentDimension } from "../../utils/getScreenDimensions.ts";
import PricingCard from "../../components/PricingCard/PricingCard.tsx";

// import Card1 from "../../assets/images/PricingCard/Card1.png";
import Description from "../../components/Description/Description.tsx";

interface IProps {}

const SLIDES = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const PricingContent: React.FunctionComponent<IProps> = () => {
  const { data, error } = useContentful(PricingContentId);
  console.log(data);
  const swiperRef = useRef<any>();
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [activeSlideIndex, setActiveSlideIndex] = useState(2);
  const [swiperParams, setSwiperParams] = useState({
    itemsPerPage: 3,
    rotate: 25,
    stretch: 0,
    depth: 320,
    modifier: 1,
    slideShadows: false,
  });

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  useEffect(() => {
    console.log("Screen changed", screenSize.width);
    if (screenSize.width > 1799) {
      setSwiperParams({
        itemsPerPage: 3,
        rotate: 25,
        stretch: 0,
        depth: 320,
        modifier: 1,
        slideShadows: false,
      });
    } else if (screenSize.width > 1678) {
      setSwiperParams({
        itemsPerPage: 3,
        rotate: 25,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      });
    } else if (screenSize.width > 1399) {
      setSwiperParams({
        itemsPerPage: 3,
        rotate: 25,
        stretch: 0,
        depth: 50,
        modifier: 1,
        slideShadows: false,
      });
    } else if (screenSize.width > 768) {
      setSwiperParams({
        itemsPerPage: 2,
        rotate: 25,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      });
    } else {
      setSwiperParams({
        itemsPerPage: 1,
        rotate: 25,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      });
    }
  }, [screenSize.width]);

  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <p className={styles.container_title}>{data?.title}</p>
        <p className={styles.container_text}>{data?.description}</p>
      </div>

      <div className={styles.container_wrapper}>
        {/* {screenSize.width > 767 ? (
          <div
            className={styles.slider_arrow}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <img src={ArrowLeft} />
          </div>
        ) : null} */}

        <div className={styles.container_center}>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
            updateOnWindowResize={true}
            slidesPerView={swiperParams.itemsPerPage}
            initialSlide={2}
            loop={true}
            coverflowEffect={{
              ...swiperParams,
            }}
            observer={true}
            pagination={false}
            spaceBetween={150}
            onSlideChange={(swiper) => {
              console.log("Swiper active index: ", swiper.realIndex);
              if (!Number.isNaN(swiper.realIndex)) {
                setActiveSlideIndex(swiper.realIndex);
              }
            }}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            className={styles.mySwipes}
            onBeforeInit={(swiper) => {
              console.log("Swiper initialized!");
              swiperRef.current = swiper;
            }}
            onUpdate={(swiper) => {
              console.log("Swiper updated!");
              swiperRef.current = swiper;
            }}
          >
            {data?.card.map((slide, index) => (
              <SwiperSlide className={styles.card} key={index}>
                <PricingCard
                  isNearby={
                    Math.abs(
                      getSwiperSlidesDistance(
                        index,
                        activeSlideIndex,
                        data?.card.length
                      )
                    ) < 2
                  }
                  isFocused={slide === activeSlideIndex}
                  image={slide?.fields.file.url}
                  title={slide?.fields.title}
                  description={slide?.fields.description}
                  pricing={data?.cardPricing[index]}
                />
              </SwiperSlide>
            ))}
            {/* {SLIDES.map((slide) => (
              <SwiperSlide className={styles.card} key={slide}>
                <PricingCard
                  isNearby={
                    Math.abs(
                      getSwiperSlidesDistance(
                        slide,
                        activeSlideIndex,
                        SLIDES.length
                      )
                    ) < 2
                  }
                  isFocused={slide === activeSlideIndex}
                  image={Card1}
                />
              </SwiperSlide>
            ))} */}
          </Swiper>
        </div>

        {/* {screenSize.width > 767 ? (
          <div
            className={styles.slider_arrow}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <img src={ArrowRight} />
          </div>
        ) : null} */}
      </div>

      {/* <div className={styles.footer}>
        <img src={Quotes} style={{ height: 29, width: 38 }} />
        <p className={styles.footer_text}>
          {screenSize.width >= 1600 ? 'Transparency is our cornerstone. Starting prices offer a clear' +
            '          beginning for your \n jewelry journey. For precise quotes, submit a' +
            '          request on our portal.' :
            'Transparency is our cornerstone. Starting prices offer a clear' +
            '          beginning for your jewelry journey. For precise quotes, submit a' +
            '          request on our portal.'}
        </p>
        {screenSize.width > 767 ? (
          <img src={Quotes} style={{ height: 29, width: 38 }} />
        ) : null}
      </div> */}
      <Description
        descriptionText={
          // screenSize.width >= 1500
          //   ? "Transparency is our cornerstone. Starting prices offer a clear" +
          //     "          beginning for your \n jewelry journey. For precise quotes, submit a" +
          //     "          request on our portal."
          //   : "Transparency is our cornerstone. Starting prices offer a clear" +
          //     "          beginning for your jewelry journey. For precise quotes, submit a" +
          //     "          request on our portal."
          data?.quotes
        }
        parentBackgroundColor="white"
        backgroundColor="var(--quotes-staticLightBackgroundColor)"
        textColor="var(--pricing-staticLightTextColor)"
        displayLightIcon="var(--quotes-staticLightDisplayLightIcon)"
        displayDarkIcon="var(--quotes-staticLightDisplayDarkIcon)"
      />
    </div>
  );
};

function getSwiperSlidesDistance(
  firstIndex: number,
  secondIndex: number,
  slidesCount: number
) {
  const slidesDistance = Math.abs(firstIndex - secondIndex);
  if (slidesDistance > slidesCount / 2) {
    return slidesCount - slidesDistance;
  }
  return slidesDistance;
}

export default PricingContent;
