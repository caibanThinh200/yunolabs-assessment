"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const data = [
  {
    content:
      "Food usually came warm, and nicely packed. The menu was healthy and yet filling. Appreciate the thought that small treats are given during special occasions, such as Children’s Day. Sales representative, Xin Yi, is always helpful and prompt to respond ato various situations.",
    star: 5,
    name: "Edmund",
    role: "Director of SCC",
    image: "/images/spagetti.png",
  },
  {
    content:
      "Food usually came warm, and nicely packed. The menu was healthy and yet filling. Appreciate the thought that small treats are given during special occasions, such as Children’s Day. Sales representative, Xin Yi, is always helpful and prompt to respond ato various situations.",
    star: 4,
    name: "Edmund",
    role: "Director of SCC",
    image: "/images/spagetti.png",
  },
  {
    content:
      "Food usually came warm, and nicely packed. The menu was healthy and yet filling. Appreciate the thought that small treats are given during special occasions, such as Children’s Day. Sales representative, Xin Yi, is always helpful and prompt to respond ato various situations.",
    star: 3,
    name: "Edmund",
    role: "Director of SCC",
    image: "/images/spagetti.png",
  },
];

const Testimonials = () => {
  return (
    <div className="container mx-auto py-20">
      <div className="flex flex-col gap-10">
        <h2 className="text-crayola uppercase">Testimonials</h2>
        <div>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            //   onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {data.map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
                  <div className="lg:w-5/12">
                    <Image
                      className="object-cover rounded-32 lg:h-[500px] h-[300px] w-full"
                      src={testimonial?.image}
                      width={500}
                      height={500}
                      alt={"testimonial"}
                    />
                  </div>
                  <div className="lg:w-6/12">
                    <div className="flex flex-col gap-10 font-aeonik">
                      <div className="flex gap-1 items-center">
                        {Array(testimonial.star)
                          .fill("")
                          .map((_, idx) => (
                            <Image
                              key={idx}
                              alt="star"
                              src="/svg/star.svg"
                              width={30}
                              height={30}
                            />
                          ))}
                      </div>
                      <p className="font-aeonik">{testimonial.content}</p>
                      <div>
                        <p className="font-aeonik font-bold">
                          {testimonial?.name}
                        </p>
                        <p>{testimonial?.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
