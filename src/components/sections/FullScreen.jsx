import React, { useRef, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const images = [
  "https://via.placeholder.com/150/0000FF/FFFFFF?text=Image+1",
  "https://via.placeholder.com/150/FF0000/FFFFFF?text=Image+2",
  "https://via.placeholder.com/150/00FF00/000000?text=Image+3",
  "https://picsum.photos/id/10/150/150",
  "https://picsum.photos/id/20/150/150",
  "https://picsum.photos/id/30/150/150",
  "https://source.unsplash.com/random/150x150?sig=1",
  "https://source.unsplash.com/random/150x150?sig=2",
  "https://source.unsplash.com/random/150x150?sig=3",
  "https://dummyimage.com/150x150/000/fff&text=Image+10",
];

export default function FullScreen() {
  const emblaRef = useRef(null);
  const [viewportRef] = useEmblaCarousel({ loop: true });
  const [fullscreen, setFullscreen] = useState(false);

  const toggleFullscreen = () => {
    const el = emblaRef.current;
    if (!el) return;
    if (!fullscreen) {
      el.classList.add("min-w-lvw", "min-h-lvh");
    } else {
      el.classList.remove("min-w-lvw", "min-h-lvh");
    }
    setFullscreen(!fullscreen);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <div ref={emblaRef} className="relative w-full max-w-4xl border-4 border-white rounded-xl overflow-hidden">
        <div className="embla overflow-hidden" ref={viewportRef}>
          <div className="flex">
            {images.map((src, i) => (
              <div className="flex-[0_0_100%] p-2" key={i}>
                <img
                  src={src}
                  alt={`Slide ${i + 1}`}
                  className="rounded-md w-full h-auto object-cover"
                  loading="lazy"
                  onClick={toggleFullscreen}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Fullscreen Toggle Button */}
        {/* <button
          onClick={toggleFullscreen}
          className="absolute top-3 right-3 text-white bg-black bg-opacity-50 px-3 py-1 rounded text-sm"
        >
          Toggle Fullscreen
        </button> */}
      </div>
    </div>
  );
}
