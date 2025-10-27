import React, { useState, useEffect } from "react";
import { Typography, IconButton, Button, Chip } from "@material-tailwind/react";
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon, ArrowsRightLeftIcon } from "@heroicons/react/24/solid";
import { Footer, PageTitle } from "@/widgets/layout";
import { galleryImages, categories } from "@/data";


export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [isComparing, setIsComparing] = useState(false);
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  
  useEffect(() => {
    setFilteredImages(
      activeCategory === "all"
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory)
    );
  }, [activeCategory]);

  useEffect(() => {
    const onKey = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") setSelectedIndex((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length));
      if (e.key === "ArrowRight") setSelectedIndex((i) => (i === null ? null : (i + 1) % galleryImages.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex]);

  const openAt = (index) => setSelectedIndex(index);
  const close = () => setSelectedIndex(null);
  const prev = (e) => {
    e.stopPropagation();
    setSelectedIndex((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length));
  };
  const next = (e) => {
    e.stopPropagation();
    setSelectedIndex((i) => (i === null ? null : (i + 1) % galleryImages.length));
  };

  return (
    <>
      <div className="relative flex h-[480px] content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/slider/1.webp')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12 pt-36">
              <Typography variant="h1" color="white" className="mb-6 font-black text-5xl">
                Our Work Gallery
              </Typography>
              <Typography variant="lead" color="white" className="opacity-90">
                Explore our portfolio of premium car transformations, from ceramic coatings to complete restorations.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4 pb-20 pt-28">
        <div className="-mt-20 mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "filled" : "outlined"}
              color="blue-gray"
              size="lg"
              className={`rounded-full ${
                activeCategory === category.id 
                  ? "bg-blue-500 text-white" 
                  : "text-gray-800 hover:bg-blue-500 hover:text-white"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map(({ id, image, compareImage, title, category, tags }, idx) => (
            <div
              key={id}
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white"
            >
              <button
                onClick={() => openAt(idx)}
                className="w-full focus:outline-none"
                aria-label={`Open ${title} in lightbox`}
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="h-full w-full object-cover transform transition-all duration-500 group-hover:scale-110"
                  />
                  {compareImage && (
                    <div className="absolute top-4 right-4 p-2 bg-white/90 rounded-full shadow-lg">
                      <ArrowsRightLeftIcon className="h-5 w-5 text-blue-500" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <Typography variant="h6" color="blue-gray" className="mb-2">
                    {title}
                  </Typography>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, tagIdx) => (
                      <Chip
                        key={tagIdx}
                        value={tag}
                        variant="outlined"
                        size="sm"
                        className="text-xs"
                      />
                    ))}
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </section>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-h-[90vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
            <div className="relative rounded-xl overflow-hidden bg-black/90 p-4">
              <div className="relative">
                {filteredImages[selectedIndex].compareImage ? (
                  <div className="relative flex gap-4">
                    <div className="flex-1">
                      <Typography className="text-white text-center mb-2 text-sm font-medium">Before</Typography>
                      <img
                        src={filteredImages[selectedIndex].image}
                        alt={`Before - ${filteredImages[selectedIndex].title}`}
                        className="max-h-[70vh] object-contain rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <Typography className="text-white text-center mb-2 text-sm font-medium">After</Typography>
                      <img
                        src={filteredImages[selectedIndex].compareImage}
                        alt={`After - ${filteredImages[selectedIndex].title}`}
                        className="max-h-[70vh] object-contain rounded-lg"
                      />
                    </div>
                  </div>
                ) : (
                  <img
                    src={filteredImages[selectedIndex].image}
                    alt={filteredImages[selectedIndex].title}
                    className="max-h-[70vh] w-auto max-w-[80vw] object-contain rounded-lg"
                  />
                )}
              </div>

              <button
                onClick={close}
                aria-label="Close"
                className="absolute top-6 right-6 rounded-full bg-white/20 p-2 text-white hover:bg-white/40 transition-colors"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>

              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <IconButton variant="text" onClick={prev} aria-label="Previous image" className="bg-white/10 hover:bg-white/30">
                  <ChevronLeftIcon className="h-6 w-6 text-white" />
                </IconButton>
              </div>

              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <IconButton variant="text" onClick={next} aria-label="Next image" className="bg-white/10 hover:bg-white/30">
                  <ChevronRightIcon className="h-6 w-6 text-white" />
                </IconButton>
              </div>

              <div className="absolute left-1/2 bottom-6 -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white">
                <Typography className="text-sm font-medium">
                  {selectedIndex + 1} / {filteredImages.length}
                </Typography>
              </div>

              <div className="absolute left-0 right-0 bottom-16 text-center">
                <Typography variant="h6" className="text-white mb-2">
                  {filteredImages[selectedIndex].title}
                </Typography>
                {filteredImages[selectedIndex].caption && (
                  <Typography className="text-gray-300 text-sm max-w-2xl mx-auto">
                    {filteredImages[selectedIndex].caption}
                  </Typography>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
export default Gallery;