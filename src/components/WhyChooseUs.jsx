"use client";
import Slider from "react-slick";
import { WhyChoose } from "./common/Helper";
import { SliderArrow } from "./common/Icons";
import React, { useRef } from "react";

const WhyChooseUs = () => {
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
        breakpoint: 600, // defines the breakpoint width
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
    <div className="overflow-hidden">
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
              <button
                onClick={() => slider?.current?.slickPrev()}
                className="flex justify-center items-center w-[48px] h-[48px] hover:bg-primary-blue hover_arrow hover:border-transparent transition-all duration-300 cursor-pointer border-[1px] border-primary-blue relative z-30"
              >
                <SliderArrow />
              </button>
              <button
                onClick={() => slider?.current?.slickNext()}
                className="flex justify-center items-center rotate-[180deg] w-[48px] h-[48px] hover:bg-primary-blue hover_arrow hover:border-transparent cursor-pointer transition-all duration-300 border-[1px] border-primary-blue relative z-30"
              >
                <SliderArrow />
              </button>
            </div>
          </div>
          <div className="lg:w-[73%] relative">
            <div className="lg:pt-20 relative z-30">
              <Slider ref={slider} {...settings}>
                {WhyChoose.map((value, index) => (
                  <div key={index} className="group sm:w-[33%] ">
                    <div className="bg-white border-[1px] sm:me-3 sm:ms-0 ms-3 border-primary-blue py-12 px-7 hover:bg-primary-blue transition-all duration-1000">
                      <div className="mx-auto max-w-[187px] group-hover:max-w-[unset] text-center ">
                        <p className="flex justify-center choose_svg">
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
                ))}
              </Slider>
            </div>
            <div className="bg-harp w-[200%] h-[205px] absolute lg:top-0 top-[-25%] lg:left-[-21px] left-[-50%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
