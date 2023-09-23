import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./Team.module.scss";

import Title from "./../../assets/icons/TeamTitle.svg";
import ArrowLeft from "./../../assets/icons/ArrowLeft.svg";
import ArrowRight from "./../../assets/icons/ArrowRight.svg";

import Name1 from "../../assets/images/HumanCard/Name1.svg";
import Avatar1 from "../../assets/images/HumanCard/Human1.svg";
import Name2 from "../../assets/images/HumanCard/Name2.svg";
import Avatar2 from "../../assets/images/HumanCard/Human2.svg";
import Name3 from "../../assets/images/HumanCard/Name3.svg";
import Avatar3 from "../../assets/images/HumanCard/Human3.svg";
import Name4 from "../../assets/images/HumanCard/Name4.svg";
import Avatar4 from "../../assets/images/HumanCard/Human3.svg";

import Quotes from "../../assets/icons/Quotes.svg";
import Card from "./Card/Card.tsx";
import { getCurrentDimension } from "../../utils/getScreenDimensions.ts";

interface IProps {}

const TeamContent: React.FunctionComponent<IProps> = () => {
  // @ts-ignore
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
      return 4;
    } else if (screenSize.width > 1099) {
      return 3;
    } else if (screenSize.width > 768) {
      return 2;
    } else {
      return 1;
    }
  }, [screenSize.width]);

  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <img src={Title} className={styles.container_title} />
        <p className={styles.container_text}>
          The team is dedicated to delivering high-quality custom designs and
          ensuring customer satisfaction.
        </p>
      </div>

      <div className={styles.container_wrapper}>
        <div
          className={styles.slider_arrow}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <img src={ArrowLeft} />
        </div>

        <div className={styles.container_center}>
          <Swiper
            spaceBetween={90}
            style={
              {
                // margin: 0,
              }
            }
            slidesPerView={getItemsPerPage}
            modules={[Navigation]}
            className={styles.slider}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            <SwiperSlide>
              <Card
                avatar={Avatar1}
                titleImage={Name1}
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
                titleImage={Name2}
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
                titleImage={Name3}
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
                titleImage={Name4}
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
                titleImage={Name4}
                description={
                  "We offer Rush or date specific\n" +
                  "service to get your order done\n" +
                  "at the time you need it."
                }
                role={"Jewelry Artist"}
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div
          className={styles.slider_arrow}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <img src={ArrowRight} />
        </div>
      </div>

      <div className={styles.footer}>
        <img src={Quotes} />
        <p className={styles.footer_text}>
          Even if we are not near you, we will provide you with the best
          experience and easy communication at your fingertips.
        </p>
        <img src={Quotes} />
      </div>
    </div>
  );
};

export default TeamContent;
