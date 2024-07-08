import { motion } from "framer-motion";

export default function Slide4() {
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
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay:0.2}}
          className="flex justify-center items-center h-screen"
        >
          <motion.a className="w-full h-full object-cover">
            <img
              src="/ipad.png"
              className="object-cover object-center w-full h-full"
              alt="iPad"
            />
          </motion.a>
        </motion.div>
      </div>
    </>
  );
}
