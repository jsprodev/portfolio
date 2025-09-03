import { useState, useEffect, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselInfo,
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { getImagePaths } from "@/lib/getImagePaths";

export function ProjectCarousel({ directory, title, description, tags }) {
  const [images, setImages] = useState([
    "/src/assets/images/projects/rbpmApp/rbpm10.png",
    "/src/assets/images/projects/rbpmApp/rbpm1.png",
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightbox(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setLightbox(false);
    document.body.style.overflow = "auto";
  }, []);

  const showNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  }, [images.length]);

  const showPrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  }, [images.length]);

  // Load images for this directory
  // useEffect(() => {
  //   setIsLoading(true);
  //   const loadImages = () => {
  //     const imagePaths = getImagePaths(directory);
  //     console.log(imagePaths);
  //     setImages(imagePaths);
  //     setIsLoading(false);
  //   };
  //   loadImages();
  // }, [directory]);

  useEffect(() => {
    if (!lightbox) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [lightbox, closeLightbox, showPrev, showNext]);

  if (isLoading) {
    return <Skeleton className="w-full h-64" />;
  }

  return (
    <>
      <Card
        className={`max-lg:min-w-full lg:w-[calc(50%-20px)] rounded-3xl shadow-lg shadow-gray-900/10 p-6 gap-y-4 border`}
      >
        <CardHeader className="p-0">
          <CardTitle className="p-0">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <Carousel className="flex flex-col w-full gap-y-4">
          <CardContent className="flex items-center justify-center p-0">
            <CarouselContent className="">
              {images.map((image, index) => (
                <CarouselItem key={image.id} className={"p-0"}>
                  <img
                    src={image || image.placeholder}
                    alt={`${title} - Image ${index + 1}`}
                    className="h-72 object-contain w-full cursor-pointer"
                    loading="lazy"
                    decoding="async"
                    onClick={() => openLightbox(index)}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            {images.length > 1 && (
              <>
                <CarouselPrevious className="-left-8" />
                <CarouselNext className="-right-8" />
              </>
            )}
          </CardContent>
          <CardFooter className="flex flex-wrap items-center justify-center min-w-full gap-x-1 gap-y-1 text-xs text-center">
            {tags &&
              tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-blue-100 px-2.5 py-1  text-blue-600 dark:bg-slate-800 dark:text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            <CarouselInfo />
          </CardFooter>
        </Carousel>
      </Card>
      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center text-muted-foreground bg-black/20 backdrop-blur-lg">
          <img
            className="max-w-[85vw] max-h-[80vh] object-contain transition-transform duration-300"
            src={images[currentIndex].src}
          />
          <button
            onClick={closeLightbox}
            className="absolute top-3 right-3 text-white leading-none bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 rounded-full p-3 transition"
          >
            ✕
          </button>
          <button onClick={showPrev} className="absolute left-5 top-1/2 transform -translate-y-1/2 text-5xl">
            ‹
          </button>
          <button onClick={showNext} className="absolute right-5 top-1/2 transform -translate-y-1/2 text-5xl">
            ›
          </button>
          <div className="absolute bottom-6 flex gap-6 text-lg">
            <span>
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
