'use client';
import { useState, useRef, useEffect } from "react";
import Pill from "./Pill";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Test() {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Parent, Grade 7",
      quote:
        "My daughter became confident after presenting her AI project. Her first website meant everything to her.",
      image: "/images/girl.webp",
    },
    {
      name: "Parent, Grade 6",
      quote:
        "The interactive sessions were amazing. He learned so much about AI tools safely.",
      image: "/images/ai-innovator.webp",
    },
    {
      name: "Parent, Grade 8",
      quote:
        "Finally a course that focuses on creativity and not just coding syntax. Highly recommended!",
      image: "/images/creative-maker.webp",
    },
    {
      name: "Parent, Grade 5",
      quote: "She built her own chatbot! The confidence boost is real.",
      image: "/images/confident.webp",
    },
    {
      name: "Parent, Grade 9",
      quote: "Practical skills that help with school projects immediately.",
      image: "/images/future-ready.webp",
    },
  ];
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full flex flex-col items-center gap-56 fp max-container">

        <div className="absolute -top-1/2 left-0 w-full bg-white h-[660px] rounded-[100%] z-[-1]">
          {testimonials.map((testimonial, index) => {
            // Align 5 items around the bottom center (90 degrees)
            const angleDeg = 90 + (index - 2) * 25;
            const angleRad = (angleDeg * Math.PI) / 180;

            // Calculate percentage positions
            const left = 50 + 50 * Math.cos(angleRad);
            const top = 50 + 50 * Math.sin(angleRad);

            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className={`absolute rounded-full overflow-hidden border-4 transition-all duration-300 cursor-pointer ${isActive ? 'w-24 h-24 border-secondary shadow-[0_0_20px_rgba(34,113,255,0.4)] z-20 scale-110' : 'w-20 h-20 border-white grayscale opacity-70 z-10 hover:opacity-100 hover:grayscale-0'}`}
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                onClick={() => {
                  swiperRef.current?.slideToLoop(index);
                }}
              >
                <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
              </div>
            );
          })}
        </div>
        {/* First Row */}
        <div className="flex flex-col items-center gap-5">
          <Pill text="Testimonials" />
          <h2 className="text-[42px] font-general-sans font-semibold text-text-dark">Parent <span className="gradient-text">Testimonials</span></h2>
        </div>
        {/* End of First Row  */}

        {/* Second Row */}
        <div className="relative max-w-[60%] h-full">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="w-full h-full [&_.swiper-wrapper]:items-stretch"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="flex h-auto">
                <div className="flex flex-col flex-1 h-full gap-8 bg-white rounded-t-[30px] rounded-br-[30px] px-18 pt-22 pb-8">
                  <div className="text-lg font-open-sans italic">“{testimonial.quote}”</div>
                  <div className="mt-auto text-[22px] font-lato font-medium text-text-dark self-end">
                    — {testimonial.name}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* End of Testimonial Content */}


          {/* Quote Icon */}
          <Image className="absolute -top-6 left-2 z-1" src="/icons/quote.svg" alt="quote" width={70} height={45.66} />
          {/* End of Quote Icon */}

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-6 -right-6 flex justify-between pointer-events-none z-1">
            <button onClick={() => swiperRef.current?.slidePrev()}

              className="w-12 h-12 rounded-full primary flex items-center justify-center text-white cursor-pointer pointer-events-auto shadow-lg hover:scale-110 transition-transform disabled:opacity-50"
            >
              <svg
                className="w-6 h-6 rotate-180"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button onClick={() => swiperRef.current?.slideNext()}

              className="w-12 h-12 rounded-full primary flex items-center justify-center text-white cursor-pointer pointer-events-auto shadow-lg hover:scale-110 transition-transform disabled:opacity-50"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* End of Navigation Buttons */}
        </div>
        {/* End of Second Row */}
      </div>
    </section>
  )
}