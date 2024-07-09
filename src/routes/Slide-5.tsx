import { motion } from "framer-motion";
import { useState } from "react";

export default function Slide5() {
  // Parent variant to control staggered animation
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        staggerChildren: 0.1,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  // State to track if all media are loaded
  const [mediaLoaded, setMediaLoaded] = useState({ image1: false, image2: false, video: false });

  // Function to update the media loaded state
  const handleMediaLoad = (mediaName: string) => {
    setMediaLoaded((prev) => ({ ...prev, [mediaName]: true }));
  };

  // Determine if all media are loaded
  const allMediaLoaded = Object.values(mediaLoaded).every(Boolean);

  return (
    <>
      <div className="relative bg-black min-h-screen text-white overflow-hidden z-50">
        {/* Top Line */}
        <div className="absolute top-0 left-0 w-[calc(100vw-2rem)] m-4 z-50">
          <div className="bg-white h-[1px]"></div>
        </div>

        {/* Bottom Line */}
        <div className="absolute bottom-0 left-0 w-[calc(100vw-2rem)] m-4 z-50">
          <div className="bg-white h-[1px]"></div>

          {/* Link */}
          <div className="mt-4 flex justify-between z-50">
            <a>Time Machine Capital ²</a>
            <div className="flex gap-4">
              <a href={`Slide-4`}>◂ Prev</a>
              <a href={`Slide-6`}>Next ▸</a>
            </div>
          </div>
        </div>

        {/* Content */}
        <motion.div
          initial="hidden"
          animate={allMediaLoaded ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex justify-center items-center h-[calc(100vh-2rem)] gap-[10rem]"
        >
          <motion.a variants={childVariants}>
            <img
              src="/image1.gif"
              className="w-[25vw]"
              onLoad={() => handleMediaLoad("image1")}
              style={{ display: mediaLoaded.image1 ? "block" : "none" }}
            />
          </motion.a>
          <motion.a variants={childVariants}>
            <img
              src="/ep.gif"
              className="w-[25vw]"
              onLoad={() => handleMediaLoad("image2")}
              style={{ display: mediaLoaded.image2 ? "block" : "none" }}
            />
          </motion.a>
          <motion.a variants={childVariants}>
            <video
              autoPlay
              muted
              loop
              className="w-[25vw] rounded-xl"
              onCanPlayThrough={() => handleMediaLoad("video")}
              style={{ display: mediaLoaded.video ? "block" : "none" }}
            >
              <source
                src="/videos/Sequence 01.webm"
                type="video/mp4"
              />
            </video>
          </motion.a>
        </motion.div>
      </div>
    </>
  );
}
