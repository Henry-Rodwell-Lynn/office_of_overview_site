import { motion } from "framer-motion";

export default function Slide6() {
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
        animate="visible"
        variants={containerVariants}
        className="grid m-5 mt-7 w-[calc(100vw-2rem)] grid-cols-8 h-[calc(100vh-6rem)] items-center gap-4"
      >
        <motion.div
          variants={childVariants}
          className="h-[calc(30vh-2rem)] w-auto overflow-hidden flex items-center justify-end rounded-lg col-span-2"
        >
          <video autoPlay muted loop className="h-full w-auto rounded-lg object-cover">
            <source src="/videos/TD Video 1.webm" type="video/mp4" />
          </video>
        </motion.div>

        <motion.div
          variants={childVariants}
          className="h-[calc(30vh-2rem)] w-auto overflow-hidden flex items-center col-span-2 justify-end rounded-lg"
        >
          <img src="/ipad.png" className="h-full w-full object-cover rounded-lg"/>
        </motion.div>

        <motion.div
          variants={childVariants}
          className="h-[calc(60vh-1rem)] w-full overflow-hidden flex items-center justify-start col-span-4 row-span-2 rounded-lg"
        >
          <video autoPlay muted loop className="h-full w-full object-cover rounded-lg">
            <source src="/videos/tmc2.mkv" type="video/mp4" />
          </video>
        </motion.div>

        <motion.div
          variants={childVariants}
          className="h-[calc(30vh-2rem)] w-auto overflow-hidden flex items-center justify-end col-span-4"
        >
          <video autoPlay muted loop className="h-full w-auto object-contain">
            <source src="" type="video/mp4" />
          </video>
        </motion.div>

        <motion.div
          variants={childVariants}
          className="h-[calc(30vh-2rem)] w-auto overflow-hidden flex items-center justify-start rounded-lg"
        >
          <img src="/t (1).png" />
        </motion.div>
        <motion.div
          variants={childVariants}
          className="h-[calc(30vh-2rem)] w-auto overflow-hidden flex items-center justify-start rounded-lg"
        >
          <img src="/t (4).png" />
        </motion.div>
        <motion.div
          variants={childVariants}
          className="h-[calc(30vh-2rem)] w-auto overflow-hidden flex items-center justify-start rounded-lg"
        >
          <img src="/t (2).png" />
        </motion.div>
        <motion.div
          variants={childVariants}
          className="h-[calc(30vh-2rem)] w-auto overflow-hidden flex items-center justify-start rounded-lg"
        >
          <img src="/t (3).png" />
        </motion.div>

        <motion.div
          variants={childVariants}
          className="h-[calc(30vh-2rem)] w-auto overflow-hidden flex items-center justify-end rounded-lg col-span-2"
        >
          <img src="/ipad.png" />
        </motion.div>

        <motion.div
          variants={childVariants}
          className="h-[calc(30vh-2rem)] w-[calc(30vh-2rem)] overflow-hidden flex items-center justify-start rounded-lg col-span-2 object-contain"
        >
          <a>
            <img src="/fill-1.png" className="object-contain w-auto h-full" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
