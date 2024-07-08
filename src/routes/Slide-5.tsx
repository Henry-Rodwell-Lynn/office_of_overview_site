import { motion } from "framer-motion";

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
          animate="visible"
          variants={containerVariants}
          className="flex justify-center items-center h-[calc(100vh-2rem)] gap-[10rem]"
        >
          <motion.a variants={childVariants}>
            <img src="/image1.gif" className="w-[25vw]" />
          </motion.a>
          <motion.a variants={childVariants}>
            <img src="/ep.gif" className="w-[25vw]" />
          </motion.a>
          <motion.a variants={childVariants}>
            <video autoPlay muted loop className="w-[25vw] rounded-xl">
              <source
                src="/videos/Sequence 01.mp4"
                type="video/mp4"
              />
            </video>
          </motion.a>
        </motion.div>
      </div>
    </>
  );
}
