"use client";
import React from "react";
import { News } from "./Helper";
import Image from "next/image";
import Slider from "react-slick";

const TrimNews = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    autoplay: true,
    speed: 300,
    arrows: false,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024, // defines the breakpoint width
        settings: {
          slidesToShow: 4, // adjusts slides to show at this breakpoint
          slidesToScroll: 1, // adjusts slides to scroll at this breakpoint
        },
      },
      {
        breakpoint: 768, // defines the breakpoint width
        settings: {
          slidesToShow: 3, // adjusts slides to show at this breakpoint
          slidesToScroll: 1, // adjusts slides to scroll at this breakpoint
        },
      },
      {
        breakpoint: 640, // defines the breakpoint width
        settings: {
          slidesToShow: 2, // adjusts slides to show at this breakpoint
          slidesToScroll: 1, // adjusts slides to scroll at this breakpoint
        },
      },
      {
        breakpoint: 440, // defines the breakpoint width
        settings: {
          slidesToShow: 1, // adjusts slides to show at this breakpoint
          slidesToScroll: 1, // adjusts slides to scroll at this breakpoint
        },
      },
      // Add more breakpoints if needed
    ],
  };
  return (
    <div className="container xl:max-w-[1140px] mx-auto xl:px-0 px-3 py-[168px]">
      <p className="text-onxy text-center font-georgia text-2xl font-normal leading-120 tracking-[7.2px] mb-0">
        New Insights
      </p>
      <h2 className="text-center pt-4 text-40 font-georgia leading-120 font-normal text-primary-blue">
        Our Firm <span className="text-primary-orange">In News</span>{" "}
      </h2>
      <div className="pt-12">
        <Slider {...settings}>
          {News.map((value, index) => (
            <div key={index}>
              <Image
                src={value.image}
                width={210}
                height={120}
                alt="trim news image"
                className="sm:w-[210px] w-full"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TrimNews;
