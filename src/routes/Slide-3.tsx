import { motion } from "framer-motion";
import { useState } from "react";

export default function Slide3() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <>
      <div className="relative bg-[#ffffff] min-h-screen text-black overflow-hidden z-50">
        {/* Top Line */}
        <div className="absolute top-0 left-0 w-[calc(100vw-2rem)] m-4 z-50">
          <div className="bg-black h-[1px]"></div>
        </div>

        {/* Bottom Line */}
        <div className="absolute bottom-0 left-0 w-[calc(100vw-2rem)] m-4 z-50">
          <div className="bg-black h-[1px]"></div>

          {/* Link */}
          <div className="mt-4 flex justify-between z-50">
            <a>Bringing brands to life through digital</a>
            <div className="flex gap-4">
              <a href={`Slide-2`}>◂ Prev</a>
              <a href={`Slide-4`}>Next ▸</a>
            </div>
          </div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isImageLoaded ? { opacity: 1, scale: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, ease: [0, 0.9, 0.2, 1.01] }}
          className="flex justify-center items-center h-[calc(100vh-2rem)]"
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://youtu.be/mxe3JX93QdY?si=BA6mtL-2twzggG0m&t=493"
            target="_blank"
          >
            <img
              src="/EH.webp"
              className="h-[500px] rounded-xl"
              onLoad={() => setIsImageLoaded(true)}
              style={{ display: isImageLoaded ? "block" : "none" }}
            />
          </motion.a>
        </motion.div>
      </div>
    </>
  );
}
