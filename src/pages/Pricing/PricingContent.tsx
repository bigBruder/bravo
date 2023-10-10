import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./Pricing.module.scss";

import ArrowLeft from "./../../assets/icons/ArrowLeftPricing.svg";
import ArrowRight from "./../../assets/icons/ArrowRightPricing.svg";

import PricingCard1 from "../../assets/images/PricingCard/Frame 813355.png";

import Quotes from "../../assets/icons/Quotes.svg";
import { getCurrentDimension } from "../../utils/getScreenDimensions.ts";

interface IProps {}

const PricingContent: React.FunctionComponent<IProps> = () => {
  const swiperRef = useRef<any>();
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  const getItemsPerPage = useMemo(() => {
    if (screenSize.width > 1300) {
      return 5;
    } else if (screenSize.width > 1099) {
      return 4;
    } else if (screenSize.width > 768) {
      return 3;
    } else {
      return 2;
    }
  }, [screenSize.width]);

  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <p className={styles.container_title}>Pricing</p>
        <p className={styles.container_text}>
          Our transparent pricing reflects a starting point for basic services,
          ensuring clarity and transparency in meeting your jewelry service
          needs.
        </p>
      </div>

      <div className={styles.container_wrapper}>
        {screenSize.width > 767 ? (
          <div
            className={styles.slider_arrow}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <img src={ArrowLeft} />
          </div>
        ) : null}

        <div className={styles.container_center}>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            // loop={true}
            slidesPerView={getItemsPerPage}
            initialSlide={2}
            coverflowEffect={{
              rotate: 35,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={false}
            modules={[EffectCoverflow, Pagination]}
            className={styles.mySwipes}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            <SwiperSlide className={styles.card}>
              <img src={PricingCard1} />
            </SwiperSlide>
            <SwiperSlide className={styles.card}>
              <img src={PricingCard1} />
            </SwiperSlide>
            <SwiperSlide className={styles.card}>
              <img src={PricingCard1} />
            </SwiperSlide>
            <SwiperSlide className={styles.card}>
              <img src={PricingCard1} />
            </SwiperSlide>
            <SwiperSlide className={styles.card}>
              <img src={PricingCard1} />
            </SwiperSlide>
            <SwiperSlide className={styles.card}>
              <img src={PricingCard1} />
            </SwiperSlide>
            <SwiperSlide className={styles.card}>
              <img src={PricingCard1} />
            </SwiperSlide>
            <SwiperSlide className={styles.card}>
              <img src={PricingCard1} />
            </SwiperSlide>
            <SwiperSlide className={styles.card}>
              <img src={PricingCard1} />
            </SwiperSlide>
          </Swiper>
        </div>

        {screenSize.width > 767 ? (
          <div
            className={styles.slider_arrow}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <img src={ArrowRight} />
          </div>
        ) : null}
      </div>

      <div className={styles.footer}>
        <img src={Quotes} style={{ height: 29, width: 38 }} />
        <p className={styles.footer_text}>
          Transparency is our cornerstone. Starting prices offer a clear
          beginning for your <br /> jewelry journey. For precise quotes, submit a
          request on our portal.
        </p>
        {screenSize.width > 767 ? (
          <img src={Quotes} style={{ height: 29, width: 38 }} />
        ) : null}
      </div>
    </div>
  );
};

export default PricingContent;
