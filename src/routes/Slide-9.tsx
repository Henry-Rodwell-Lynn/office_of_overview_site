import { motion } from "framer-motion";
import { useState } from "react";

export default function Slide9() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

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
            <a>Custom ShaderKit</a>
            <div className="flex gap-4">
              <a href={`Slide-8`}>◂ Prev</a>
              <a href={`Slide-10`}>Next ▸</a>
            </div>
          </div>
        </div>

        {/* Content */}
        <motion.div
          initial="hidden"
          animate={isVideoLoaded ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex justify-center items-center h-[calc(100vh-2rem)] gap-[10rem]"
        >
          <motion.a variants={childVariants}>
            <video
              autoPlay
              muted
              loop
              className="h-[75vh] rounded-xl"
              onLoadedData={() => setIsVideoLoaded(true)}
              style={{ display: isVideoLoaded ? "block" : "none" }}
            >
              <source src="/videos/ToonShader-SQ.mp4" type="video/mp4" />
            </video>
          </motion.a>
        </motion.div>
      </div>
    </>
  );
}
