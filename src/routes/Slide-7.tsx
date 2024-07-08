import { motion } from "framer-motion";

export default function Slide7() {
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
          <a>Expanded Portfolio</a>
          <div className="flex gap-4">
            <a href={`Slide-6`}>◂ Prev</a>
            <a href={`Slide-8`}>Next ▸</a>
          </div>
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="grid m-5 mt-7 w-[clac(100vw-2rem)] grid-cols-4 h-[calc(100vh-6rem)] items-center gap-4 "
      >
        <motion.div
          variants={childVariants}
          className="h-[calc(50vh-4rem)] w-auto overflow-hidden flex items-center justify-end col-span-2"
        >
          <video autoPlay muted loop className="h-full w-auto object-contain">
            <source src="/videos/tmc2.mkv" type="video/mp4" />
          </video>
        </motion.div>

        <motion.div
          variants={childVariants}
          className="h-[calc(50vh-4rem)] w-auto overflow-hidden flex items-center justify-start col-span-2"
        >
          <video autoPlay muted loop className="h-full w-auto object-contain">
            <source src="/videos/pyrsos.mkv" type="video/mp4" />
          </video>
        </motion.div>

        <motion.div
          variants={childVariants}
          className="h-[calc(50vh-4rem)] w-auto overflow-hidden flex items-center justify-end col-span-2"
        >
          <video autoPlay muted loop className="h-full w-auto object-contain">
            <source src="/videos/leopard.mkv" type="video/mp4" />
          </video>
        </motion.div>

        <motion.div
          variants={childVariants}
          className="h-[calc(50vh-4rem)] w-auto overflow-hidden flex items-center justify-start col-span-2"
        >
          <video autoPlay muted loop className="h-full w-auto object-contain">
            <source src="/videos/curait.mkv" type="video/mp4" />
          </video>
        </motion.div>
      </motion.div>
    </div>
  );
}
