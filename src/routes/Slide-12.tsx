import { motion } from "framer-motion";
import { useState } from "react";

export default function Slide12() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

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
            <a>🏓 Ping Pong</a>
            <div className="flex gap-4">
              <a href={`Slide-11`}>◂ Prev</a>
              <a href={`Slide-13`}>Next ▸</a>
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
            href="https://henryrodwell.com/"
            target="_blank"
          >
            <img
              src="/giphy.webp"
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
