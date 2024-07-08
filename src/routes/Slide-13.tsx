import { motion } from "framer-motion";

export default function Slide13() {
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
            <a>🙏</a>
            <div className="flex gap-4">
              <a href={`Slide-12`}>◂ Prev</a>
              <a href={`/`}>Home ▸</a>
            </div>
          </div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0, 0.9, 0.2, 1.01] }}
          className="flex justify-center items-center h-[calc(100vh-2rem)]"
        >
          <a className="text-9xl">Thank you!</a>
          <img src="/sparkles_2728.png" alt="Sparkles" className=" hidden" />
        </motion.div>
      </div>
    </>
  );
}
