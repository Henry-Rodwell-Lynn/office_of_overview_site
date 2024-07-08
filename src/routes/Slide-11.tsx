import { motion } from "framer-motion";

export default function Slide11() {
  return (
    <>
      <div className="relative bg-black min-h-screen text-black overflow-hidden z-50">
        {/* Top Line */}
        <div className="absolute top-0 left-0 w-[calc(100vw-2rem)] m-4 z-50">
          <div className="bg-white h-[1px]"></div>
        </div>

        {/* Bottom Line */}
        <div className="absolute bottom-0 left-0 w-[calc(100vw-2rem)] m-4 z-50">
          <div className="bg-white h-[1px]"></div>

          {/* Link */}
          <div className="mt-4 flex justify-between z-50 mix-blend-difference">
            <a className="text-white">Motion Graphics</a>
            <div className="flex gap-4">
              <a href={`Slide-10`} className="text-white">◂ Prev</a>
              <a href={`Slide-12`} className="text-white">Next ▸</a>
            </div>
          </div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center items-center h-screen"
        >
          <motion.div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/Henry Rodwell Showreel.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
