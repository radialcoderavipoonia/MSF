"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";

const WhyWeAre = () => {
  return (
    <div className="py-[154px]">
      <div className="container xl:max-w-[1140px] mx-auto xl:px-0 px-3">
        <p className="text-onxy text-center font-georgia text-2xl font-normal leading-120 tracking-[7.2px] mb-0">
          Why we are
        </p>
        <h2 className="text-center pt-4 text-40 font-georgia leading-120 font-normal text-primary-blue">
          California <span className="text-primary-orange"> Sexual Abuse</span>{" "}
          Attorneys
        </h2>
      </div>
      <div className="pt-12">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          loop={true}
          spaceBetween={24}
          centeredSlides={true}
          slidesPerView={2}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={false}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            991: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
          }}
        >
          <SwiperSlide>
            <div className="bg-[url('/assets/images/why_we_are/slider_second_bg.webp')] bg-cover bg-no-repeat py-11 px-7 max-w-[799px]">
              <p className="text-center max-w-[459px] text-white mx-auto font-georgia-bold text-xl font-bold leading-normal mb-0">
                Nationally Recognized for Representing Sexual Abuse Survivors
              </p>
              <p className="pt-4 text-white font-georgia text-base font-normal leading-normal text-center">
                Manly, Stewart & Finaldi is regarded as America’s leading law
                firm for sexual abuse cases. Our founder and managing partner,
                <span className="text-primary-orange">
                  attorney John C. Manly
                </span>
                , has been successfully representing sexual abuse victims for
                over 20 years. He has been included in Super Lawyers® and named
                to California’s Top 100 Attorneys by the Los Angeles Daily
                Journal
              </p>
              <p className="pt-6 text-white font-georgia text-base font-normal leading-normal text-center">
                Victim’s advocate and California sexual abuse lawyer John Manly
                understands that sexual abuse is an ongoing crisis and has
                devoted himself to becoming a national leader in the legal
                battle against these brutal crimes. As a firm that exclusively
                handles sexual abuse cases, our California law firm offers
                experienced representation to obtain justice for sexual abuse
                survivors, harassment, and discrimination.
              </p>
              <p className="pt-6 text-white font-georgia text-base font-normal leading-normal text-center">
                Manly Stewart & Finaldi is currently investigating alleged
                <span className="text-primary-orange">
                  {" "}
                  sexual abuse by Dr. Robert E. Anderson at the University of
                  Michigan.
                </span>
                Contact our firm today if you were affected. . .
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/images/why_we_are/slider_third.webp"
              width={799}
              height={451}
              alt="slider first image"
              className=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/images/why_we_are/slider_first.webp"
              width={799}
              height={451}
              alt="slider first image"
              className=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default WhyWeAre;
