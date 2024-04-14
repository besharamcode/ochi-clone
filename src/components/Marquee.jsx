import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.1"
      className="w-full h-[30vw] text-white bg-[#004D43] grid place-content-center rounded-tl-3xl rounded-tr-3xl"
    >
      <div className="whitespace-nowrap flex overflow-hidden border-t border-b pt-6">
        <motion.h2
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 6,
          }}
          className="text-[20vw] font-bold uppercase leading-[16vw] font-bebasNeue mr-8"
        >
          We are ochi
        </motion.h2>
        <motion.h2
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 6,
          }}
          className="text-[20vw] font-bold uppercase leading-[16vw] font-bebasNeue mr-8"
        >
          We are ochi
        </motion.h2>
      </div>
    </div>
  );
};

export default Marquee;
