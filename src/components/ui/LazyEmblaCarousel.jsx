import { useEffect, useState, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { getImagePaths } from "@/lib/getImagePaths";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function LazyEmblaCarousel({ directory }) {
  const [images, setImages] = useState([]);
  // const [loadedImages, setLoadedImages] = useState({});
  const loadedImagesRef = useRef({});
  const [, forceUpdate] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [fullscreenClosing, setFullscreenClosing] = useState(false);
  const [emblaRef, embla] = useEmblaCarousel({ loop: false });
  const [fullscreenRef, fullscreenEmbla] = useEmblaCarousel({ loop: false });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const ANIMATION_FADEOUT_DURATION = 300;

  const handleNext = useCallback(() => {
    embla?.scrollNext();
    fullscreenEmbla?.scrollNext();
  }, [embla, fullscreenEmbla]);

  const handlePrev = useCallback(() => {
    embla?.scrollPrev();
    fullscreenEmbla?.scrollPrev();
  }, [embla, fullscreenEmbla]);

  const handleClose = () => {
    setFullscreenClosing(true);
    setTimeout(() => {
      setFullscreen(false);
      setFullscreenClosing(false);
    }, ANIMATION_FADEOUT_DURATION); // Match the animation duration
  };

  // Lazy load images
  const loadVisibleImages = useCallback(async () => {
    // console.count("LazyEmblaCarousel render");
    // console.time("loadVisibleImages");
    if (!images.length || selectedIndex < 0 || selectedIndex >= images.length) return;
    const indexes = [selectedIndex];
    if (selectedIndex + 1 < images.length) {
      indexes.push(selectedIndex + 1);
    }

    const updates = {};
    await Promise.all(
      indexes.map(async (i) => {
        if (!loadedImagesRef.current[i]) {
          const src = await images[i].load();
          updates[i] = src;
        }
      })
    );

    if (Object.keys(updates).length > 0) {
      // setLoadedImages((prev) => ({ ...prev, ...updates }));
      Object.assign(loadedImagesRef.current, updates);
      forceUpdate((prev) => prev + 1);
    }
    // console.timeEnd("loadVisibleImages");
  }, [images, selectedIndex /* , loadedImages */]);

  useEffect(() => {
    loadVisibleImages();
    setCanScrollPrev(embla?.canScrollPrev);
    setCanScrollNext(embla?.canScrollNext);
  }, [loadVisibleImages, embla]);

  // Load image metadata
  useEffect(() => {
    setImages(getImagePaths(directory));
  }, [directory]);

  // Sync normal carousel index
  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelectedIndex(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
    return () => embla.off("select", onSelect);
  }, [embla]);

  // Sync fullscreen carousel index
  useEffect(() => {
    if (fullscreenEmbla) {
      fullscreenEmbla.scrollTo(selectedIndex, true);
      const onSelect = () => setSelectedIndex(fullscreenEmbla.selectedScrollSnap());
      fullscreenEmbla.on("select", onSelect);
      console.log("fs fired");
      return () => fullscreenEmbla.off("select", onSelect);
    }
  }, [fullscreenEmbla, selectedIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (!fullscreen) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleNext, handlePrev, fullscreen]);

  if (!images.length) return <div className="text-center py-12">Loading carousel...</div>;

  return (
    <>
      <EmblaCarousel
        emblaRef={emblaRef}
        images={images}
        loadedImagesRef={loadedImagesRef}
        selectedIndex={selectedIndex}
        handleNext={handleNext}
        handlePrev={handlePrev}
        onFullScreen={() => setFullscreen(true)}
        canScrollPrev={canScrollPrev}
        canScrollNext={canScrollNext}
      />

      {fullscreen && (
        <EmblaCarouselFullscreenView
          emblaRef={fullscreenRef}
          images={images}
          loadedImagesRef={loadedImagesRef}
          selectedIndex={selectedIndex}
          handlePrev={handlePrev}
          handleNext={handleNext}
          handleClose={handleClose}
          fullscreenClosing={fullscreenClosing}
          canScrollPrev={canScrollPrev}
          canScrollNext={canScrollNext}
        />
      )}
    </>
  );
}

const EmblaCarousel = ({
  emblaRef,
  images,
  loadedImagesRef,
  selectedIndex,
  handlePrev,
  handleNext,
  onFullScreen,
  canScrollPrev,
  canScrollNext,
}) => {
  return (
    <>
      <div className="relative flex flex-col gap-y-4">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex flex-row basis-full">
            {images.map((img, index) => (
              <div key={img.id} className="basis-full shrink-0 flex justify-center items-center">
                {loadedImagesRef.current[index] ? (
                  <img
                    src={loadedImagesRef.current[index]}
                    alt={`Slide ${index}`}
                    className="min-h-72 max-h-72 object-contain max-w-full cursor-zoom-in"
                    onClick={onFullScreen}
                    loading="lazy"
                  />
                ) : (
                  <div className="text-muted-foreground">Loading image...</div>
                )}
              </div>
            ))}
          </div>
          <button
            role="button"
            aria-label="Previous slide"
            onClick={handlePrev}
            className="absolute -left-7 top-1/2 -translate-y-1/2 text-slate-500 disabled:opacity-20 disabled:cursor-default"
            disabled={!canScrollPrev}
          >
            <ChevronLeft size={30} strokeWidth={3} />
          </button>
          <button
            role="button"
            aria-label="Next slide"
            onClick={handleNext}
            className="absolute -right-7 top-1/2 -translate-y-1/2 text-slate-500 disabled:opacity-20 disabled:cursor-default"
            disabled={!canScrollNext}
          >
            <ChevronRight size={30} strokeWidth={3} />
          </button>
        </div>
        <div className="flex items-center justify-center text-xs">
          <span>
            {selectedIndex + 1} / {images.length}
          </span>
        </div>
      </div>
    </>
  );
};

const EmblaCarouselFullscreenView = ({
  emblaRef,
  images,
  loadedImagesRef,
  selectedIndex,
  handlePrev,
  handleNext,
  handleClose,
  fullscreenClosing,
  canScrollPrev,
  canScrollNext,
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center text-muted-foreground bg-black/70 backdrop-blur-lg  ${
        fullscreenClosing ? "animate-fade-zoom-out" : "animate-fade-zoom-in"
      }`}
    >
      <div className="overflow-hidden h-full w-full " ref={emblaRef}>
        <div
          className="flex h-full transition-transform duration-400 ease-in-out"
          style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={img.id} className="min-w-full flex justify-center items-center">
              {loadedImagesRef.current[index] ? (
                <img
                  src={loadedImagesRef.current[index]}
                  alt={`Fullscreen ${index}`}
                  className="max-w-[83vw] object-contain"
                />
              ) : (
                <div className="text-white">Loading...</div>
              )}
            </div>
          ))}
        </div>
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
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 text-white p-2 rounded-full"
        disabled={!canScrollPrev}
      >
        <ChevronLeft size={24} strokeWidth={2} />
      </button>
      <button
        role="button"
        aria-label="Next slide"
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 text-white p-2 rounded-full"
        disbaled={!canScrollNext}
      >
        <ChevronRight size={24} strokeWidth={2} />
      </button>
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 text-center bg-white/10 text-white px-6 py-2 rounded-full min-w-[98px]">
        {selectedIndex + 1} / {images.length}
      </div>
    </div>
  );
};
/* shrink-0 grow-0 basis-full p-0 */
