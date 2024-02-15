"use client";
import { useEffect } from "react";
import SwiperCore, { Swiper } from "swiper";
import "swiper/css";
import { SwiperSlide, useSwiper } from "swiper/react";
import { WhyChoose } from "./common/Helper";
import { SliderArrow } from "./common/Icons";

// Install Swiper modules
SwiperCore.use([]);

const WhyChooseUs = () => {
  const swiper = useSwiper();
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      spaceBetween: 0,
      slidesPerView: 2,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="container xl:max-w-[1140px] mx-auto xl:px-0 px-3 lg:py-[154px] py-20 relative z-30">
        <div className="flex lg:flex-row flex-col gap-16">
          <div className="lg:w-[22%]">
            <p className="text-primary-blue text-40 lg:text-start text-center font-georgia font-normal leading-120 mb-0">
              Why <span className="text-primary-orange">Choose</span> Us
            </p>
            <p className="pt-7 mb-0 text-onxy font-georgia lg:text-start text-center text-base font-normal leading-normal opacity-80">
              Choose us for unparalleled expertise, exceptional service, and a
              commitment to exceeding your expectations. Our team is dedicated
              to delivering innovative solutions tailored to your needs,
              ensuring your satisfaction every step of the way.
            </p>
            <div className="pt-12 flex lg:justify-start justify-center gap-4">
              <button className="flex swiper-button-prev justify-center items-center w-[48px] h-[48px] hover:bg-primary-blue hover_arrow hover:border-transparent transition-all duration-300 cursor-pointer border-[1px] border-primary-blue swiper-button-prev">
                <SliderArrow />
              </button >
              <button className="flex swiper-button-next justify-center items-center rotate-[180deg] w-[48px] h-[48px] hover:bg-primary-blue hover_arrow hover:border-transparent cursor-pointer transition-all duration-300 border-[1px] border-primary-blue swiper-button-next">
                <SliderArrow />
              </button>
            </div>
          </div>
          <div className="lg:w-[78%]">
            <div className="flex lg:pt-20 gap-3 items-start">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  {WhyChoose.map((value, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                      <div className="group w-[33%] ">
                        <div className="bg-white border-[1px] border-primary-blue py-12 px-7 hover:bg-primary-blue ">
                          <div className="mx-auto max-w-[187px] group-hover:max-w-[unset] text-center ">
                            <p className="flex justify-center choose_svg group-hover:transition-all group-hover:duration-300">
                              {value.image}
                            </p>
                            <p className="pt-[30px] group-hover:pt-5 max-w-[157px] mx-auto text-center group-hover:max-w-[unset] mb-0 text-onxy group-hover:text-white font-georgia text-xl font-bold leading-normal">
                              {value.title}
                            </p>
                            <p className="pt-6 text-white font-georgia text-base font-normal leading-normal mb-0 hidden group-hover:block ">
                              {value.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-harp xl:w-[70%] lg:w-[73%] w-full h-[205px] absolute lg:top-[150px] bottom-0 right-0 "></div>
    </div>
  );
};

export default WhyChooseUs;