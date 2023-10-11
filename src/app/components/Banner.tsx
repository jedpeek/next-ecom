"use client";
import Slider from "react-slick";
import banner1 from "@/images/bannerone.jpg";
import banner2 from "@/images/bannertwo.jpg";
import banner3 from "@/images/bannerthree.jpg";
import Image from "next/image";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/Pi";
import BannerText from "./BannerText";

const Banner = () => {
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-slate-100 hover:text-sky-600 hover:bg-white 
      cursor-pointer duration-200 rounded-full text-2xl 
      flex items-center justify-center z-20 absolute left-1 top-1/2"
        onClick={onClick}
      >
        <PiCaretLeftLight />
      </div>
    );
  };

  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-slate-100 hover:text-sky-600 hover:bg-white 
      cursor-pointer duration-200 rounded-full text-2xl 
      flex items-center justify-center z-20 absolute right-1 top-1/2"
        onClick={onClick}
      >
        <PiCaretRightLight />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="relative">
      <Slider {...settings}>
        <div className="w-full h-full relative">
          <Image
            className="w-full h-full relative"
            src={banner1}
            height={500}
            width={500}
            alt="clothes"
          />
          <BannerText
            title="Outerware Picks"
            description="Get ready for fall with our Cozy Collections"
          />
        </div>
        <div className="w-full h-full relative">
          <Image
            className="w-full h-full relative"
            src={banner2}
            height={500}
            width={500}
            alt="clothes"
          />
          <BannerText
            title="Fall Favorites"
            description="Get ready for fall with our Cozy Collections"
          />
        </div>
        <div className="w-full h-full relative">
          <Image
            className="w-full h-full relative"
            src={banner3}
            height={500}
            width={500}
            alt="clothes"
          />
          <BannerText
            title="Mens Seasonal"
            description="Get ready for fall with our Cozy Collections"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
