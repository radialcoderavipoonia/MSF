"use client";
import React from "react";
import { Blog } from "./common/Helper";
import Image from "next/image";
import CustomTransparentButton from "./common/CustomTransparentButton";
import Slider from "react-slick";
import { SliderArrow } from "./common/Icons";

const BlogPost = () => {
  const slider = React.useRef(null);
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024, // defines the breakpoint width
        settings: {
          slidesToShow: 2, // adjusts slides to show at this breakpoint
          slidesToScroll: 1, // adjusts slides to scroll at this breakpoint
        },
      },
      {
        breakpoint: 640, // defines the breakpoint width
        settings: {
          slidesToShow: 1, // adjusts slides to show at this breakpoint
          slidesToScroll: 1, // adjusts slides to scroll at this breakpoint
          autoplay: true,
          speed: 200,
        },
      },
      // Add more breakpoints if needed
    ],
  };
  return (
    <div className="relative">
      <div className="container xl:max-w-[1139px] mx-auto xl:px-0 px-3 relative mb-[50px]">
        <div className="relative z-30">
          <p className="text-onxy text-center font-georgia text-2xl font-normal leading-120 tracking-[7.2px] mb-0">
            New Insights
          </p>
          <h2 className="text-center pt-4 text-40 font-georgia leading-120 font-normal text-primary-blue">
            More Recent <span className="text-primary-orange">Blog Post</span>{" "}
          </h2>
          <div className="sm:pt-12 pt-10 relative">
            <Slider ref={slider} {...settings}>
              {Blog.map((value, index) => (
                <div key={index}>
                  <div className="relative">
                    <Image
                      src={value.image}
                      width={364}
                      height={403}
                      alt="blog post image"
                      className=" w-full md:h-[403px] sm:pe-6"
                    />
                    <p className="text-white font-georgia-bold text-base font-bold leading-normal absolute top-[16px] left-[16px]">
                      12 February 2024
                    </p>
                  </div>
                  <div className="sm:pt-6 pt-4 sm:px-[18px] px-3">
                    <p className="text-onxy font-georgia-bold text-xl font-bold leading-normal mb-0 sm:max-w-[328px]">
                      At Manly Stewart & Finaldi, our attorneys routinely
                      represent sexual assault victims in high-profile national
                      cases.
                    </p>
                    <div className="pt-7">
                      <CustomTransparentButton content="View More" />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            <button
              onClick={() => slider?.current?.slickPrev()}
              className="absolute xl:top-[40%] translate-y-[-40%] xl:left-[-72px] lg:bottom-[-13%] bottom-[-14%] left-[10%] sm:left-[40%] flex justify-center items-center w-[48px] h-[48px] hover:bg-primary-blue hover_arrow hover:border-transparent transition-all duration-300 cursor-pointer border-[1px] border-primary-blue"
            >
              <SliderArrow />
            </button>
            <button
              onClick={() => slider?.current?.slickNext()}
              className="absolute xl:top-[40%] lg:bottom-[-13%] translate-y-[-40%] xl:right-[-72px] bottom-[-14%] sm:right-[40%] right-[10%] flex justify-center items-center rotate-[180deg] w-[48px] h-[48px] hover:bg-primary-blue hover_arrow hover:border-transparent cursor-pointer transition-all duration-300 border-[1px] border-primary-blue"
            >
              <SliderArrow />
            </button>
          </div>
        </div>
        <div className="bg-harp sm:w-[300%] w-full h-[317px] absolute bottom-[-50px] xl:right-[24px] sm:right-[34px]"></div>
      </div>
      <p className="text-primary-blue text-220 pointer-events-none absolute right-[170px] top-[-84px] font-georgia font-normal leading-110 opacity-[0.04] bg_text_right">
        post
      </p>
      <p className="absolute top-[-114px] left-[124px] pointer-events-none font-georgia text-220 leading-110 font-normal opacity-[0.05] text_webkit text-white  bg_text_left">
        blog
      </p>
    </div>
  );
};

export default BlogPost;
