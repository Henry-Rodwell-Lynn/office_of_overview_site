import { motion } from "framer-motion";
import { useState } from "react";

export default function Slide4() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <>
      <div className="relative bg-[#dddddd] min-h-screen text-black overflow-hidden z-50">
        {/* Top Line */}
        <div className="absolute top-0 left-0 w-[calc(100vw-2rem)] m-4 z-50">
          <div className="bg-white h-[1px]"></div>
        </div>

        {/* Bottom Line */}
        <div className="absolute bottom-0 left-0 w-[calc(100vw-2rem)] m-4 z-50">
          <div className="bg-white h-[1px]"></div>

          {/* Link */}
          <div className="mt-4 flex justify-between z-50 mix-blend-difference">
            <a className="text-white">Time Machine Capital ²</a>
            <div className="flex gap-4">
              <a href={`Slide-3`} className="text-white">◂ Prev</a>
              <a href={`Slide-5`} className="text-white">Next ▸</a>
            </div>
          </div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={isImageLoaded ? { opacity: 1, scale: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center items-center h-screen"
        >
          <motion.div className="w-full h-full object-cover">
            <img
              src="/ipad.webp"
              className="object-cover object-center w-full h-full"
              alt="iPad"
              onLoad={() => setIsImageLoaded(true)}
              style={{ display: isImageLoaded ? "block" : "none" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
