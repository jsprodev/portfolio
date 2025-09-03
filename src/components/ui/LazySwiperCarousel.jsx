import { useEffect, useState, useCallback, useRef } from "react";
import { getImagePaths } from "@/lib/getImagePaths";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Parallax } from "swiper/modules";
import "swiper/css/bundle";

export const LazySwiperCarousel = ({ directory }) => {
  const [images, setImages] = useState([]);
  const [loadedImages, setLoadedImages] = useState({});
  const [selectedIndex, setSelectedIndex] = useState(0);

  const swiperRef = useRef(null);
  const slideNextRef = useRef(null);
  const slidePrevRef = useRef(null);

  const [fullscreen, setFullscreen] = useState(false);
  const [fullscreenClosing, setFullscreenClosing] = useState(false);
  //   const [slideDirection, setSlideDirection] = useState(null);
  const ANIMATION_FADEOUT_DURATION = 300;
  const animationTimeoutRef = useRef(null);

  const showNext = useCallback(() => {
    // setSlideDirection("next");
    setSelectedIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex));
  }, [images.length]);

  const showPrev = useCallback(() => {
    // setSlideDirection("prev");
    setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  }, []);

  const closeLightbox = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(selectedIndex);
    }
    setFullscreenClosing(true);
    // animation timeout on closing lightbox
    animationTimeoutRef.current = setTimeout(() => {
      setFullscreen(false);
      setFullscreenClosing(false);
    }, ANIMATION_FADEOUT_DURATION); // Match the animation duration
  }, [selectedIndex]);

  // cleanup ensures the timeout is cleared
  useEffect(() => {
    return () => animationTimeoutRef.current && clearTimeout(animationTimeoutRef.current);
  }, []);

  // Lazy load images
  const loadVisibleImages = useCallback(async () => {
    if (!images.length || selectedIndex < 0 || selectedIndex >= images.length) return;

    const indexes = [selectedIndex];
    if (selectedIndex + 1 < images.length) {
      indexes.push(selectedIndex + 1);
    }

    const updates = {};
    await Promise.all(
      indexes.map(async (i) => {
        if (!loadedImages[i]) {
          const src = await images[i].load();
          updates[i] = src;
        }
      })
    );

    if (Object.keys(updates).length > 0) {
      setLoadedImages((prev) => ({ ...prev, ...updates }));
      //   Object.assign(loadedImagesRef.current, updates);
      //   forceUpdate((prev) => prev + 1);
    }
  }, [images, selectedIndex, loadedImages]);

  // Load image metadata
  useEffect(() => {
    setImages(getImagePaths(directory));
  }, [directory]);

  // load visible images max 2
  useEffect(() => {
    loadVisibleImages();
  }, [loadVisibleImages]);

  // Keyboard navigation
  useEffect(() => {
    if (!fullscreen) return;
    const handleKeyNavigation = (e) => {
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyNavigation);
    return () => window.removeEventListener("keydown", handleKeyNavigation);
  }, [fullscreen, showNext, showPrev, closeLightbox]);

  if (!images.length) return <div className="text-center py-12">Loading carousel...</div>;

  return (
    <>
      <div className="relative overflow-hidden">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          //   loop={true}
          slidesPerView={1}
          spaceBetween={40}
          modules={[Pagination, Navigation]}
          pagination={{
            type: "fraction",
          }}
          watchOverflow={false}
          navigation={{
            prevEl: slidePrevRef.current,
            nextEl: slideNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = slidePrevRef.current;
            swiper.params.navigation.nextEl = slideNextRef.current;
          }}
          onRealIndexChange={(swiperCore) => setSelectedIndex(swiperCore.realIndex)}
          //   onActiveIndexChange={(swiperCore) => setSelectedIndex(swiperCore.activeIndex)}
          className="hbk-swiper"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="m-auto">
              {loadedImages[index] ? (
                <div className="flex items-center justify-center lg:h-[16rem]">
                  <img
                    src={loadedImages[index]}
                    alt={`Slide ${index}`}
                    className="object-cover cursor-zoom-in w-full max-h-full"
                    loading="lazy"
                    onClick={() => setFullscreen(true)}
                  />
                </div>
              ) : (
                <div className="text-center h-auto text-muted-foreground" key={index}>
                  Loading image...
                </div>
              )}
            </SwiperSlide>
          ))}
          <button
            ref={slidePrevRef}
            role="button"
            aria-label="Previous slide"
            className="absolute z-10 -left-1 top-1/2 -translate-y-1/2 text-blue-500 disabled:opacity-20 disabled:cursor-default"
          >
            <ChevronLeft size={32} strokeWidth={2.3} />
          </button>
          <button
            ref={slideNextRef}
            role="button"
            aria-label="Next slide"
            className="absolute z-10 -right-1 top-1/2 -translate-y-1/2 text-blue-500 disabled:opacity-20 disabled:cursor-default"
          >
            <ChevronRight size={32} strokeWidth={2.3} />
          </button>
        </Swiper>
      </div>
      {fullscreen && (
        <LightboxCarousel
          totalImages={images.length}
          loadedImages={loadedImages}
          selectedIndex={selectedIndex}
          handlePrev={showPrev}
          handleNext={showNext}
          handleClose={closeLightbox}
          fullscreen={fullscreen}
          fullscreenClosing={fullscreenClosing}
          //   slideDirection={slideDirection}
        />
      )}
    </>
  );
};

export const LightboxCarousel = ({
  totalImages,
  loadedImages,
  selectedIndex,
  handlePrev,
  handleNext,
  handleClose,
  fullscreenClosing,
  fullscreen,
  //   slideDirection,
}) => {
  useBodyScrollLock(fullscreen);
  const lastIndexRef = useRef(selectedIndex);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (lastIndexRef.current === selectedIndex) return; // first render → no animation

    selectedIndex > lastIndexRef.current
      ? setAnimationClass("animate-slide-next")
      : setAnimationClass("animate-slide-prev");

    lastIndexRef.current = selectedIndex;

    // clear class after animation ends
    // const timeout = setTimeout(() => setAnimationClass(""), 300);
    // return () => clearTimeout(timeout);
  }, [selectedIndex]);
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center text-muted-foreground bg-black/70 backdrop-blur-lg  ${
        fullscreenClosing ? "animate-fade-zoom-out" : "animate-fade-zoom-in"
      }`}
    >
      <div
        key={selectedIndex} // force re-render per slide
        className={animationClass}
      >
        <img className="max-w-[85vw] max-h-[80vh] object-contain" src={loadedImages[selectedIndex]} />
      </div>
      <button
        role="button"
        aria-label="Close Fullscreen"
        onClick={handleClose}
        className="absolute top-4 right-4 bg-white/10 text-white p-2 rounded-full"
      >
        <X size={24} strokeWidth={2} />
      </button>
      <button
        role="button"
        aria-label="Previous slide"
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 text-white p-2 rounded-full dark:bg-card"
      >
        <ChevronLeft size={24} strokeWidth={2} />
      </button>
      <button
        role="button"
        aria-label="Next slide"
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 text-white p-2 rounded-full"
      >
        <ChevronRight size={24} strokeWidth={2} />
      </button>
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 text-center bg-white/10 text-white px-6 py-2 rounded-full min-w-[98px]">
        {selectedIndex + 1} / {totalImages}
      </div>
    </div>
  );
};
