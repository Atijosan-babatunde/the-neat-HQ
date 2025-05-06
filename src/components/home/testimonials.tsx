import { useState, useRef, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import TestimonialCard from "./testimonialsCard";
import avatar from "../../assets/images/avatar.png";
import james from "../../assets/images/james.png";
import emily from "../../assets/images/emily.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const testimonialsRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      text: "The Neat HQ transformed my home! The cleaners were professional, thorough, and so friendly. My place has never looked better!",
      name: "Sarah M.",
      image: avatar,
    },
    {
      text: "Exceptional service! They arrived on time, worked efficiently, and left my office spotless. Highly recommend!",
      name: "James R.",
      image: james,
    },
    {
      text: "Best cleaning service ever. Booking was easy, and the team did an amazing job. My apartment feels brand new!",
      name: "Emily T.",
      image: emily,
    },
  ];

  const checkScrollability = () => {
    const container = testimonialsRef.current;
    if (!container) return;

    setCanScrollLeft(scrollPosition > 0);
    setCanScrollRight(
      scrollPosition < container.scrollWidth - container.clientWidth
    );
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  });

  const scroll = (direction: "left" | "right") => {
    const container = testimonialsRef.current;
    if (!container) return;

    const scrollAmount = 300;
    const newPosition =
      direction === "left"
        ? Math.max(scrollPosition - scrollAmount, 0)
        : Math.min(
            scrollPosition + scrollAmount,
            container.scrollWidth - container.clientWidth
          );

    container.scrollTo({ left: newPosition, behavior: "smooth" });
    setScrollPosition(newPosition);
  };

  const handleScroll = () => {
    if (testimonialsRef.current) {
      setScrollPosition(testimonialsRef.current.scrollLeft);
    }
  };

  return (
    <main className="bg-[#e0ddd1] py-4 md:py-20">
      <div className="container mx-auto px-4 md:max-w-[80%]">
        <div className="flex text-center items-center flex-col gap-4 md:gap-6">
          <Typography className="text-[#5C6C72] text-lg md:text-xl font-medium">
            Testimonials
          </Typography>
          <Typography className="font-playfair text-[#2E3538] text-3xl md:text-5xl font-semibold">
            What Our Happy Customers Say
          </Typography>
        </div>
        <section className="mt-6 md:mt-8 relative">
          <div
            ref={testimonialsRef}
            className="flex overflow-x-auto scrollbar-hide gap-4 md:gap-6 pb-4"
            onScroll={handleScroll}
            style={{ scrollBehavior: "smooth" }}
          >
            {testimonials.map((result, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[85%] sm:w-[70%] md:w-[calc(33.333%-16px)] min-w-[280px]"
              >
                <TestimonialCard
                  description={result.text}
                  logo={result.image}
                  name={result.name}
                />
              </div>
            ))}
          </div>
        </section>
        <section className="flex mt-4 md:mt-5 justify-center gap-4">
          <button
            onClick={() => scroll("left")}
            className={`p-2 rounded-full w-10 h-10 flex items-center justify-center transition-colors ${
              canScrollLeft
                ? "bg-[#F5F4F0] cursor-pointer text-[#5C6C72]"
                : "bg-[#F5F4F0] text-[#C1BBA4]"
            }`}
            disabled={!canScrollLeft}
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className={`p-2 rounded-full w-10 h-10 flex items-center justify-center transition-colors ${
              canScrollRight
                ? "bg-[#F5F4F0] cursor-pointer text-[#5C6C72]"
                : "bg-[#F5F4F0] text-[#C1BBA4]"
            }`}
            disabled={!canScrollRight}
            aria-label="Next testimonials"
          >
            <ChevronRight
              size={20}
              className={`${
                canScrollRight ? "text-[#5C6C72]" : "text-[#D7D3C4]"
              }`}
            />
          </button>
        </section>
      </div>
    </main>
  );
};

export default Testimonials;
