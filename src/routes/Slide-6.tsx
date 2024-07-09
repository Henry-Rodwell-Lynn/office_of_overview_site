import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Slide6() {
  const [isMediaLoaded, setIsMediaLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const totalMediaCount = 10; // Total number of media elements to load

  useEffect(() => {
    if (loadedCount === totalMediaCount) {
      setIsMediaLoaded(true);
    }
  }, [loadedCount, totalMediaCount]);

  const handleMediaLoad = () => {
    setLoadedCount((prevCount) => prevCount + 1);
  };

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
    <div className="relative bg-black min-h-screen text-white overflow-hidden z-50">
      {/* Top Line */}
      <div className="absolute top-0 left-0 w-[calc(100vw-2rem)] m-4 z-50">
        <div className="bg-white h-[1px]"></div>
      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 w-[calc(100vw-2rem)] m-4 z-50">
        <div className="bg-white h-[1px]"></div>
        <div className="mt-4 flex justify-between z-50">
          <a>Time Machine Capital ²</a>
          <div className="flex gap-4">
            <a href={`Slide-5`}>◂ Prev</a>
            <a href={`Slide-7`}>Next ▸</a>
          </div>
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate={isMediaLoaded ? "visible" : "hidden"}
        variants={containerVariants}
        className="grid m-5 mt-7 w-[calc(100vw-2rem)] grid-cols-8 h-[calc(100vh-6rem)] items-center gap-4"
      >
        <motion.div
          variants={childVariants}
          className="h-[calc(30vh-2rem)] w-auto overflow-hidden flex items-center col-span-2 justify-end rounded-lg"
        >
          <img
            src="/ipad.webp"
            className="h-full w-full object-cover rounded-lg"
            onLoad={handleMediaLoad}
          />
        </motion.div>

        <motion.div
          variants={childVariants}
          className="h-[calc(30vh-2rem)] w-auto overflow-hidden flex items-center justify-end rounded-lg col-span-2"
        >
          <video
            autoPlay
            muted
            loop
            className="h-auto w-auto rounded-lg object-cover"
            onLoadedData={handleMediaLoad}
          >
            <source src="/videos/TD Video 1.webm" type="video/mp4" />
          </video>
        </motion.div>

        <motion.div
          variants={childVariants}
          className="h-[calc(60vh-1rem)] w-full overflow-hidden flex items-center justify-start col-span-4 row-span-2 rounded-lg"
        >
          <img
            src="/TMC2 B.png"
            className="h-full w-full object-cover rounded-lg"
            onLoad={handleMediaLoad}
          />
        </motion.div>

        <motion.div
          variants={childVariants}
          className="h-[calc(30vh-2rem)] w-auto overflow-hidden flex items-center justify-end col-span-2 rounded-lg"
        >
          <video
            autoPlay
            muted
            loop
            className="h-auto w-auto object-contain"
            onLoadedData={handleMediaLoad}
          >
            <source src="/videos/Comp 2.webm" type="video/mp4" />
          </video>
        </motion.div>

        <motion.div
          variants={childVariants}
          className="h-[calc(30vh-2rem)] w-auto overflow-hidden flex items-center justify-start rounded-lg"
        >
          <img src="/t (1).png" onLoad={handleMediaLoad} />
        </motion.div>
        <motion.div
          variants={childVariants}
          className="h-[calc(30vh-2rem)] w-auto overflow-hidden flex items-center justify-start rounded-lg"
        >
          <img src="/t (4).png" onLoad={handleMediaLoad} />
        </motion.div>
        <motion.div
          variants={childVariants}
          className="h-[calc(30vh-2rem)] w-auto overflow-hidden flex items-center justify-start rounded-lg"
        >
          <img src="/t (2).png" onLoad={handleMediaLoad} />
        </motion.div>
        <motion.div
          variants={childVariants}
          className="h-[calc(30vh-2rem)] w-auto overflow-hidden flex items-center justify-start rounded-lg"
        >
          <img src="/t (3).png" onLoad={handleMediaLoad} />
        </motion.div>

        <motion.div
          variants={childVariants}
          className="h-[calc(30vh-2rem)] w-auto overflow-hidden flex items-center justify-start rounded-lg col-span-2"
        >
          <video
            autoPlay
            muted
            loop
            className="h-full w-full object-cover"
            onLoadedData={handleMediaLoad}
          >
            <source src="/videos/News Article 1.webm" type="video/mp4" />
          </video>
        </motion.div>

        <motion.div
          variants={childVariants}
          className="h-[calc(30vh-2rem)] w-auto overflow-hidden flex items-center justify-end rounded-lg col-span-3"
        >
          <img src="/IGtmc.png" onLoad={handleMediaLoad} />
        </motion.div>

        <motion.div
          variants={childVariants}
          className="h-[calc(30vh-2rem)] w-auto overflow-hidden flex items-center col-span-1 justify-end rounded-lg"
        >
          <img
            src="/fill-1.png"
            className="h-full w-full object-cover rounded-lg"
            onLoad={handleMediaLoad}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
