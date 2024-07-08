import ImageTrail from "../components/imageTrail";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Slide2() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Preload images
    const imagePromises = Array.from({ length: 12 }, (_, i) => {
      const img = new Image();
      img.src = `/aboutMe/img${i + 1}.png`;
      return new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve;
      });
    });

    // Once all images are preloaded, set the state to true
    Promise.all(imagePromises).then(() => setImagesLoaded(true));
  }, []);

  return (
    <>
      <div
        className={`relative bg-black min-h-screen text-white overflow-hidden z-50 ${
          imagesLoaded ? "" : "cursor-loading"
        }`}
      >
        {/* Top Line */}
        <div className="absolute top-0 left-0 w-[calc(100vw-2rem)] m-4 z-50">
          <div className="bg-white h-[1px]"></div>
        </div>
        {/* Bottom Line */}
        <div className="absolute bottom-0 left-0 w-[calc(100vw-2rem)] m-4 z-50">
          <div className="bg-white h-[1px]"></div>

          {/* Link */}
          <div className="mt-4 flex justify-between z-50">
            <a>A bit about me</a>
            <div className="flex gap-4">
              <a href={`Slide-1`}>◂ Prev</a>
              <a href={`Slide-3`}>Next ▸</a>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0, 0.9, 0.2, 1.01] }}
            className="text-center"
          >
            <a className="text-xl">(drag mouse)</a>
          </motion.div>
        </div>
        <div className="relative items">
          {imagesLoaded && <ImageTrail />}
        </div>
      </div>
    </>
  );
}
