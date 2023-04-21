import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
// import { ReactComponent as ChevronLeftIcon } from "./icons/chevron-left.svg";
// import { ReactComponent as ChevronRightIcon } from "./icons/chevron-right.svg";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: (
            <div className="carousel-arrow carousel-arrow-next">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>

            </div>
        ),
        prevArrow: (
            <div className="carousel-arrow carousel-arrow-prev">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>

            </div>
        ),
    };

    return (
        <div className="carousel-wrapper mt-16">
            <Slider {...settings}>
                <div>
                    <div className="w-full h-80 bg-gray-200 flex justify-center items-center">
                        <img
                            src="https://images.unsplash.com/photo-1674574124976-a56d9052c2f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80?text=Banner+1"
                            alt="Banner 1"
                            className="w-full h-full object-cover"
                        />
                        {/* <div className="text-center absolute inset-0 flex flex-col justify-center items-center">
              <h3 className="font-semibold text-lg text-white mb-4">Banner 1</h3>
              <button className="bg-white text-gray-800 rounded-full py-2 px-4 hover:bg-gray-200">
                Shop now
              </button>
            </div> */}
                    </div>
                </div>
                <div>
                    <div className="w-full h-80 bg-gray-200 flex justify-center items-center">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1679941208830-d621aa499fa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80?text=Banner+2"
                            alt="Banner 2"
                            className="w-full h-full object-cover"
                        />
                        {/* <div className="text-center absolute inset-0 flex flex-col justify-center items-center">
              <h3 className="font-semibold text-lg text-white mb-4">Banner 2</h3>
              <button className="bg-white text-gray-800 rounded-full py-2 px-4 hover:bg-gray-200">
                Shop now
              </button>
            </div> */}
                    </div>
                </div>
                <div>
                    <div className="w-full h-80 bg-gray-200 flex justify-center items-center">
                        <img
                            src="https://images.unsplash.com/photo-1659482633347-e56ce63d147b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80?text=Banner+3"
                            alt="Banner 3"
                            className="w-full h-full object-cover"
                        />
                        {/* <div className="text-center absolute inset-0 flex flex-col justify-center items-center">
              <h3 className="font-semibold text-lg text-white mb-4">Banner 3</h3>
              <button className=" text-gray-800 rounded-full py-2 px-4 hover:bg-gray-200">
                Shop now
              </button>
            </div> */}
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;
