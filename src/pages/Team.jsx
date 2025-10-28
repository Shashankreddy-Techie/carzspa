import React, { useEffect, useState, useRef } from "react";
import { Typography, IconButton, Button } from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Footer, PageTitle } from "@/widgets/layout";
import TestimonialCard from "@/widgets/cards/testimonial-card";
import { testimonialsData } from "@/data/testimonials-data";

export function Team() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef(null);

  useEffect(() => {
    // autoplay every 4s
    autoplayRef.current = setInterval(() => {
      if (!isPaused) setIndex((i) => (i + 1) % testimonialsData.length);
    }, 4000);
    return () => clearInterval(autoplayRef.current);
  }, [isPaused]);

  const prev = () => setIndex((i) => (i - 1 + testimonialsData.length) % testimonialsData.length);
  const next = () => setIndex((i) => (i + 1) % testimonialsData.length);

  return (
    <>
      <div className="relative flex h-[480px] content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/slider/1.webp')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
                  <div className="flex flex-wrap items-center">
                    <div className="pt-60 ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                      <Typography variant="h1" color="white" className="mb-6 font-black">
                        Testimonials
                      </Typography>
                      <Typography variant="lead" color="white" className="opacity-80">
                        Real feedback from clients who experienced our services.
                      </Typography>
                    </div>
                  </div>
                </div>
      </div>

      <div className="bg-gray-800">
        <section className="container mx-auto px-4 pb-20 pt-8 bg-gray-700">
        <PageTitle section="Testimonials" heading=""></PageTitle>

        <div
          className="mx-auto mt-8 max-w-3xl relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div className="flex items-center justify-center">
              <div className="w-full">
                <TestimonialCard
                  content={testimonialsData[index].content}
                  name={testimonialsData[index].name}
                  position={testimonialsData[index].position}
                  image={testimonialsData[index].image}
                />
              </div>
            </div>
          </div>

          {/* controls */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2">
            <IconButton variant="text" color="white" onClick={prev} className="bg-white/10 hover:bg-white/20">
              <ChevronLeftIcon className="h-6 w-6 text-white" />
            </IconButton>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <IconButton variant="text" color="white" onClick={next} className="bg-white/10 hover:bg-white/20">
              <ChevronRightIcon className="h-6 w-6 text-white" />
            </IconButton>
          </div>

          {/* dots */}
          <div className="mt-6 flex items-center justify-center gap-3">
            {testimonialsData.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 w-8 rounded-full transition-all ${i === index ? 'bg-black w-10' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </section>
      </div>

      <Footer />
    </>
  );
}

export default Team;