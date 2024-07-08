import { motion } from "framer-motion";
import { useState } from "react";

export default function Slide1() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <>
      <div className="relative bg-black min-h-screen text-white overflow-hidden">
        {/* Top Line */}
        <div className="absolute top-0 left-0 w-[calc(100vw-2rem)] m-4">
          <div className="bg-white h-[1px]"></div>
        </div>

        {/* Bottom Line */}
        <div className="absolute bottom-0 left-0 w-[calc(100vw-2rem)] m-4">
          <div className="bg-white h-[1px]"></div>

          {/* Link */}
          <div className="mt-4 flex justify-between">
            <a>🤖 I am definatley a human...</a>
            <div className="flex gap-4">
              <a href={`/`}>◂ Prev</a>
              <a href={`Slide-2`}>Next ▸</a>
            </div>
          </div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isImageLoaded ? { opacity: 1, scale: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, ease: [0, 0.9, 0.2, 1.01] }}
          whileHover={{ scale: 8 }}
          className="absolute left-[20%] top-[40%]"
        >
          <img
            src="/Cowboy.webp"
            alt="Sparkles"
            className="flex h-[50px]"
            onLoad={() => setIsImageLoaded(true)}
            style={{ display: isImageLoaded ? "block" : "none" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0, 0.9, 0.2, 1.01] }}
          whileHover={{ scale: 8 }}
          className="absolute left-[80%] top-[20%]"
        >
          <img src="/Noddy.webp" alt="Sparkles" className="flex h-[50px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0, 0.9, 0.2, 1.01] }}
          whileHover={{ scale: 8 }}
          className="absolute left-[10%] top-[70%]"
        >
          <img src="/bow.webp" alt="Sparkles" className="flex h-[50px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0, 0.9, 0.2, 1.01] }}
          whileHover={{ scale: 8 }}
          className="absolute left-[90%] top-[60%]"
        >
          <img src="/Pizza.webp" alt="Sparkles" className="flex h-[50px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0, 0.9, 0.2, 1.01] }}
          whileHover={{ scale: 8 }}
          className="absolute left-[44%] top-[8%]"
        >
          <img src="/post-run.webp" alt="Sparkles" className="flex h-[50px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0, 0.9, 0.2, 1.01] }}
          whileHover={{ scale: 8 }}
          className="absolute left-[66%] top-[80%]"
        >
          <img src="/stars.webp" alt="Sparkles" className="flex h-[50px]" />
        </motion.div>
      </div>
    </>
  );
}
