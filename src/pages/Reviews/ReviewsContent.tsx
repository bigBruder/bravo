//@ts-nocheck
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./Revievs.module.scss";
import useContentful from "../../hooks/useContentful.ts";
import { ReviewContentId } from "../../constants.ts";
import ArrowLeft from "./../../assets/icons/ArrowLeftPricing.svg";
import ArrowRight from "./../../assets/icons/ArrowRightPricing.svg";

import Avatar1 from "../../assets/images/HumanCard/Human2.1.svg";

import Avatar2 from "../../assets/images/HumanCard/Human2.2.svg";

import Avatar3 from "../../assets/images/HumanCard/Human2.3.svg";

import Avatar4 from "../../assets/images/HumanCard/Human2.1.svg";

// import Quotes from "../../assets/icons/Quotes.svg";
import Card from "./Card/Card.tsx";
import { getCurrentDimension } from "../../utils/getScreenDimensions.ts";
import Description from "../../components/Description/Description.tsx";

interface IProps { }

const REVIEWS = [
  {
    avatar: Avatar1,
    titleName: "Chloe Anderson",
    description:
      "The jewelry maker displays\n" +
      "unsurpassed skill and creativity in\n" +
      "creating unique jewelry that\n" +
      "delightswith its beauty.",
    role: "09 Jul 2023",
  },
  {
    avatar: Avatar3,
    titleName: "Elizabeth Smith",
    description:
      "The jeweler has high precision\n" +
      "and attention to detail, which allows\n" +
      "him to create exquisite and\n" +
      "beautiful jewelry.",
    role: "07 Jan 2023",
  },
  {
    avatar: Avatar4,
    titleName: "Elizabeth Smith",
    description:
      "The jeweler has high precision\n" +
      "and attention to detail, which allows\n" +
      "him to create exquisite and\n" +
      "beautiful jewelry.",
    role: "11 Apr 2023",
  },
  {
    avatar: Avatar2,
    titleName: "Chloe Anderson",
    description:
      "We offer Rush or date specific\n" +
      "service to get your order done\n" +
      "at the time you need it.",
    role: "15 Apr 2023",
  },
]

const ReviewsContent: React.FunctionComponent<IProps> = () => {
  const { data,  error } = useContentful(ReviewContentId);

 
  if (error) {
    console.log("error", error);
    return null;
  }
  if (data) {
    console.log("data", data);
  }
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
    if (screenSize.width > 1500) {
      return 3;
    } else if (screenSize.width > 1200) {
      return 2;
    } else if (screenSize.width > 768) {
      return 1;
    } else {
      return 1;
    }
  }, [screenSize.width]);

  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <p className={styles.container_title}>{data?.title}</p>
        <p className={styles.container_text}>
        {data?.titleDescription}
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
            loop
            autoplay={{
              delay: 5000,
              disableOnInteraction: false
            }}
            spaceBetween={80}
            style={
              {
                // margin: 0,
              }
            }
            slidesPerView={getItemsPerPage}
            modules={[Autoplay, Navigation]}
            className={styles.slider}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {[
              ...REVIEWS,
              ...REVIEWS,
            ].map(x => (
              <SwiperSlide>
                <Card {...x} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div
          className={styles.slider_arrow}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <img src={ArrowRight} />
        </div>
      </div>

      {/* <div className={styles.footer}>
        <img src={Quotes} style={{ height: 29, width: 38 }} />
        <p className={styles.footer_text}>
          Our unwavering commitment is to satisfy every client and make their journey hassle-free. You could be our next delighted client—join us on the path to exceptional service.
        </p>
        {screenSize.width > 767 ? (
          <img src={Quotes} style={{ height: 29, width: 38 }} />
        ) : null}
      </div> */}

      <Description
        descriptionText={
          // screenSize.width >= 1600
          //   ? "Transparency is our cornerstone. Starting prices offer a clear" +
          //   "          beginning for your \n jewelry journey. For precise quotes, submit a" +
          //   "          request on our portal."
          //   : "Transparency is our cornerstone. Starting prices offer a clear" +
          //   "          beginning for your jewelry journey. For precise quotes, submit a" +
          //   "          request on our portal."
          data?.quoteText
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

export default ReviewsContent;
