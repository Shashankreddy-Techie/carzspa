import React from "react";
import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";


export function Video() {

  return (
    <>
      <div className="relative flex h-[480px] content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/slider/1.webp')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12 pt-36">
              <Typography variant="h1" color="white" className="mb-6 font-black text-5xl">
                Our Video Gallery
              </Typography>
              <Typography variant="lead" color="white" className="opacity-90">
                Explore our portfolio of premium car transformations, from ceramic coatings to complete restorations.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4 pb-20 pt-28">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-video md:cols-2 rounded-xl overflow-hidden shadow-lg bg-gray-900">
            {/* Replace the comment below with your YouTube iframe code */}
            <div className="w-full h-full flex items-center justify-center">
              <Typography color="white" className="text-xl px-2">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/-jcYPFQz-z4?si=4q3scaQIftUKmY9O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </Typography>
              <Typography color="white" className="text-xl px-2">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/2vMfCFng4uM?si=7j19pAenLvf_5OKm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>              </Typography>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
export default Video;